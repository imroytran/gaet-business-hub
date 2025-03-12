import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SmoothImage from '../components/ui/SmoothImage';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const additionalImages = {
  'import-export': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export-3.jpg",
  ],
  'explosives': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives-3.jpg",
  ],
  'vocational-training': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training-3.jpg",
  ],
  'defense-production': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense-3.jpg",
  ],
  'transportation': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/transportation-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/transportation-3.jpg",
  ],
  'industrial-production': [
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/industrial-2.jpg",
    "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/industrial-3.jpg",
  ],
};

const businessAreas = {
  'import-export': {
    id: 1,
    titleKey: 'business.importExport',
    descriptionKey: 'business.importExport.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/import-export.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET là đơn vị đầu mối trong việc xuất nhập khẩu các trang thiết bị, vật tư kỹ thuật phục vụ quốc phòng và kinh tế. Với nhiều năm kinh nghiệm trong lĩnh vực này, chúng tôi đã triển khai thành công việc mua sắm, trang bị cho quân đội các loại máy móc, vật tư, thiết bị, và dây chuyền công nghệ sản xuất hiện đại.',
        en: 'GAET is the focal point for the import and export of equipment and technical supplies for defense and economic purposes. With many years of experience in this field, we have successfully deployed the procurement and equipping of the military with various types of machinery, materials, equipment, and modern production technology lines.'
      },
      activities: {
        vi: [
          'Nhập khẩu thiết bị, máy móc phục vụ sản xuất quốc phòng',
          'Xuất khẩu sản phẩm công nghiệp quốc phòng',
          'Tìm kiếm và phát triển thị trường quốc tế',
          'Hợp tác với các đối tác nước ngoài trong chuyển giao công nghệ',
          'Tham gia các triển lãm quốc tế về quốc phòng và an ninh'
        ],
        en: [
          'Import of equipment and machinery for defense production',
          'Export of defense industry products',
          'International market research and development',
          'Cooperation with foreign partners in technology transfer',
          'Participation in international defense and security exhibitions'
        ]
      }
    }
  },
  'explosives': {
    id: 2,
    titleKey: 'business.explosives',
    descriptionKey: 'business.explosives.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/explosives.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET là đầu mối duy nhất của Bộ Quốc phòng được giao nhiệm vụ xuất nhập khẩu, cung ứng vật liệu nổ công nghiệp cho các ngành xây dựng, giao thông, khai khoáng và các hoạt động dân sự khác. Chúng tôi đảm bảo việc cung cấp, vận chuyển và sử dụng vật liệu nổ công nghiệp tuân thủ nghiêm ngặt các quy định về an toàn.',
        en: 'GAET is the sole focal point of the Ministry of Defense assigned the task of importing, exporting, and supplying industrial explosives for construction, transportation, mining, and other civilian activities. We ensure that the supply, transportation, and use of industrial explosives strictly comply with safety regulations.'
      },
      activities: {
        vi: [
          'Cung cấp vật liệu nổ công nghiệp cho các dự án lớn',
          'Dịch vụ nổ mìn chuyên nghiệp',
          'Tư vấn kỹ thuật về sử dụng vật liệu nổ an toàn',
          'Đào tạo nhân viên sử dụng vật liệu nổ công nghiệp',
          'Nghiên cứu và phát triển công nghệ nổ tiên tiến'
        ],
        en: [
          'Supply of industrial explosives for major projects',
          'Professional blasting services',
          'Technical consulting on safe use of explosives',
          'Training of staff in the use of industrial explosives',
          'Research and development of advanced blasting technologies'
        ]
      }
    }
  },
  'vocational-training': {
    id: 3,
    titleKey: 'business.training',
    descriptionKey: 'business.training.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/training.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET thực hiện nhiệm vụ đào tạo nghề và xuất khẩu lao động, góp phần tạo việc làm và nâng cao kỹ năng cho người lao động Việt Nam. Chúng tôi tổ chức các khóa đào tạo nghề chất lượng cao trong nhiều lĩnh vực khác nhau, đồng thời kết nối lao động Việt Nam với các cơ hội việc làm ở nước ngoài.',
        en: 'GAET performs vocational training and labor export, contributing to creating jobs and improving skills for Vietnamese workers. We organize high-quality vocational training courses in various fields, while connecting Vietnamese workers with job opportunities abroad.'
      },
      activities: {
        vi: [
          'Đào tạo các nghề may công nghiệp, hàn, cơ khí, mộc',
          'Đào tạo nghề cốp pha, sắt xây dựng và các nghề xây dựng khác',
          'Xuất khẩu lao động đến các thị trường Nhật Bản, Hàn Quốc, Đài Loan',
          'Hợp tác đào tạo với các đối tác quốc tế',
          'Tư vấn và hỗ trợ người lao động làm việc ở nước ngoài'
        ],
        en: [
          'Training in industrial sewing, welding, mechanics, and carpentry',
          'Training in formwork, construction iron, and other construction trades',
          'Labor export to markets in Japan, Korea, Taiwan',
          'Training cooperation with international partners',
          'Consulting and supporting workers abroad'
        ]
      }
    }
  },
  'defense-production': {
    id: 4,
    titleKey: 'business.defense',
    descriptionKey: 'business.defense.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/defense.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET đóng vai trò quan trọng trong việc liên doanh sản xuất nguyên liệu và sản phẩm phục vụ công nghiệp quốc phòng. Chúng tôi đi đầu trong lĩnh vực chuyển giao công nghệ và xuất khẩu hàng công nghiệp quốc phòng, góp phần nâng cao năng lực quốc phòng của đất nước.',
        en: 'GAET plays an important role in joint ventures producing materials and products for the defense industry. We are leading in the field of technology transfer and export of defense industry products, contributing to enhancing the country\'s defense capabilities.'
      },
      activities: {
        vi: [
          'Sản xuất các sản phẩm công nghiệp quốc phòng',
          'Chuyển giao công nghệ từ các đối tác quốc tế',
          'Nghiên cứu và phát triển các giải pháp quốc phòng mới',
          'Tham gia các dự án quốc phòng trọng điểm',
          'Hợp tác với các đơn vị quân đội trong sản xuất quốc phòng'
        ],
        en: [
          'Production of defense industry products',
          'Technology transfer from international partners',
          'Research and development of new defense solutions',
          'Participation in key defense projects',
          'Cooperation with military units in defense production'
        ]
      }
    }
  },
  'transportation': {
    id: 5,
    titleKey: 'business.transportation',
    descriptionKey: 'business.transportation.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET tự hào với đội ngũ vận tải chuyên nghiệp, có khả năng hoàn thành xuất sắc nhiệm vụ vận chuyển các loại hàng hóa đặc biệt như thuốc nổ công nghiệp, hàng hoá dân dụng và chuyên dụng. Đoàn xe tải đa chủng loại của chúng tôi hoạt động trên khắp các nẻo đường, đảm bảo giao hàng đúng thời hạn và an toàn.',
        en: 'GAET takes pride in its professional transportation team, capable of excellently completing the transportation of special types of goods such as industrial explosives, civilian and specialized goods. Our multi-type truck fleet operates on all roads, ensuring on-time and safe delivery.'
      },
      activities: {
        vi: [
          'Vận chuyển vật liệu nổ công nghiệp đến các công trường',
          'Vận chuyển hàng hóa dân dụng và chuyên dụng',
          'Dịch vụ logistics đa dạng',
          'Quản lý đội xe hiện đại với hệ thống giám sát',
          'Đào tạo lái xe chuyên nghiệp cho vận chuyển hàng nguy hiểm'
        ],
        en: [
          'Transportation of industrial explosives to construction sites',
          'Transportation of civilian and specialized goods',
          'Diverse logistics services',
          'Management of modern vehicle fleet with monitoring systems',
          'Professional driver training for dangerous goods transportation'
        ]
      }
    }
  },
  'industrial-production': {
    id: 6,
    titleKey: 'business.industrial',
    descriptionKey: 'business.industrial.desc',
    image: "https://cdn.gpteng.co/resources/6727bae6-fb8d-465c-a993-8dce41dced45/equipment.jpg",
    contentKeys: {
      overview: {
        vi: 'GAET sở hữu hệ thống các xí nghiệp sản xuất đa dạng các sản phẩm công nghiệp từ sản phẩm gỗ, composite, sản phẩm cơ khí, đến hòm hộp, bồn Inox, bao bì carton, giấy grap và nhiều mặt hàng khác. Các sản phẩm của chúng tôi đáp ứng các tiêu chuẩn chất lượng cao và phục vụ cả thị trường trong nước và xuất khẩu.',
        en: 'GAET owns a system of factories producing various industrial products from wood products, composites, mechanical products, to boxes, stainless steel tanks, carton packaging, grap paper, and many other items. Our products meet high quality standards and serve both domestic and export markets.'
      },
      activities: {
        vi: [
          'Sản xuất sản phẩm gỗ và composite chất lượng cao',
          'Gia công cơ khí chính xác',
          'Chế tạo các loại hòm hộp, bồn Inox đa dạng kích thước',
          'Sản xuất bao bì carton, giấy grap theo yêu cầu',
          'Nghiên cứu và phát triển sản phẩm mới'
        ],
        en: [
          'Production of high-quality wood and composite products',
          'Precision mechanical processing',
          'Manufacturing of various sizes of boxes and stainless steel tanks',
          'Production of carton packaging and grap paper according to requirements',
          'Research and development of new products'
        ]
      }
    }
  }
};

const getRelatedAreas = (currentId: string, count: number = 2) => {
  const allAreas = Object.entries(businessAreas);
  const filteredAreas = allAreas.filter(([id]) => id !== currentId);
  return filteredAreas
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map(([id, area]) => ({ id, ...area }));
};

const BusinessArea = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [relatedAreas, setRelatedAreas] = useState<any[]>([]);
  
  const area = businessAreas[areaId as keyof typeof businessAreas];
  
  useEffect(() => {
    if (!area) {
      navigate('/404');
      return;
    }
    
    window.scrollTo(0, 0);
    setRelatedAreas(getRelatedAreas(areaId as string));
    
    document.title = language === 'vi' 
      ? `${t(area.titleKey)} - GAET` 
      : `${t(area.titleKey)} - GAET Corporation`;
  }, [area, areaId, navigate, language, t]);
  
  if (!area) return null;

  const images = additionalImages[areaId as keyof typeof additionalImages] || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <SmoothImage
            id={`business-hero-${area.id}`}
            src={area.image}
            alt={t(area.titleKey)}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-end justify-center pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                  {t(area.titleKey)}
                </h1>
                <p className="text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {t(area.descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-6 flex items-center justify-between border-b">
          <Link 
            to="/"
            className="inline-flex items-center text-gaet-600 hover:text-gaet-700"
          >
            <ArrowLeft size={16} className="mr-2" />
            {language === 'vi' ? 'Quay lại trang chủ' : 'Back to home'}
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <a href="#overview" className="text-gray-600 hover:text-gaet-600">
              {language === 'vi' ? 'Tổng quan' : 'Overview'}
            </a>
            <a href="#activities" className="text-gray-600 hover:text-gaet-600">
              {language === 'vi' ? 'Hoạt động chính' : 'Main Activities'}
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-gaet-600">
              {language === 'vi' ? 'Hình ảnh' : 'Gallery'}
            </a>
            <a href="#related" className="text-gray-600 hover:text-gaet-600">
              {language === 'vi' ? 'Lĩnh vực liên quan' : 'Related Areas'}
            </a>
          </nav>
        </div>
        
        <section id="overview" className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                {language === 'vi' ? 'Tổng quan' : 'Overview'}
                <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gaet-500"></div>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {area.contentKeys.overview[language]}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <SmoothImage
                  id={`business-side-1-${area.id}`}
                  src={images[0] || area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-64 md:h-80"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <SmoothImage
                  id={`business-side-2-${area.id}`}
                  src={images[1] || area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-64 md:h-80"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="activities" className="bg-gradient-to-br from-gaet-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                <span className="relative inline-block">
                  {language === 'vi' ? 'Hoạt động chính' : 'Main Activities'}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {area.contentKeys.activities[language].map((activity, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="text-gaet-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {language === 'vi' ? `Hoạt động ${index + 1}` : `Activity ${index + 1}`}
                      </h3>
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gaet-700 text-white p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'vi' ? 'Cam kết của chúng tôi' : 'Our Commitment'}
                </h3>
                <p className="leading-relaxed">
                  {language === 'vi' 
                    ? 'Với nhiều năm kinh nghiệm trong lĩnh vực này, GAET cam kết mang đến những giải pháp tối ưu, đáp ứng mọi yêu cầu của khách hàng. Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu.'
                    : 'With many years of experience in this field, GAET is committed to providing optimal solutions to meet all customer requirements. We always put quality and customer satisfaction first.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="gallery" className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              <span className="relative inline-block">
                {language === 'vi' ? 'Hình ảnh hoạt động' : 'Activity Gallery'}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 aspect-video rounded-xl overflow-hidden shadow-md">
                <SmoothImage
                  id={`business-gallery-1-${area.id}`}
                  src={area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                <SmoothImage
                  id={`business-gallery-2-${area.id}`}
                  src={images[0] || area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                <SmoothImage
                  id={`business-gallery-3-${area.id}`}
                  src={images[1] || area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 aspect-video rounded-xl overflow-hidden shadow-md">
                <SmoothImage
                  id={`business-gallery-4-${area.id}`}
                  src={area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="related" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                <span className="relative inline-block">
                  {language === 'vi' ? 'Lĩnh vực liên quan' : 'Related Business Areas'}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedAreas.map((relatedArea, index) => (
                  <div 
                    key={relatedArea.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="h-48 overflow-hidden">
                      <SmoothImage
                        id={`business-related-${relatedArea.id}`}
                        src={relatedArea.image}
                        alt={t(relatedArea.titleKey)}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{t(relatedArea.titleKey)}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{t(relatedArea.descriptionKey)}</p>
                      <Link 
                        to={`/${relatedArea.id}`}
                        className="inline-flex items-center text-gaet-600 font-medium group-hover:text-gaet-700"
                      >
                        {t('business.learnMore')}
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gaet-700 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {language === 'vi' ? 'Quan tâm đến lĩnh vực này?' : 'Interested in this business area?'}
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              {language === 'vi' 
                ? 'Hãy liên hệ với chúng tôi để được tư vấn chi tiết và hỗ trợ tốt nhất.'
                : 'Contact us for detailed consultation and the best support.'}
            </p>
            <Button className="bg-white text-gaet-700 hover:bg-gaet-50">
              {language === 'vi' ? 'Liên hệ ngay' : 'Contact Now'}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessArea;
