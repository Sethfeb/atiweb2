import { getTranslations } from 'next-intl/server';

export default async function TechnologyPage() {
  const t = await getTranslations('technology');

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

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-jakarta font-bold text-wine-900 mb-12 text-center">
            {t('capabilities')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-jakarta font-semibold text-wine-900 mb-4">
                {t('precision')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('precisionText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-jakarta font-semibold text-wine-900 mb-4">
                {t('quality')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('qualityText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-jakarta font-semibold text-wine-900 mb-4">
                {t('custom')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('customText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wine-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-jakarta font-semibold text-wine-900 mb-4">
                {t('scale')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('scaleText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
