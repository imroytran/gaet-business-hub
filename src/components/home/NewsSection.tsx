
import React from 'react';
import SmoothImage from '../ui/SmoothImage';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "GAET ký kết hợp tác chiến lược với đối tác Châu Âu",
    date: "15/06/2023",
    category: "Hợp tác quốc tế",
    excerpt: "Tổng công ty GAET vừa ký kết thỏa thuận hợp tác chiến lược với tập đoàn hàng đầu châu Âu, mở ra cơ hội phát triển mới trong lĩnh vực công nghiệp quốc phòng.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/news1.jpg",
    url: "/news/1"
  },
  {
    id: 2,
    title: "Khai trương nhà máy sản xuất vật liệu nổ công nghiệp mới",
    date: "28/04/2023",
    category: "Sự kiện",
    excerpt: "Nhà máy sản xuất vật liệu nổ công nghiệp mới của GAET chính thức đi vào hoạt động, nâng cao năng lực sản xuất và đáp ứng nhu cầu ngày càng tăng của thị trường.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/news2.jpg",
    url: "/news/2"
  },
  {
    id: 3,
    title: "GAET được vinh danh trong Top 10 doanh nghiệp xuất khẩu uy tín",
    date: "10/03/2023",
    category: "Giải thưởng",
    excerpt: "Tổng công ty GAET vinh dự được vinh danh trong Top 10 doanh nghiệp xuất khẩu uy tín năm 2022, ghi nhận những đóng góp tích cực cho nền kinh tế đất nước.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/news3.jpg",
    url: "/news/3"
  },
  {
    id: 4,
    title: "Phát động chương trình đào tạo nguồn nhân lực chất lượng cao",
    date: "22/02/2023",
    category: "Đào tạo",
    excerpt: "GAET phát động chương trình đào tạo nguồn nhân lực chất lượng cao, hợp tác với các trường đại học và viện nghiên cứu nhằm đáp ứng nhu cầu phát triển.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/news4.jpg",
    url: "/news/4"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
              Tin tức & Sự kiện
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 header-underline">
              Tin tức mới nhất
            </h2>
          </div>
          <a 
            href="/news" 
            className="hidden md:flex items-center text-gaet-600 font-medium hover:text-gaet-800 transition-colors"
          >
            Xem tất cả tin tức
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <SmoothImage
                  id={`news-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full" 
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-gaet-50 text-gaet-700 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900 line-clamp-2">
                  <a href={item.url} className="hover:text-gaet-600 transition-colors">
                    {item.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                
                <a 
                  href={item.url} 
                  className="inline-flex items-center text-gaet-600 font-medium text-sm hover:text-gaet-800 transition-colors"
                >
                  Đọc tiếp
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="/news" 
            className="btn-secondary inline-flex items-center"
          >
            Xem tất cả tin tức
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
