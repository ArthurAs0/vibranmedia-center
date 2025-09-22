import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.teachers': 'Teachers',
    'nav.education': 'Education',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'header.watchLive': 'Watch Live',
    
    // Hero
    'hero.title': 'Welcome to Our',
    'hero.titleAccent': 'Media Center',
    'hero.subtitle': 'Discover quality education, inspiring content, and live broadcasting that connects communities around the world.',
    'hero.watchLive': 'Watch Live Stream',
    'hero.explore': 'Explore Content',
    'hero.teachers': 'Expert Teachers',
    'hero.streaming': 'Live Streaming',
    'hero.languages': 'Languages',
    
    // Teachers
    'teachers.title': 'Meet Our Expert Teachers',
    'teachers.subtitle': 'Learn from industry professionals who bring years of real-world experience and passion for media education to every lesson.',
    'teachers.joinPrograms': 'Join Our Programs',
    'teachers.experience': 'Experience',
    'teachers.courses': 'Courses',
    
    // Education
    'education.title': 'Education Programs',
    'education.subtitle': 'Transform your passion for media into professional expertise with our comprehensive education programs designed for the modern digital landscape.',
    'education.environment': 'State-of-the-Art Learning Environment',
    'education.environmentDesc': 'Experience hands-on learning with industry-standard equipment and expert guidance',
    'education.graduates': 'Graduates',
    'education.jobPlacement': 'Job Placement',
    'education.studentRating': 'Student Rating',
    'education.support': 'Support',
    'education.learnMore': 'Learn More',
    'education.ctaTitle': 'Ready to Start Your Media Journey?',
    'education.ctaDesc': 'Join thousands of students who have transformed their careers through our comprehensive media education programs.',
    'education.enrollToday': 'Enroll Today',
    'education.downloadBrochure': 'Download Brochure',
    
    // News
    'news.title': 'Latest News & Updates',
    'news.subtitle': 'Stay updated with the latest developments, achievements, and exciting news from our media center community.',
    'news.readMore': 'Read More',
    'news.readFull': 'Read Full Article',
    'news.viewAll': 'View All News',
    'news.featured': 'Featured',
    
    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Explore our vibrant media center through captivating visuals showcasing our facilities, students, and creative achievements.',
    'gallery.all': 'All',
    'gallery.loadMore': 'Load More Images',
    'gallery.views': 'views',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your media journey? Have questions about our programs? We\'d love to hear from you and help you achieve your goals.',
    'contact.sendMessage': 'Send us a message',
    'contact.formDesc': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subjectPlaceholder': 'What\'s this about?',
    'contact.messagePlaceholder': 'Tell us about your inquiry...',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Hours',
    'contact.visitCampus': 'Visit Our Campus',
    'contact.getDirections': 'Get Directions',
    'contact.followUs': 'Follow Us',
    'contact.stayUpdated': 'Stay updated with our latest news and events',
    'contact.required': 'Required fields missing',
    'contact.requiredDesc': 'Please fill in all required fields.',
    'contact.success': 'Message sent successfully!',
    'contact.successDesc': 'Thank you for your message. We\'ll get back to you soon.',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.resources': 'Resources',
    'footer.community': 'Community',
    'footer.description': 'Empowering the next generation of media professionals through innovative education, cutting-edge technology, and real-world experience.',
    'footer.stayConnected': 'Stay Connected',
    'footer.newsletterDesc': 'Subscribe to our newsletter for the latest updates, events, and educational content.',
    'footer.subscribe': 'Subscribe',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.madeWith': 'Made with',
    'footer.forProfessionals': 'for aspiring media professionals.',
    'footer.followUs': 'Follow us:',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.accessibility': 'Accessibility',
    
    // Common
    'common.oneTime': 'one-time',
    'common.enrolled': 'enrolled',
    'common.minRead': 'min read',
    'common.readTime': 'read time',
  },
  
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.teachers': 'Преподаватели',
    'nav.education': 'Образование',
    'nav.news': 'Новости',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакты',
    'header.watchLive': 'Прямой эфир',
    
    // Hero
    'hero.title': 'Добро пожаловать в наш',
    'hero.titleAccent': 'Медиацентр',
    'hero.subtitle': 'Откройте для себя качественное образование, вдохновляющий контент и прямые трансляции, которые объединяют сообщества по всему миру.',
    'hero.watchLive': 'Смотреть прямой эфир',
    'hero.explore': 'Изучить контент',
    'hero.teachers': 'Опытных преподавателей',
    'hero.streaming': 'Прямые трансляции',
    'hero.languages': 'Языка',
    
    // Teachers
    'teachers.title': 'Познакомьтесь с нашими экспертами',
    'teachers.subtitle': 'Учитесь у профессионалов отрасли, которые привносят многолетний реальный опыт и страсть к медиа-образованию в каждый урок.',
    'teachers.joinPrograms': 'Присоединиться к программам',
    'teachers.experience': 'Опыт',
    'teachers.courses': 'Курсы',
    
    // Education
    'education.title': 'Образовательные программы',
    'education.subtitle': 'Превратите свою страсть к медиа в профессиональную экспертизу с нашими комплексными образовательными программами, разработанными для современного цифрового ландшафта.',
    'education.environment': 'Современная учебная среда',
    'education.environmentDesc': 'Получите практический опыт с профессиональным оборудованием и экспертным руководством',
    'education.graduates': 'Выпускников',
    'education.jobPlacement': 'Трудоустройство',
    'education.studentRating': 'Рейтинг студентов',
    'education.support': 'Поддержка',
    'education.learnMore': 'Узнать больше',
    'education.ctaTitle': 'Готовы начать свой медиа-путь?',
    'education.ctaDesc': 'Присоединитесь к тысячам студентов, которые изменили свою карьеру благодаря нашим комплексным программам медиа-образования.',
    'education.enrollToday': 'Записаться сегодня',
    'education.downloadBrochure': 'Скачать брошюру',
    
    // News
    'news.title': 'Последние новости и обновления',
    'news.subtitle': 'Будьте в курсе последних событий, достижений и захватывающих новостей из нашего медиа-сообщества.',
    'news.readMore': 'Читать дальше',
    'news.readFull': 'Читать полную статью',
    'news.viewAll': 'Показать все новости',
    'news.featured': 'Рекомендуемое',
    
    // Gallery
    'gallery.title': 'Фотогалерея',
    'gallery.subtitle': 'Исследуйте наш динамичный медиацентр через захватывающие визуальные материалы, демонстрирующие наши объекты, студентов и творческие достижения.',
    'gallery.all': 'Все',
    'gallery.loadMore': 'Загрузить больше изображений',
    'gallery.views': 'просмотров',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Готовы начать свой медиа-путь? Есть вопросы о наших программах? Мы будем рады услышать от вас и помочь достичь ваших целей.',
    'contact.sendMessage': 'Отправьте нам сообщение',
    'contact.formDesc': 'Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.',
    'contact.name': 'Имя',
    'contact.email': 'Электронная почта',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить сообщение',
    'contact.namePlaceholder': 'Ваше полное имя',
    'contact.emailPlaceholder': 'ваш@email.com',
    'contact.subjectPlaceholder': 'О чем это?',
    'contact.messagePlaceholder': 'Расскажите нам о вашем запросе...',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.hours': 'Часы работы',
    'contact.visitCampus': 'Посетите наш кампус',
    'contact.getDirections': 'Проложить маршрут',
    'contact.followUs': 'Подписывайтесь на нас',
    'contact.stayUpdated': 'Будьте в курсе наших последних новостей и событий',
    'contact.required': 'Отсутствуют обязательные поля',
    'contact.requiredDesc': 'Пожалуйста, заполните все обязательные поля.',
    'contact.success': 'Сообщение успешно отправлено!',
    'contact.successDesc': 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
    
    // Footer
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.programs': 'Программы',
    'footer.resources': 'Ресурсы',
    'footer.community': 'Сообщество',
    'footer.description': 'Расширяем возможности следующего поколения медиа-профессионалов через инновационное образование, передовые технологии и реальный опыт.',
    'footer.stayConnected': 'Оставайтесь на связи',
    'footer.newsletterDesc': 'Подпишитесь на нашу рассылку, чтобы получать последние обновления, события и образовательный контент.',
    'footer.subscribe': 'Подписаться',
    'footer.emailPlaceholder': 'Введите ваш email',
    'footer.madeWith': 'Сделано с',
    'footer.forProfessionals': 'для начинающих медиа-профессионалов.',
    'footer.followUs': 'Подписывайтесь на нас:',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.accessibility': 'Доступность',
    
    // Common
    'common.oneTime': 'единоразово',
    'common.enrolled': 'записано',
    'common.minRead': 'мин чтения',
    'common.readTime': 'время чтения',
  },
  
  am: {
    // Header
    'nav.home': 'Գլխավոր',
    'nav.teachers': 'Ուսուցիչներ',
    'nav.education': 'Կրթություն',
    'nav.news': 'Նորություններ',
    'nav.gallery': 'Պատկերասրահ',
    'nav.contact': 'Կապ',
    'header.watchLive': 'Ուղիղ Եթեր',
    
    // Hero
    'hero.title': 'Բարի գալուստ մեր',
    'hero.titleAccent': 'Մեդիա Կենտրոն',
    'hero.subtitle': 'Բացահայտեք որակյալ կրթությունը, ոգեշնչող բովանդակությունը և ուղիղ հեռարձակումը, որոնք միացնում են համայնքները ամբողջ աշխարհում:',
    'hero.watchLive': 'Դիտել Ուղիղ Եթեր',
    'hero.explore': 'Ուսումնասիրել Բովանդակությունը',
    'hero.teachers': 'Փորձագետ Ուսուցիչներ',
    'hero.streaming': 'Ուղիղ Հեռարձակում',
    'hero.languages': 'Լեզուներ',
    
    // Teachers
    'teachers.title': 'Ծանոթացեք մեր փորձագետ ուսուցիչների հետ',
    'teachers.subtitle': 'Սովորեք արդյունաբերության մասնագետներից, ովքեր յուրաքանչյուր դասին բերում են տարիների իրական փորձ և մեդիա կրթության նկատմամբ կիրք:',
    'teachers.joinPrograms': 'Միանալ Ծրագրերին',
    'teachers.experience': 'Փորձ',
    'teachers.courses': 'Դասընթացներ',
    
    // Education
    'education.title': 'Կրթական Ծրագրեր',
    'education.subtitle': 'Վերափոխեք ձեր մեդիայի նկատմամբ կիրքը մասնագիտական փորձագիտության՝ մեր համապարփակ կրթական ծրագրերով, որոնք նախագծված են ժամանակակից թվային լանդշաֆտի համար:',
    'education.environment': 'Ժամանակակից Ուսումնական Միջավայր',
    'education.environmentDesc': 'Ապրեք գործնական ուսուցումը արդյունաբերական չափանիշների սարքավորումով և փորձագետների ղեկավարությամբ',
    'education.graduates': 'Ավարտականներ',
    'education.jobPlacement': 'Աշխատանքի Տեղակայում',
    'education.studentRating': 'Ուսանողների Գնահատական',
    'education.support': 'Աջակցություն',
    'education.learnMore': 'Իմանալ Ավելին',
    'education.ctaTitle': 'Պատրա՞ստ եք սկսելու ձեր մեդիա ճանապարհը:',
    'education.ctaDesc': 'Միացեք հազարավոր ուսանողների, ովքեր փոխել են իրենց կարիերան մեր համապարփակ մեդիա կրթական ծրագրերի միջոցով:',
    'education.enrollToday': 'Գրանցվել Այսօր',
    'education.downloadBrochure': 'Ներբեռնել Բրոշյուրը',
    
    // News
    'news.title': 'Վերջին Նորություններ և Թարմացումներ',
    'news.subtitle': 'Թարմացած մնացեք վերջին զարգացումների, ձեռքբերումների և հուզիչ նորությունների մասին մեր մեդիա կենտրոնի համայնքից:',
    'news.readMore': 'Կարդալ Ավելին',
    'news.readFull': 'Կարդալ Ամբողջ Հոդվածը',
    'news.viewAll': 'Տեսնել Բոլոր Նորությունները',
    'news.featured': 'Առաջարկված',
    
    // Gallery
    'gallery.title': 'Լուսանկարների Պատկերասրահ',
    'gallery.subtitle': 'Ուսումնասիրեք մեր կենդանի մեդիա կենտրոնը գրավիչ տեսանյութերի միջոցով, որոնք ցուցադրում են մեր հարմարանքները, ուսանողներին և ստեղծագործական ձեռքբերումները:',
    'gallery.all': 'Բոլորը',
    'gallery.loadMore': 'Բեռնել Ավելի Շատ Նկարներ',
    'gallery.views': 'դիտումներ',
    
    // Contact
    'contact.title': 'Կապվեք Մեզ Հետ',
    'contact.subtitle': 'Պատրա՞ստ եք սկսելու ձեր մեդիա ճանապարհը: Հարցեր ունե՞ք մեր ծրագրերի մասին: Մենք կցանկանայինք լսել ձեզանից և օգնել ձեզ հասնել ձեր նպատակներին:',
    'contact.sendMessage': 'Ուղարկեք մեզ նամակ',
    'contact.formDesc': 'Լրացրեք ստորև բերված ձևը, և մենք կկապվենք ձեզ հետ 24 ժամվա ընթացքում:',
    'contact.name': 'Անուն',
    'contact.email': 'Էլ․ հասցե',
    'contact.subject': 'Նյութ',
    'contact.message': 'Նամակ',
    'contact.send': 'Ուղարկել Նամակը',
    'contact.namePlaceholder': 'Ձեր լրիվ անունը',
    'contact.emailPlaceholder': 'ձեր@email.com',
    'contact.subjectPlaceholder': 'Ի՞նչ է այս մասին:',
    'contact.messagePlaceholder': 'Պատմեք մեզ ձեր հարցումի մասին...',
    'contact.address': 'Հասցե',
    'contact.phone': 'Հեռախոս',
    'contact.hours': 'Ժամեր',
    'contact.visitCampus': 'Այցելեք Մեր Քամփուսը',
    'contact.getDirections': 'Ստանալ Ուղղություններ',
    'contact.followUs': 'Հետևեք Մեզ',
    'contact.stayUpdated': 'Տեղեկացած մնացեք մեր վերջին նորությունների և իրադարձությունների մասին',
    'contact.required': 'Պարտադիր դաշտերը բացակայում են',
    'contact.requiredDesc': 'Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը:',
    'contact.success': 'Նամակը հաջողությամբ ուղարկվեց:',
    'contact.successDesc': 'Շնորհակալություն ձեր նամակի համար: Մենք շուտով կկապվենք ձեզ հետ:',
    
    // Footer
    'footer.quickLinks': 'Արագ Հղումներ',
    'footer.programs': 'Ծրագրեր',
    'footer.resources': 'Ռեսուրսներ',
    'footer.community': 'Համայնք',
    'footer.description': 'Մեդիա մասնագետների հաջորդ սերունդի կարողությունների ընդլայնումը նորարարական կրթության, առաջադեմ տեխնոլոգիաների և իրական փորձի միջոցով:',
    'footer.stayConnected': 'Մնացեք Կապի Մեջ',
    'footer.newsletterDesc': 'Բաժանորդագրվեք մեր տեղեկագրին՝ վերջին թարմացումներ, իրադարձություններ և կրթական բովանդակություն ստանալու համար:',
    'footer.subscribe': 'Բաժանորդագրվել',
    'footer.emailPlaceholder': 'Մուտքագրեք ձեր էլ․ հասցեն',
    'footer.madeWith': 'Պատրաստված է',
    'footer.forProfessionals': 'ապագա մեդիա մասնագետների համար:',
    'footer.followUs': 'Հետևեք մեզ՝',
    'footer.privacy': 'Գաղտնիության Քաղաքականություն',
    'footer.terms': 'Ծառայության Պայմաններ',
    'footer.accessibility': 'Մատչելիություն',
    
    // Common
    'common.oneTime': 'մեկանգամյա',
    'common.enrolled': 'գրանցված',
    'common.minRead': 'րոպե ընթերցում',
    'common.readTime': 'ընթերցման ժամանակ',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};