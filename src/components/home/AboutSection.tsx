
import React from 'react';
import { Globe, Briefcase, Building, Factory } from 'lucide-react';
import SmoothImage from '../ui/SmoothImage';

const features = [
  {
    id: 1,
    icon: <Globe className="h-6 w-6 text-gaet-600" />,
    title: "Tầm nhìn toàn cầu",
    description: "Mở rộng thị trường quốc tế thông qua mạng lưới đối tác chiến lược trên khắp thế giới."
  },
  {
    id: 2,
    icon: <Briefcase className="h-6 w-6 text-gaet-600" />,
    title: "Đội ngũ chuyên nghiệp",
    description: "Đội ngũ nhân sự với kinh nghiệm chuyên môn cao và kiến thức sâu rộng về các lĩnh vực kinh doanh."
  },
  {
    id: 3,
    icon: <Building className="h-6 w-6 text-gaet-600" />,
    title: "Đa dạng lĩnh vực",
    description: "Hoạt động trong nhiều lĩnh vực từ xuất nhập khẩu, công nghiệp quốc phòng đến đào tạo và phát triển nguồn nhân lực."
  },
  {
    id: 4,
    icon: <Factory className="h-6 w-6 text-gaet-600" />,
    title: "Công nghệ tiên tiến",
    description: "Áp dụng công nghệ hiện đại và quy trình tiên tiến vào hoạt động sản xuất, kinh doanh."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <div className="mb-6">
                <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
                  Về chúng tôi
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 header-underline">
                  Tổng Công Ty GAET
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Với hơn 30 năm kinh nghiệm, Tổng Công ty GAET đã trở thành một trong những doanh nghiệp hàng đầu tại Việt Nam trong lĩnh vực xuất nhập khẩu, cung cấp vật tư thiết bị công nghệ, vật liệu nổ công nghiệp, đào tạo nghề và phát triển sản xuất công nghiệp quốc phòng.
              </p>
              
              <p className="text-gray-600 mb-8">
                Chúng tôi không ngừng nỗ lực để phát triển bền vững, mở rộng thị trường và nâng cao chất lượng sản phẩm, dịch vụ, đồng thời đóng góp vào sự phát triển kinh tế - xã hội của đất nước.
              </p>
              
              <a href="/about" className="btn-primary inline-flex items-center">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className="glass-card p-6 opacity-0 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gaet-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gaet-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gaet-200 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <div className="text-4xl font-bold text-gaet-700 mb-2">30+</div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <div className="text-4xl font-bold text-gaet-700 mb-2">15+</div>
              <p className="text-gray-600">Công ty thành viên</p>
            </div>
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <div className="text-4xl font-bold text-gaet-700 mb-2">50+</div>
              <p className="text-gray-600">Quốc gia đối tác</p>
            </div>
            <div className="opacity-0 animate-fade-in animate-delay-400">
              <div className="text-4xl font-bold text-gaet-700 mb-2">5000+</div>
              <p className="text-gray-600">Nhân sự</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
