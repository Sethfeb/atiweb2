'use client';

import { Equipment } from '@/lib/equipment';

interface EquipmentItemProps {
  equipment: Equipment;
  onEdit: (equipment: Equipment) => void;
  onDelete: (id: string) => void;
}

export default function EquipmentItem({ equipment, onEdit, onDelete }: EquipmentItemProps) {
  return (
    <div className="group glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/30 hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image Section */}
        {equipment.images && equipment.images.length > 0 ? (
          <div className="flex-shrink-0">
            <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-wine-100 to-burgundy-100">
              <img
                src={equipment.images[0]}
                alt={equipment.title.en}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ) : (
          <div className="flex-shrink-0 w-full sm:w-32 h-32 rounded-xl bg-gradient-to-br from-wine-100 to-burgundy-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-wine-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        
        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-jakarta font-bold gradient-text line-clamp-2">
              {equipment.title.en}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => onEdit(equipment)}
                className="p-2 bg-gradient-to-r from-wine-600 to-burgundy-600 text-white rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-200"
                title="Edit"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(equipment.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:shadow-lg hover:scale-110 transition-all duration-200"
                title="Delete"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {equipment.description.en}
          </p>
          
          <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <svg className="w-5 h-5 text-wine-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 mb-1">Specifications</p>
              <p className="text-sm text-gray-700 line-clamp-2">{equipment.specifications.en}</p>
            </div>
          </div>
          
          {equipment.images && equipment.images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {equipment.images.slice(1, 4).map((image, index) => (
                <div key={index} className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={image}
                    alt={`${equipment.title.en} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {equipment.images.length > 4 && (
                <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-semibold">
                  +{equipment.images.length - 4}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
