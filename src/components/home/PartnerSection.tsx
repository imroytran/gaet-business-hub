
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SmoothImage from '../ui/SmoothImage';

const partners = [
  {
    id: 1,
    name: "Thales Group",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/thales-logo.png",
    country: "Pháp"
  },
  {
    id: 2,
    name: "Rheinmetall",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/rheinmetall-logo.png",
    country: "Đức"
  },
  {
    id: 3,
    name: "Lockheed Martin",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/lockheed-logo.png",
    country: "Hoa Kỳ"
  },
  {
    id: 4,
    name: "Mitsubishi Heavy Industries",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/mitsubishi-logo.png",
    country: "Nhật Bản"
  },
  {
    id: 5,
    name: "Rostec",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/rostec-logo.png",
    country: "Nga"
  },
  {
    id: 6,
    name: "CETC",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/cetc-logo.png",
    country: "Trung Quốc"
  },
  {
    id: 7,
    name: "NORINCO",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/norinco-logo.png",
    country: "Trung Quốc"
  },
  {
    id: 8,
    name: "Hanwha Defense",
    logo: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/hanwha-logo.png",
    country: "Hàn Quốc"
  }
];

const PartnerSection: React.FC = () => {
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
          <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
            Đối tác chiến lược
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 header-underline">
            Đối tác toàn cầu
          </h2>
          <p className="text-gray-600">
            GAET tự hào hợp tác với các đối tác hàng đầu thế giới, mở rộng cơ hội kinh doanh 
            và nâng cao năng lực sản xuất, chuyển giao công nghệ.
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
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <SmoothImage
                    id={`partner-${partner.id}`}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full max-w-[150px]"
                    imgClassName="object-contain h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.country}</p>
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
            Xem tất cả đối tác
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
