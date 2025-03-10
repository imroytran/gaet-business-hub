
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { getTranslation } from '@/utils/translation';

interface NavItem {
  labelKey: string;
  href: string;
  children?: NavItem[];
}

const Navbar = () => {
  const { theme, language, toggleTheme, setLanguage } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Dynamic navigation with translations
  const navigation: NavItem[] = [
    { labelKey: language === 'vi' ? 'Trang chủ' : 'Home', href: '/' },
    { 
      labelKey: language === 'vi' ? 'Giới thiệu' : 'About',
      href: '#about',
      children: [
        { labelKey: language === 'vi' ? 'Lịch sử phát triển' : 'History', href: '/history' },
        { labelKey: language === 'vi' ? 'Tầm nhìn & Sứ mệnh' : 'Vision & Mission', href: '/vision' },
        { labelKey: language === 'vi' ? 'Cơ cấu tổ chức' : 'Organization', href: '/organization' },
        { labelKey: language === 'vi' ? 'Ban lãnh đạo' : 'Leadership', href: '/leadership' },
      ]
    },
    { 
      labelKey: language === 'vi' ? 'Lĩnh vực kinh doanh' : 'Business Areas',
      href: '#business',
      children: [
        { labelKey: language === 'vi' ? 'Xuất nhập khẩu' : 'Import-Export', href: '/import-export' },
        { labelKey: language === 'vi' ? 'Vật tư & Thiết bị công nghệ' : 'Materials & Equipment', href: '/equipment' },
        { labelKey: language === 'vi' ? 'Vật liệu nổ công nghiệp' : 'Industrial Explosives', href: '/explosives' },
        { labelKey: language === 'vi' ? 'Đào tạo nghề & XNK Lao động' : 'Vocational Training', href: '/vocational-training' },
        { labelKey: language === 'vi' ? 'Sản xuất quốc phòng' : 'Defense Production', href: '/defense-production' },
      ]
    },
    { labelKey: language === 'vi' ? 'Tin tức' : 'News', href: '#news' },
    { labelKey: language === 'vi' ? 'Công ty thành viên' : 'Subsidiaries', href: '#subsidiaries' },
    { labelKey: language === 'vi' ? 'Liên hệ' : 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
        scrolled
          ? 'bg-gaet-700/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex-1 flex items-center justify-start lg:justify-start"
          aria-label="GAET Logo"
        >
          <div className={cn(
            'transition-all duration-300 h-auto',
            scrolled ? 'w-28' : 'w-36',
          )}>
            <img 
              src="/lovable-uploads/4af2f910-49ca-44a1-b3df-de08baa09c0d.png" 
              alt="GAET Logo" 
              className="w-full h-auto"
            />
          </div>
        </Link>

        {/* Desktop navigation - Center aligned */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          {navigation.map((item) => (
            <div key={item.labelKey} className="relative group px-4">
              <a
                href={item.href}
                className={cn(
                  'font-medium text-sm transition-colors duration-200 hover:text-gaet-300 dark:hover:text-gaet-400 flex items-center gap-1',
                  'text-white dark:text-gray-200'
                )}
              >
                {item.labelKey}
                {item.children && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </a>

              {item.children && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                  <div className="py-1 grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.labelKey}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gaet-50 dark:hover:bg-gray-700 rounded-md hover:text-gaet-600 dark:hover:text-gaet-400 transition-colors"
                      >
                        {child.labelKey}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Theme and Language controls */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label={language === "en" ? "Switch to Vietnamese" : "Switch to English"}
          >
            <Globe size={20} />
            <span className="sr-only ml-2 text-sm">{language.toUpperCase()}</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white hover:text-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gaet-700 dark:bg-gray-900 shadow-lg min-h-screen animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.labelKey}>
                {item.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-gaet-600 dark:hover:bg-gray-800 hover:text-white rounded-md"
                      onClick={() => toggleSubmenu(item.labelKey)}
                    >
                      {item.labelKey}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          openSubmenu === item.labelKey ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {openSubmenu === item.labelKey && (
                      <div className="pl-4 space-y-1 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.labelKey}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-white/80 dark:text-gray-300 hover:bg-gaet-600 dark:hover:bg-gray-700 hover:text-white rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.labelKey}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-white hover:bg-gaet-600 dark:hover:bg-gray-700 hover:text-white rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.labelKey}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
