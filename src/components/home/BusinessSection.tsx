import React from 'react';
import SmoothImage from '../ui/SmoothImage';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BusinessSection: React.FC = () => {
  const { t } = useLanguage();
  
  const businessAreas = [
    {
      id: 1,
      title: t('business.importExport'),
      description: t('business.importExport.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export.jpg",
      url: "/import-export"
    },
    {
      id: 2,
      title: t('business.explosives'),
      description: t('business.explosives.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives.jpg",
      url: "/explosives"
    },
    {
      id: 3,
      title: t('business.training'),
      description: t('business.training.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training.jpg",
      url: "/vocational-training"
    },
    {
      id: 4,
      title: t('business.defense'),
      description: t('business.defense.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense.jpg",
      url: "/defense-production"
    },
    {
      id: 5,
      title: t('business.transportation'),
      description: t('business.transportation.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
      url: "/transportation"
    },
    {
      id: 6,
      title: t('business.industrial'),
      description: t('business.industrial.desc'),
      image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
      url: "/industrial-production"
    }
  ];

  return (
    <section id="business" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
            {t('business.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            {/* Title text removed as requested */}
          </h2>
          <p className="text-gray-600">
            {t('business.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => (
            <div 
              key={area.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group opacity-0 animate-scale-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-52 overflow-hidden">
                <SmoothImage
                  id={`business-${area.id}`}
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                <a 
                  href={area.url}
                  className="inline-flex items-center text-gaet-600 font-medium text-sm group-hover:text-gaet-700"
                >
                  {t('business.learnMore')}
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
