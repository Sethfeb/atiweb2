import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen overflow-hidden -mt-20">
      {/* Hero Section - Modern with animated gradient */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-wine-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-burgundy-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-wine-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 glass rounded-full text-white/90 backdrop-blur-sm">
              <span className="text-sm font-medium">{t('subtitle')}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-jakarta font-bold mb-6 text-white drop-shadow-2xl">
              <span className="block">{t('title')}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light">
              {t('subtitle')}
            </p>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/${locale}/company`}
                className="group relative px-8 py-4 bg-white text-wine-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-wine-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-wine-50 to-burgundy-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 glass rounded-2xl font-semibold text-lg text-white border-2 border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section - Modern cards with glassmorphism */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-jakarta font-bold mb-4 gradient-text">
              {t('whyChooseUs')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-wine-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-wine-500 to-burgundy-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-3 gradient-text">{t('quality')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('qualityText')}</p>
              </div>
            </div>
            
            <div className="group relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-burgundy-500 to-wine-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-3 gradient-text">{t('innovation')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('innovationText')}</p>
              </div>
            </div>
            
            <div className="group relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-wine-500/10 to-burgundy-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-wine-600 via-burgundy-500 to-wine-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-3 gradient-text">{t('partnership')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('partnershipText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
