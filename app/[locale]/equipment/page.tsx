import { getTranslations } from 'next-intl/server';
import EquipmentList from '@/components/EquipmentList';

export default async function EquipmentPage() {
  const t = await getTranslations('equipment');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wine-950 to-burgundy-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-jakarta font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-wine-200 mb-2">
            {t('subtitle')}
          </p>
          <p className="text-lg text-wine-100 max-w-3xl">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentList />
        </div>
      </section>
    </div>
  );
}
