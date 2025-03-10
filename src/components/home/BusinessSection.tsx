
import React from 'react';
import SmoothImage from '../ui/SmoothImage';
import { ArrowRight } from 'lucide-react';

const businessAreas = [
  {
    id: 1,
    title: "Xuất nhập khẩu",
    description: "Hoạt động xuất nhập khẩu đa dạng sản phẩm sang nhiều thị trường quốc tế.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export.jpg",
    url: "/import-export"
  },
  {
    id: 2,
    title: "Vật tư & Thiết bị công nghệ",
    description: "Cung cấp vật tư, thiết bị và dây chuyền công nghệ phục vụ sản xuất quốc phòng và kinh tế.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
    url: "/equipment"
  },
  {
    id: 3,
    title: "Vật liệu nổ công nghiệp",
    description: "Sản xuất, xuất nhập khẩu, kinh doanh vật liệu nổ công nghiệp và dịch vụ nổ mìn chuyên nghiệp.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives.jpg",
    url: "/explosives"
  },
  {
    id: 4,
    title: "Đào tạo nghề & XNK Lao động",
    description: "Đào tạo nguồn nhân lực chất lượng cao và cung cấp dịch vụ xuất khẩu lao động uy tín.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training.jpg",
    url: "/vocational-training"
  },
  {
    id: 5,
    title: "Sản xuất quốc phòng",
    description: "Liên doanh sản xuất nguyên liệu và sản phẩm phục vụ công nghiệp quốc phòng.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense.jpg",
    url: "/defense-production"
  }
];

const BusinessSection: React.FC = () => {
  return (
    <section id="business" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
            Lĩnh vực hoạt động
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Chúng tôi cung cấp các dịch vụ đa dạng
          </h2>
          <p className="text-gray-600">
            GAET hoạt động đa ngành, đa lĩnh vực với hệ thống các công ty thành viên chuyên biệt, 
            đáp ứng đầy đủ nhu cầu của khách hàng với những giải pháp toàn diện và chuyên nghiệp.
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
                  Tìm hiểu thêm
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
