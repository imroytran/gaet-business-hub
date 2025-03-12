
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar items
  'home': {
    'vi': 'Trang chủ',
    'en': 'Home'
  },
  'about': {
    'vi': 'Giới thiệu',
    'en': 'About'
  },
  'business': {
    'vi': 'Lĩnh vực kinh doanh',
    'en': 'Business Areas'
  },
  'news': {
    'vi': 'Tin tức',
    'en': 'News'
  },
  'subsidiaries': {
    'vi': 'Công ty thành viên',
    'en': 'Subsidiaries'
  },
  'contact': {
    'vi': 'Liên hệ',
    'en': 'Contact'
  },
  
  // AboutSection
  'about.title': {
    'vi': 'Về chúng tôi',
    'en': 'About Us'
  },
  'about.companyName': {
    'vi': 'Tổng Công Ty GAET',
    'en': 'GAET Corporation'
  },
  'about.description1': {
    'vi': 'Tổng công ty Kinh tế Kỹ thuật Công nghiệp quốc phòng (GAET) là đơn vị Quốc phòng-An ninh trực thuộc Tổng cục Công nghiệp Quốc phòng, là doanh nghiệp quốc phòng, luôn đi đầu trong lĩnh vực chuyển giao công nghệ và xuất khẩu hàng công nghiệp quốc phòng.',
    'en': 'General Corporation for Economics and Engineering Technology (GAET) is a Defense-Security unit under the General Department of Defense Industry, a defense enterprise, always leading in technology transfer and export of defense industry products.'
  },
  'about.description2': {
    'vi': 'GAET có chức năng kinh doanh đa ngành, đa lĩnh vực: xuất nhập khẩu, kinh doanh vật tư, thiết bị, dây chuyền công nghệ phục vụ sản xuất quốc phòng và kinh tế; xuất nhập khẩu và kinh doanh vật liệu nổ công nghiệp, dịch vụ nổ mìn; đào tạo nghề và xuất nhập khẩu lao động; liên doanh sản xuất nguyên liệu phục vụ sản xuất công nghiệp quốc phòng và nhiều chức năng kinh doanh quan trọng khác.',
    'en': 'GAET has multi-industry, multi-field business functions: import-export, trading of materials, equipment, technology lines for defense and economic production; import-export and trading of industrial explosives, blasting services; vocational training and labor export; joint ventures producing materials for defense industry production and many other important business functions.'
  },
  'about.learnMore': {
    'vi': 'Tìm hiểu thêm',
    'en': 'Learn More'
  },
  
  // About features
  'feature.globalVision': {
    'vi': 'Tầm nhìn toàn cầu',
    'en': 'Global Vision'
  },
  'feature.globalVision.desc': {
    'vi': 'Mở rộng thị trường quốc tế thông qua mạng lưới đối tác chiến lược trên khắp thế giới.',
    'en': 'Expanding international markets through a network of strategic partners around the world.'
  },
  'feature.professionalTeam': {
    'vi': 'Đội ngũ chuyên nghiệp',
    'en': 'Professional Team'
  },
  'feature.professionalTeam.desc': {
    'vi': 'Đội ngũ nhân sự với kinh nghiệm chuyên môn cao và kiến thức sâu rộng về các lĩnh vực kinh doanh.',
    'en': 'Personnel team with high professional experience and extensive knowledge in business fields.'
  },
  'feature.diverseFields': {
    'vi': 'Đa dạng lĩnh vực',
    'en': 'Diverse Fields'
  },
  'feature.diverseFields.desc': {
    'vi': 'Hoạt động trong nhiều lĩnh vực từ xuất nhập khẩu, công nghiệp quốc phòng đến đào tạo và phát triển nguồn nhân lực.',
    'en': 'Operating in many fields from import-export, defense industry to training and human resource development.'
  },
  'feature.advancedTech': {
    'vi': 'Công nghệ tiên tiến',
    'en': 'Advanced Technology'
  },
  'feature.advancedTech.desc': {
    'vi': 'Áp dụng công nghệ hiện đại và quy trình tiên tiến vào hoạt động sản xuất, kinh doanh.',
    'en': 'Applying modern technology and advanced processes to production and business activities.'
  },
  
  // Stats
  'stats.experience': {
    'vi': 'Năm kinh nghiệm',
    'en': 'Years of experience'
  },
  'stats.subsidiaries': {
    'vi': 'Công ty thành viên',
    'en': 'Subsidiaries'
  },
  'stats.partnerCountries': {
    'vi': 'Quốc gia đối tác',
    'en': 'Partner countries'
  },
  'stats.personnel': {
    'vi': 'Nhân sự',
    'en': 'Personnel'
  },
  
  // HeroSection
  'hero.company': {
    'vi': 'TỔNG CÔNG TY GAET',
    'en': 'GAET CORPORATION'
  },
  'hero.slogan': {
    'vi': 'Lấy tín tạo tầm',
    'en': 'Building trust, creating stature'
  },
  'hero.description': {
    'vi': 'Doanh nghiệp quốc phòng, luôn đi đầu trong lĩnh vực chuyển giao công nghệ và xuất khẩu hàng công nghiệp quốc phòng.',
    'en': 'Defense enterprise, always leading in technology transfer and export of defense industry products.'
  },
  'hero.learnMore': {
    'vi': 'Tìm hiểu thêm',
    'en': 'Learn More'
  },
  'hero.contact': {
    'vi': 'Liên hệ ngay',
    'en': 'Contact Now'
  },
  
  // BusinessSection
  'business.title': {
    'vi': 'Lĩnh vực hoạt động',
    'en': 'Business Areas'
  },
  'business.description': {
    'vi': 'Trong quá trình hoạt động kinh doanh, GAET đã thu được nhiều thành công nhờ sự nhạy bén, linh hoạt trong cơ chế thị trường. Với các đơn vị xuyên suốt từ Bắc đến Nam tạo sức mạnh tổng hợp khẳng định thương hiệu GAET trong suốt quá trình xây dựng, bảo vệ Tổ quốc và hội nhập kinh tế quốc tế.',
    'en': 'During its business operations, GAET has achieved many successes thanks to its acumen and flexibility in the market mechanism. With units throughout the country from North to South, it creates a combined strength affirming the GAET brand throughout the process of building, protecting the country and international economic integration.'
  },
  
  // Business areas
  'business.importExport': {
    'vi': 'Xuất nhập khẩu',
    'en': 'Import & Export'
  },
  'business.importExport.desc': {
    'vi': 'Triển khai mua sắm, trang bị cho quân đội máy móc, vật tư trang thiết bị, lắp đặt các dây chuyền sản xuất công nghiệp hiện đại, đảm bảo các yêu cầu kỹ thuật.',
    'en': 'Implementing procurement, equipping the military with machinery, materials and equipment, installing modern industrial production lines, ensuring technical requirements.'
  },
  'business.explosives': {
    'vi': 'Vật liệu nổ công nghiệp',
    'en': 'Industrial Explosives'
  },
  'business.explosives.desc': {
    'vi': 'Đầu mối duy nhất của Bộ Quốc phòng được giao nhiệm vụ xuất nhập khẩu, cung ứng vật liệu nổ công nghiệp cho các ngành xây dựng, giao thông, khai khoáng...',
    'en': 'The sole focal point of the Ministry of Defense assigned the task of importing, exporting, and supplying industrial explosives for construction, transportation, mining industries...'
  },
  'business.training': {
    'vi': 'Đào tạo nghề & XNK Lao động',
    'en': 'Vocational Training & Labor Export'
  },
  'business.training.desc': {
    'vi': 'Mở các khoá đào tạo nghề như: may công nghiệp, hàn, nguội cơ khí, mộc, cốp pha, sắt xây dựng... cung ứng hàng nghìn lao động được đào tạo sang thị trường các nước.',
    'en': 'Opening vocational training courses such as: industrial sewing, welding, mechanical engineering, carpentry, formwork, construction iron... supplying thousands of trained workers to foreign markets.'
  },
  'business.defense': {
    'vi': 'Sản xuất quốc phòng',
    'en': 'Defense Production'
  },
  'business.defense.desc': {
    'vi': 'Liên doanh sản xuất nguyên liệu và sản phẩm phục vụ công nghiệp quốc phòng, đi đầu trong lĩnh vực chuyển giao công nghệ và xuất khẩu hàng công nghiệp quốc phòng.',
    'en': 'Joint venture producing materials and products for the defense industry, leading in the field of technology transfer and export of defense industry products.'
  },
  'business.transportation': {
    'vi': 'Vận tải',
    'en': 'Transportation'
  },
  'business.transportation.desc': {
    'vi': 'Hoàn thành xuất sắc nhiệm vụ vận tải thuốc nổ công nghiệp, hàng hoá dân dụng và chuyên dụng với đoàn xe tải đa chủng loại trên khắp các nẻo đường.',
    'en': 'Excellently completing the transportation mission of industrial explosives, civilian and specialized goods with a fleet of multi-type trucks on all roads.'
  },
  'business.industrial': {
    'vi': 'Sản xuất công nghiệp',
    'en': 'Industrial Production'
  },
  'business.industrial.desc': {
    'vi': 'Hệ thống các xí nghiệp sản xuất các sản phẩm như: sản phẩm gỗ và composite, sản phẩm cơ khí, hòm hộp, bồn Inox, bao bì catton, giấy grap...',
    'en': 'A system of factories producing products such as: wood and composite products, mechanical products, boxes, stainless steel tanks, carton packaging, grap paper...'
  },
  'business.learnMore': {
    'vi': 'Tìm hiểu thêm',
    'en': 'Learn More'
  },
};

const defaultLanguageContext: LanguageContextType = {
  language: 'vi',
  setLanguage: () => {},
  t: (key: string) => key,
};

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
