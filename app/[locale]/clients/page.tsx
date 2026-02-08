import { getTranslations } from 'next-intl/server';

export default async function ClientsPage() {
  const t = await getTranslations('clients');

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

      {/* Clients Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-8">
              {t('partnershipText')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {/* Placeholder client logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32"
                >
                  <span className="text-gray-400 text-sm">{t('clientLabel')} {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
