'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { Equipment } from '@/lib/equipment';

export default function EquipmentList() {
  const t = useTranslations('equipment');
  const locale = useLocale();
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/equipment')
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading equipment...</p>
      </div>
    );
  }

  if (equipment.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No equipment available at this time.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {equipment.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          {item.images && item.images.length > 0 ? (
            <div className="aspect-video bg-gray-200">
              <img
                src={item.images[0]}
                alt={item.title[locale as keyof typeof item.title] || item.title.en}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-wine-100 to-burgundy-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-wine-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-jakarta font-semibold text-wine-900 mb-3">
              {item.title[locale as keyof typeof item.title] || item.title.en}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {item.description[locale as keyof typeof item.description] || item.description.en}
            </p>
            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-wine-700 mb-2">
                {t('specifications')}:
              </p>
              <p className="text-sm text-gray-600">
                {item.specifications[locale as keyof typeof item.specifications] || item.specifications.en}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
