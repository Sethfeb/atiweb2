'use client';

import { useState, useEffect } from 'react';
import { Equipment } from '@/lib/equipment';

interface EquipmentFormProps {
  equipment: Equipment | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function EquipmentForm({ equipment, onSave, onCancel }: EquipmentFormProps) {
  const [formData, setFormData] = useState({
    title: { en: '', ko: '', zh: '' },
    description: { en: '', ko: '', zh: '' },
    specifications: { en: '', ko: '', zh: '' },
    images: [] as string[],
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (equipment) {
      setFormData({
        title: equipment.title,
        description: equipment.description,
        specifications: equipment.specifications,
        images: equipment.images || [],
      });
    }
  }, [equipment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = equipment
        ? `/api/equipment/${equipment.id}`
        : '/api/equipment/create';
      const method = equipment ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      } else {
        alert('Failed to save equipment');
      }
    } catch (error) {
      console.error('Failed to save equipment:', error);
      alert('Failed to save equipment');
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // In a real application, you would upload to a server
    // For now, we'll use data URLs as placeholders
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, imageUrl],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="glass rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/30">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-jakarta font-bold gradient-text mb-2">
            {equipment ? 'Edit Equipment' : 'Add New Equipment'}
          </h2>
          <p className="text-gray-600 text-sm">
            {equipment ? 'Update equipment information' : 'Fill in the details to add new equipment'}
          </p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white/50 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title Fields */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-wine-600 to-burgundy-600 rounded-full"></span>
            Title (Multilingual)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                English <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title.en}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: { ...prev.title, en: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50"
                placeholder="Equipment title in English"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Korean <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title.ko}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: { ...prev.title, ko: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50"
                placeholder="한국어 제목"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Chinese <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title.zh}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: { ...prev.title, zh: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50"
                placeholder="中文标题"
              />
            </div>
          </div>
        </div>

        {/* Description Fields */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-wine-600 to-burgundy-600 rounded-full"></span>
            Description (Multilingual)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                English <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.description.en}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: { ...prev.description, en: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="Describe the equipment in English"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Korean <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.description.ko}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: { ...prev.description, ko: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="한국어로 장비 설명"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Chinese <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.description.zh}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: { ...prev.description, zh: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="用中文描述设备"
              />
            </div>
          </div>
        </div>

        {/* Specifications Fields */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-wine-600 to-burgundy-600 rounded-full"></span>
            Specifications (Multilingual)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                English <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.specifications.en}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specifications: { ...prev.specifications, en: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="Technical specifications in English"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Korean <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.specifications.ko}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specifications: { ...prev.specifications, ko: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="한국어 기술 사양"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Chinese <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.specifications.zh}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specifications: { ...prev.specifications, zh: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wine-500 focus:border-transparent transition-all bg-white/50 resize-none"
                placeholder="中文技术规格"
              />
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-wine-600 to-burgundy-600 rounded-full"></span>
            Images
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-wine-400 transition-colors">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-wine-600 file:to-burgundy-600 file:text-white hover:file:from-wine-700 hover:file:to-burgundy-700 file:cursor-pointer cursor-pointer"
            />
            <p className="mt-2 text-xs text-gray-500 text-center">Upload multiple images (JPG, PNG, etc.)</p>
          </div>
          {formData.images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative group/image">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm hover:bg-red-600 hover:scale-110 transition-all shadow-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-gradient-to-r from-wine-600 to-burgundy-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Equipment
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
