'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Equipment } from '@/lib/equipment';
import EquipmentForm from '@/components/admin/EquipmentForm';
import EquipmentItem from '@/components/admin/EquipmentItem';

export default function AdminEquipmentPage() {
  const router = useRouter();
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Equipment | null>(null);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }

    fetchEquipment();
  }, [router]);

  const fetchEquipment = async () => {
    try {
      const response = await fetch('/api/equipment');
      const data = await response.json();
      setEquipment(data);
    } catch (error) {
      console.error('Failed to fetch equipment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: Equipment) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this equipment?')) {
      return;
    }

    try {
      const response = await fetch(`/api/equipment/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchEquipment();
      } else {
        alert('Failed to delete equipment');
      }
    } catch (error) {
      console.error('Failed to delete equipment:', error);
      alert('Failed to delete equipment');
    }
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingItem(null);
    fetchEquipment();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-wine-200 border-t-wine-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading equipment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="glass border-b border-white/20 sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-jakarta font-bold gradient-text mb-1">
                Equipment Management
              </h1>
              <p className="text-gray-600 text-sm">Manage your manufacturing equipment and facilities</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleAdd}
                className="group flex items-center px-6 py-3 bg-gradient-to-r from-wine-600 to-burgundy-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Equipment
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-3 glass rounded-xl font-medium text-gray-700 hover:text-wine-700 hover:bg-white/80 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1m6-4H9a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm ? (
          <EquipmentForm
            equipment={editingItem}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingItem(null);
            }}
          />
        ) : (
          <>
            {equipment.length === 0 ? (
              <div className="glass rounded-3xl p-12 sm:p-16 text-center shadow-xl border border-white/30">
                <div className="inline-block p-6 bg-gradient-to-br from-wine-100 to-burgundy-100 rounded-2xl mb-6">
                  <svg className="w-16 h-16 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold gradient-text mb-3">No Equipment Found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Get started by adding your first piece of equipment to showcase your manufacturing capabilities.
                </p>
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-wine-600 to-burgundy-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Your First Equipment
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {equipment.map((item) => (
                  <EquipmentItem
                    key={item.id}
                    equipment={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
