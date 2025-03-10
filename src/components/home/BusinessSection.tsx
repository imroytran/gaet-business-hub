
import React from 'react';
import SmoothImage from '../ui/SmoothImage';
import { ArrowRight } from 'lucide-react';

const businessAreas = [
  {
    id: 1,
    title: "Xuất nhập khẩu",
    description: "Triển khai mua sắm, trang bị cho quân đội máy móc, vật tư trang thiết bị, lắp đặt các dây chuyền sản xuất công nghiệp hiện đại, đảm bảo các yêu cầu kỹ thuật.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export.jpg",
    url: "/import-export"
  },
  {
    id: 2,
    title: "Vật liệu nổ công nghiệp",
    description: "Đầu mối duy nhất của Bộ Quốc phòng được giao nhiệm vụ xuất nhập khẩu, cung ứng vật liệu nổ công nghiệp cho các ngành xây dựng, giao thông, khai khoáng...",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives.jpg",
    url: "/explosives"
  },
  {
    id: 3,
    title: "Đào tạo nghề & XNK Lao động",
    description: "Mở các khoá đào tạo nghề như: may công nghiệp, hàn, nguội cơ khí, mộc, cốp pha, sắt xây dựng... cung ứng hàng nghìn lao động được đào tạo sang thị trường các nước.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training.jpg",
    url: "/vocational-training"
  },
  {
    id: 4,
    title: "Sản xuất quốc phòng",
    description: "Liên doanh sản xuất nguyên liệu và sản phẩm phục vụ công nghiệp quốc phòng, đi đầu trong lĩnh vực chuyển giao công nghệ và xuất khẩu hàng công nghiệp quốc phòng.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense.jpg",
    url: "/defense-production"
  },
  {
    id: 5,
    title: "Vận tải",
    description: "Hoàn thành xuất sắc nhiệm vụ vận tải thuốc nổ công nghiệp, hàng hoá dân dụng và chuyên dụng với đoàn xe tải đa chủng loại trên khắp các nẻo đường.",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
    url: "/transportation"
  },
  {
    id: 6,
    title: "Sản xuất công nghiệp",
    description: "Hệ thống các xí nghiệp sản xuất các sản phẩm như: sản phẩm gỗ và composite, sản phẩm cơ khí, hòm hộp, bồn Inox, bao bì catton, giấy grap...",
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
    url: "/industrial-production"
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
            Trong quá trình hoạt động kinh doanh, GAET đã thu được nhiều thành công nhờ sự nhạy bén, linh hoạt trong cơ chế thị trường.
            Với các đơn vị xuyên suốt từ Bắc đến Nam tạo sức mạnh tổng hợp khẳng định thương hiệu GAET trong suốt quá trình xây dựng, bảo vệ Tổ quốc và hội nhập kinh tế quốc tế.
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
