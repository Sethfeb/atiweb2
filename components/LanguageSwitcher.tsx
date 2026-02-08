'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

const localeNames: Record<Locale, string> = {
  en: 'EN',
  ko: 'KO',
  zh: 'ZH',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1 glass rounded-xl p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
            locale === loc
              ? 'bg-gradient-to-r from-wine-600 to-burgundy-600 text-white shadow-lg shadow-wine-500/50 scale-105'
              : 'text-gray-700 hover:text-wine-700 hover:bg-white/50'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
