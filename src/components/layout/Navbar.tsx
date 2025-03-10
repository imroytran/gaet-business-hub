
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { 
    label: 'Giới thiệu', 
    href: '#about',
    children: [
      { label: 'Lịch sử phát triển', href: '/history' },
      { label: 'Tầm nhìn & Sứ mệnh', href: '/vision' },
      { label: 'Cơ cấu tổ chức', href: '/organization' },
      { label: 'Ban lãnh đạo', href: '/leadership' },
    ]
  },
  { 
    label: 'Lĩnh vực kinh doanh', 
    href: '#business',
    children: [
      { label: 'Xuất nhập khẩu', href: '/import-export' },
      { label: 'Vật tư & Thiết bị công nghệ', href: '/equipment' },
      { label: 'Vật liệu nổ công nghiệp', href: '/explosives' },
      { label: 'Đào tạo nghề & XNK Lao động', href: '/vocational-training' },
      { label: 'Sản xuất quốc phòng', href: '/defense-production' },
    ]
  },
  { label: 'Tin tức', href: '#news' },
  { label: 'Công ty thành viên', href: '#subsidiaries' },
  { label: 'Liên hệ', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="GAET Logo"
        >
          <h1 className={cn(
            'font-bold transition-all duration-300',
            scrolled ? 'text-gaet-700 text-2xl' : 'text-white text-3xl',
          )}>
            GAET
          </h1>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={cn(
                  'font-medium text-sm transition-colors duration-200 hover:text-gaet-500 flex items-center gap-1',
                  scrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </a>

              {item.children && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                  <div className="py-1 grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gaet-50 rounded-md hover:text-gaet-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} className={scrolled ? 'text-gray-700' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-700' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg min-h-screen animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gaet-50 hover:text-gaet-600 rounded-md"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          openSubmenu === item.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pl-4 space-y-1 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-500 hover:bg-gaet-50 hover:text-gaet-600 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gaet-50 hover:text-gaet-600 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
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
