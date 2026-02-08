'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: `/${locale}`, exact: true },
    { key: 'company', href: `/${locale}/company`, exact: false },
    { key: 'equipment', href: `/${locale}/equipment`, exact: false },
    { key: 'technology', href: `/${locale}/technology`, exact: false },
    { key: 'clients', href: `/${locale}/clients`, exact: false },
    { key: 'contact', href: `/${locale}/contact`, exact: false },
  ];

  const isActive = (href: string, exact: boolean = false) => {
    if (!pathname) return false;
    
    if (exact) {
      // Home 메뉴는 정확히 일치하는 경우에만 활성화
      return pathname === href || pathname === `${href}/`;
    } else {
      // 다른 메뉴들은 정확히 일치하거나 해당 경로로 시작하는 경우 활성화
      return pathname === href || pathname.startsWith(`${href}/`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass border-b border-white/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center group">
              <span className="text-3xl font-jakarta font-bold gradient-text group-hover:scale-105 transition-transform">
                ATI2000
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      active
                        ? 'text-white bg-gradient-to-r from-wine-600 to-burgundy-600 shadow-lg shadow-wine-500/50'
                        : 'text-gray-700 hover:text-wine-700 hover:bg-white/50'
                    }`}
                  >
                    {t(item.key)}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                    )}
                  </Link>
                );
              })}
              <div className="ml-4">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:bg-white/50 hover:text-wine-700 transition-all"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
              {navItems.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? 'text-white bg-gradient-to-r from-wine-600 to-burgundy-600'
                        : 'text-gray-700 hover:text-wine-700 hover:bg-white/50'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
