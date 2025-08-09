import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        findTalent: 'Find Talent',
        forCompanies: 'For Companies',
        forTalent: 'For Talent',
        pricing: 'Pricing',
        contact: 'Contact',
        dashboard: 'Dashboard',
        profile: 'Profile',
        logout: 'Logout'
      },
      hero: {
        title: 'Connecting Global Companies with Top AI & Tech Talent',
        subtitle: 'Premium recruitment platform with advanced testing and secure talent matching',
        findTalent: 'Find Talent',
        joinTalent: 'Join as Talent',
        getStarted: 'Get Started'
      },
      features: {
        database: {
          title: 'Vast Talent Database',
          description: 'Access 50,000+ pre-screened AI and tech professionals'
        },
        testing: {
          title: 'Advanced Testing',
          description: 'Comprehensive skill assessments and real-world project evaluations'
        },
        security: {
          title: 'Secure & Compliant',
          description: 'GDPR compliant with enterprise-grade security measures'
        },
        matching: {
          title: 'Smart Matching',
          description: 'AI-powered matching algorithm for perfect talent-company fit'
        }
      },
      stats: {
        talents: 'Talents',
        hires: 'Successful Hires',
        companies: 'Partner Companies',
        satisfaction: 'Satisfaction Rate'
      },
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        retry: 'Try Again',
        save: 'Save',
        cancel: 'Cancel',
        submit: 'Submit',
        search: 'Search',
        filter: 'Filter',
        reset: 'Reset'
      }
    }
  },
  ka: {
    translation: {
      nav: {
        home: 'მთავარი',
        findTalent: 'ტალანტის მოძებნა',
        forCompanies: 'კომპანიებისთვის',
        forTalent: 'ტალანტებისთვის',
        pricing: 'ფასები',
        contact: 'კონტაქტი',
        dashboard: 'პანელი',
        profile: 'პროფილი',
        logout: 'გასვლა'
      },
      hero: {
        title: 'გლობალური კომპანიების დაკავშირება უმაღლესი AI და ტექნოლოგიური ტალანტებით',
        subtitle: 'პრემიუმ დასაქმების პლატფორმა დაწინაურებული ტესტირებით და უსაფრთხო ტალანტის შერჩევით',
        findTalent: 'ტალანტის მოძებნა',
        joinTalent: 'რეგისტრაცია ტალანტად',
        getStarted: 'დაწყება'
      },
      features: {
        database: {
          title: 'ვრცელი ტალანტების ბაზა',
          description: 'წვდომა 50,000+ წინასწარ შემოწმებულ AI და ტექნოლოგიურ პროფესიონალზე'
        },
        testing: {
          title: 'დაწინაურებული ტესტირება',
          description: 'ყოვლისმომცველი უნარების შეფასება და რეალური პროექტების შეფასება'
        },
        security: {
          title: 'უსაფრთხო და შესაბამისი',
          description: 'GDPR-ის შესაბამისი საწარმოო დონის უსაფრთხოების ზომებით'
        },
        matching: {
          title: 'ჭკვიანური შერჩევა',
          description: 'AI-ით მართული შერჩევის ალგორითმი სრულყოფილი ტალანტ-კომპანიის შესატყვისობისთვის'
        }
      },
      stats: {
        talents: 'ტალანტები',
        hires: 'წარმატებული დაქირავება',
        companies: 'პარტნიორი კომპანიები',
        satisfaction: 'კმაყოფილების მაჩვენებელი'
      },
      common: {
        loading: 'იტვირთება...',
        error: 'რაღაც არასწორად მოხდა',
        retry: 'თავიდან სცადე',
        save: 'შენახვა',
        cancel: 'გაუქმება',
        submit: 'გაგზავნა',
        search: 'ძებნა',
        filter: 'ფილტრი',
        reset: 'გადატვირთვა'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        findTalent: 'Найти Таланты',
        forCompanies: 'Для Компаний',
        forTalent: 'Для Талантов',
        pricing: 'Цены',
        contact: 'Контакты',
        dashboard: 'Панель',
        profile: 'Профиль',
        logout: 'Выйти'
      },
      hero: {
        title: 'Соединяем Глобальные Компании с Лучшими AI и Tech Талантами',
        subtitle: 'Премиум платформа рекрутинга с продвинутым тестированием и безопасным подбором талантов',
        findTalent: 'Найти Таланты',
        joinTalent: 'Присоединиться как Талант',
        getStarted: 'Начать'
      },
      features: {
        database: {
          title: 'Обширная База Талантов',
          description: 'Доступ к 50,000+ предварительно проверенным AI и технологическим профессионалам'
        },
        testing: {
          title: 'Продвинутое Тестирование',
          description: 'Комплексная оценка навыков и оценка реальных проектов'
        },
        security: {
          title: 'Безопасный и Соответствующий',
          description: 'Соответствие GDPR с мерами безопасности корпоративного уровня'
        },
        matching: {
          title: 'Умное Сопоставление',
          description: 'Алгоритм сопоставления на базе ИИ для идеального соответствия талант-компания'
        }
      },
      stats: {
        talents: 'Таланты',
        hires: 'Успешные Найми',
        companies: 'Компании-Партнеры',
        satisfaction: 'Уровень Удовлетворенности'
      },
      common: {
        loading: 'Загрузка...',
        error: 'Что-то пошло не так',
        retry: 'Попробовать Снова',
        save: 'Сохранить',
        cancel: 'Отмена',
        submit: 'Отправить',
        search: 'Поиск',
        filter: 'Фильтр',
        reset: 'Сбросить'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;