import { getTranslations } from 'next-intl/server';

export default async function CompanyPage() {
  const t = await getTranslations('company');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wine-950 to-burgundy-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-jakarta font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-wine-200 max-w-3xl">
            {t('aboutText')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-jakarta font-bold text-wine-900 mb-4">
                {t('about')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('aboutText')}
              </p>
            </div>
            <div className="bg-wine-50 p-8 rounded-lg">
              <h2 className="text-3xl font-jakarta font-bold text-wine-900 mb-4">
                {t('mission')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('missionText')}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-jakarta font-bold text-wine-900 mb-4">
              {t('vision')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('visionText')}
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-jakarta font-bold text-wine-900 mb-8 text-center">
              {t('values')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-jakarta font-semibold text-wine-900 mb-2">
                  {t('quality')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('qualityText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-jakarta font-semibold text-wine-900 mb-2">
                  {t('innovation')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('innovationText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-jakarta font-semibold text-wine-900 mb-2">
                  {t('integrity')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('integrityText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-jakarta font-semibold text-wine-900 mb-2">
                  {t('customer')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('customerText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
