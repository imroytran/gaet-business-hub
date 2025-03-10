
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">GAET</h3>
            <p className="text-gray-400 mb-6">
              Tổng công ty Kinh tế Kỹ thuật Công nghiệp quốc phòng (GAET) là đơn vị Quốc phòng-An ninh trực thuộc Tổng cục Công nghiệp Quốc phòng, doanh nghiệp hàng đầu trong lĩnh vực xuất nhập khẩu và sản xuất quốc phòng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#business" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Lĩnh vực kinh doanh
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Tin tức & Sự kiện
                </a>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Cơ hội nghề nghiệp
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Lĩnh vực kinh doanh</h4>
            <ul className="space-y-3">
              <li>
                <a href="/import-export" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Xuất nhập khẩu
                </a>
              </li>
              <li>
                <a href="/explosives" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Vật liệu nổ công nghiệp
                </a>
              </li>
              <li>
                <a href="/vocational-training" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Đào tạo nghề & XNK Lao động
                </a>
              </li>
              <li>
                <a href="/defense-production" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Sản xuất quốc phòng
                </a>
              </li>
              <li>
                <a href="/transportation" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Vận tải
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  102 Kim Mã Thượng, Ba Đình, Hà Nội, Việt Nam
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <a href="mailto:contact@gaet.com.vn" className="hover:text-white transition-colors">
                    contact@gaet.com.vn
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <div className="space-y-1">
                    <a href="tel:+84243832537" className="hover:text-white transition-colors block">
                      +84 243 832 5377
                    </a>
                    <a href="tel:+84243832771" className="hover:text-white transition-colors block">
                      +84 243 832 7710
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <a href="https://gaet.com.vn" className="hover:text-white transition-colors">
                    gaet.com.vn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} GAET. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Chính sách bảo mật
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sơ đồ trang
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
