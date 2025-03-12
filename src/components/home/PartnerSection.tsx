
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SmoothImage from '../ui/SmoothImage';
import { useLanguage } from '@/contexts/LanguageContext';

const partners = [
  {
    id: 1,
    name: "Bộ Tư lệnh Lục quân",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Vietnam_People%27s_Army_Ground_Force_emblem.svg/1200px-Vietnam_People%27s_Army_Ground_Force_emblem.svg.png",
    description: "Lục quân"
  },
  {
    id: 2,
    name: "Bộ Tư lệnh Hải quân",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Vietnam_People%27s_Navy_emblem.svg/1200px-Vietnam_People%27s_Navy_emblem.svg.png",
    description: "Hải quân"
  },
  {
    id: 3,
    name: "Bộ Tư lệnh Phòng không - Không quân",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Vietnam_People%27s_Air_Force_emblem.svg/1200px-Vietnam_People%27s_Air_Force_emblem.svg.png",
    description: "Không quân"
  },
  {
    id: 4,
    name: "Bộ Tổng tham mưu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/General_Staff_of_the_Vietnam_People%27s_Army.svg/1200px-General_Staff_of_the_Vietnam_People%27s_Army.svg.png",
    description: "Bộ Tổng tham mưu"
  },
  {
    id: 5,
    name: "Tổng cục Chính trị",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/General_Political_Department_of_the_People%27s_Army_of_Vietnam.svg/1200px-General_Political_Department_of_the_People%27s_Army_of_Vietnam.svg.png",
    description: "Tổng cục Chính trị"
  },
  {
    id: 6,
    name: "Bộ Tư lệnh Bộ đội Biên phòng",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vietnam_Border_Guard_Command_emblem.svg/1200px-Vietnam_Border_Guard_Command_emblem.svg.png",
    description: "Bộ đội Biên phòng"
  },
  {
    id: 7,
    name: "Bộ Tư lệnh Cảnh sát biển",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Vietnam_Coast_Guard_Command_emblem.svg/1200px-Vietnam_Coast_Guard_Command_emblem.svg.png",
    description: "Cảnh sát biển"
  },
  {
    id: 8,
    name: "Binh chủng Đặc công",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/General_Staff_of_the_Vietnam_People%27s_Army.svg/1200px-General_Staff_of_the_Vietnam_People%27s_Army.svg.png",
    description: "Đặc công"
  }
];

const PartnerSection: React.FC = () => {
  const { language } = useLanguage();
  
  const scrollLeft = () => {
    const container = document.getElementById('partners-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('partners-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gaet-700">
            {language === 'vi' ? 'Đối tác chiến lược' : 'Strategic Partners'}
          </h2>
          <p className="text-gray-600">
            {language === 'vi' 
              ? 'GAET tự hào hợp tác với các đơn vị, binh chủng trong Quân đội Nhân dân Việt Nam, mở rộng cơ hội và nâng cao năng lực sản xuất quốc phòng.' 
              : 'GAET is proud to cooperate with units and branches in the Vietnam People\'s Army, expanding opportunities and enhancing defense production capabilities.'}
          </p>
        </div>

        <div className="relative mt-12">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gaet-50 transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div 
            id="partners-container"
            className="flex overflow-x-auto gap-8 pb-8 px-4 scrollbar-hide scroll-smooth"
          >
            {partners.map((partner, index) => (
              <div 
                key={partner.id}
                className="flex-shrink-0 glass-card p-6 rounded-xl w-64 flex flex-col items-center justify-center text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-24 w-full flex items-center justify-center mb-4">
                  <SmoothImage
                    id={`partner-${partner.id}`}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full max-w-[150px]"
                    imgClassName="object-contain h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gaet-50 transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="text-center mt-10">
          <a href="/partners" className="btn-secondary inline-flex items-center">
            {language === 'vi' ? 'Xem tất cả đối tác' : 'View all partners'}
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
