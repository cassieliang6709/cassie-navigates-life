export type Language = 'zh' | 'en'

export interface Translations {
  // Hero Section
  hero: {
    title: string
    subtitle: string
    description: string
    viewProjects: string
    contactMe: string
    viewResume: string
  }
  
  // About Section
  about: {
    title: string
    timeline: {
      title: string
      items: Array<{
        icon: string
        title: string
        description: string
        year: string
        category: 'education' | 'career' | 'achievement' | 'personal'
      }>
    }
    cards: {
      personalTraits: {
        icon: string
        title: string
        items: string[]
      }
      growthJourney: {
        icon: string
        title: string
        items: string[]
      }
    }
  }
  
  // Projects Section
  projects: {
    title: string
    subtitle: string
    adhd: {
      title: string
      description: string
      buttonText: string
    }
    ecommerce: {
      title: string
      description: string
      buttonText: string
    }
    tourism: {
      title: string
      description: string
      buttonText: string
    }
  }
  
  // Skills Section
  skills: {
    title: string
    tech: string
    language: string
    professional: string
    techSkills: string[]
    languageSkills: string[]
    professionalSkills: string[]
  }
  
  // Contact Section
  contact: {
    title: string
    subtitle: string
  }
  
  // Navigation
  navigation: {
    home: string
    projects: string
    about: string
    contact: string
  }
  
  // Footer
  footer: {
    copyright: string
  }
}

export const translations: Record<Language, Translations> = {
  zh: {
    hero: {
      title: "梁悦 Cassie",
      subtitle: "独立开发者 | 产品设计师 | 审计师",
      description: "Hi 👋 我是梁悦Cassie，双鱼座，ESTP，喜欢旅行，心理学知识和AI。在努力成为一个有生命力的人。",
      viewProjects: "查看我的项目",
      contactMe: "联系我",
      viewResume: "查看我的简历"
    },
    about: {
      title: "关于我",
      timeline: {
        title: "🚀 我的成长历程",
        items: [
          {
            icon: "🏠",
            title: "出生成长",
            description: "出生并成长于新疆哈密",
            year: "2000-2018",
            category: "personal"
          },
          {
            icon: "🎓",
            title: "高考成就",
            description: "非常典型的理科生，高考理综和数学加起来扣的分小于语文一门，新疆理科高考660分/全省173名",
            year: "2018",
            category: "achievement"
          },
          {
            icon: "📚",
            title: "大学学习",
            description: "大学非常努力学习中：在上海财经大学学习会计，获得过人民奖学金二等奖，三等奖，华为奖学金等",
            year: "2018-2022",
            category: "education"
          },
          {
            icon: "💼",
            title: "职业经历",
            description: "曾担任审计师、行研助理、战略研究和产品设计",
            year: "2022-2023",
            category: "career"
          },
          {
            icon: "🛒",
            title: "跨境电商",
            description: "做过跨境电商，没有盈利，但是学会了如何和货代和供应商谈判，如何在亚马逊上控制CPC广告预算",
            year: "2023",
            category: "career"
          },
          {
            icon: "✈️",
            title: "旅行探索",
            description: "爱好是旅行：去过日本、韩国和中国的20多个城市，今年希望继续探索：中国台湾、日本和新加坡",
            year: "2020-2024",
            category: "personal"
          },
          {
            icon: "💻",
            title: "转码探索",
            description: "转码半年：积极探索黑客松中，在advx上获得过最佳科技奖，在创业森林上获得过第二名，项目入驻梦想小镇",
            year: "2024",
            category: "achievement"
          },
          {
            icon: "🌟",
            title: "人生哲学",
            description: "不祈求成功，但是希望有勇气面对一切困难",
            year: "持续",
            category: "personal"
          }
        ]
      },
      cards: {
        personalTraits: {
          icon: "✨",
          title: "个人特质",
          items: [
            "出生并成长于新疆哈密",
            "曾担任审计师、行研助理、战略研究和产品设计",
            "爱好是旅行：去过日本、韩国和中国的20多个城市",
            "今年希望继续探索：中国台湾、日本和新加坡",
            "不祈求成功，但是希望有勇气面对一切困难"
          ]
        },
        growthJourney: {
          icon: "🎓",
          title: "成长历程",
          items: [
            "非常典型的理科生，高考理综和数学加起来扣的分小于语文一门，新疆理科高考660分/全省173名",
            "大学非常努力学习中：在上海财经大学学习会计，获得过人民奖学金二等奖，三等奖，华为奖学金等",
            "做过跨境电商，没有盈利，但是学会了如何和货代和供应商谈判，如何在亚马逊上控制CPC广告预算",
            "转码半年：积极探索黑客松中，在advx上获得过最佳科技奖，在创业森林上获得过第二名，项目入驻梦想小镇"
          ]
        }
      }
    },
    projects: {
      title: "我的项目",
      subtitle: "探索我近期的工作和创新项目",
      adhd: {
        title: "正助 - ADHD情绪和任务管理应用",
        description: "一款针对ADHD人群的应用，提供情绪支持与任务管理的闭环解决方案，帮助用户更好地管理情绪波动和任务执行困难。",
        buttonText: "查看商业计划书"
      },
      ecommerce: {
        title: "电子商务业务",
        description: "在美国与加拿大市场运营电子商务业务，专注于产品开发、供应链管理和市场营销策略。",
        buttonText: "了解更多"
      },
      tourism: {
        title: "我的入境游项目",
        description: "专注于为外国游客提供中国入境旅游服务，包括行程规划、文化体验和本地向导服务。",
        buttonText: "查看项目"
      }
    },
    skills: {
      title: "专业技能",
      tech: "技术技能",
      language: "语言能力",
      professional: "专业领域",
      techSkills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'React Native', 'Next.js', 'Go', 'Excel', 'PowerPoint', 'Photoshop'],
      languageSkills: ['英语（流利）', '普通话（母语）'],
      professionalSkills: ['产品设计', '用户研究', '数据分析', '电子商务', '审计与财务']
    },
    contact: {
      title: "联系我",
      subtitle: "如果您对我的项目感兴趣，或者想要了解更多信息，欢迎通过以下方式联系我："
    },
    navigation: {
      home: "🏠 首页",
      projects: "📂 项目",
      about: "👤 关于我",
      contact: "📞 联系方式"
    },
    footer: {
      copyright: "© 2024 梁悦. 保留所有权利. 浙ICP备2025173001号"
    }
  },
  en: {
    hero: {
      title: "Liang Yue Cassie",
      subtitle: "Independent Developer | Product Designer | Auditor",
      description: "Hi 👋 I'm Liang Yue Cassie, a Pisces, ESTP, who loves travel, psychology knowledge and AI. Striving to be a person full of vitality.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      viewResume: "View My Resume"
    },
    about: {
      title: "About Me",
      timeline: {
        title: "🚀 My Journey",
        items: [
          {
            icon: "🏠",
            title: "Birth & Growth",
            description: "Born and raised in Hami, Xinjiang",
            year: "2000-2018",
            category: "personal"
          },
          {
            icon: "🎓",
            title: "College Entrance Exam",
            description: "Very typical science student, college entrance exam science and math combined lost fewer points than Chinese alone, Xinjiang science college entrance exam 660 points/173rd in province",
            year: "2018",
            category: "achievement"
          },
          {
            icon: "📚",
            title: "University Studies",
            description: "Studied very hard at university: studied accounting at Shanghai University of Finance and Economics, received People's Scholarship second prize, third prize, Huawei Scholarship and other honors",
            year: "2018-2022",
            category: "education"
          },
          {
            icon: "💼",
            title: "Professional Experience",
            description: "Previously worked as auditor, research assistant, strategic research and product design",
            year: "2022-2023",
            category: "career"
          },
          {
            icon: "🛒",
            title: "Cross-border E-commerce",
            description: "Did cross-border e-commerce, didn't make profit, but learned how to negotiate with freight forwarders and suppliers, how to control CPC ad budget on Amazon",
            year: "2023",
            category: "career"
          },
          {
            icon: "✈️",
            title: "Travel Exploration",
            description: "Hobby is travel: visited Japan, Korea and over 20 cities in China, this year hoping to explore: Taiwan, Japan and Singapore",
            year: "2020-2024",
            category: "personal"
          },
          {
            icon: "💻",
            title: "Coding Journey",
            description: "Started coding half a year ago: actively exploring hackathons, won Best Tech Award at advx, second place at Startup Forest, project entered Dream Town",
            year: "2024",
            category: "achievement"
          },
          {
            icon: "🌟",
            title: "Life Philosophy",
            description: "Not praying for success, but hoping to have courage to face all difficulties",
            year: "Ongoing",
            category: "personal"
          }
        ]
      },
      cards: {
        personalTraits: {
          icon: "✨",
          title: "Personal Traits",
          items: [
            "Born and raised in Hami, Xinjiang",
            "Previously worked as auditor, research assistant, strategic research and product design",
            "Hobby is travel: visited Japan, Korea and over 20 cities in China",
            "This year hoping to explore: Taiwan, Japan and Singapore",
            "Not praying for success, but hoping to have courage to face all difficulties"
          ]
        },
        growthJourney: {
          icon: "🎓",
          title: "Growth Journey",
          items: [
            "Very typical science student, college entrance exam science and math combined lost fewer points than Chinese alone, Xinjiang science college entrance exam 660 points/173rd in province",
            "Studied very hard at university: studied accounting at Shanghai University of Finance and Economics, received People's Scholarship second prize, third prize, Huawei Scholarship and other honors",
            "Did cross-border e-commerce, didn't make profit, but learned how to negotiate with freight forwarders and suppliers, how to control CPC ad budget on Amazon",
            "Started coding half a year ago: actively exploring hackathons, won Best Tech Award at advx, second place at Startup Forest, project entered Dream Town"
          ]
        }
      }
    },
    projects: {
      title: "My Projects",
      subtitle: "Explore my recent work and innovative projects",
      adhd: {
        title: "ZhengZhu - ADHD Emotion & Task Management App",
        description: "An app designed for people with ADHD, providing a closed-loop solution for emotional support and task management, helping users better manage emotional fluctuations and task execution difficulties.",
        buttonText: "View Business Plan"
      },
      ecommerce: {
        title: "E-commerce Business",
        description: "Operating e-commerce business in US and Canadian markets, focusing on product development, supply chain management and marketing strategies.",
        buttonText: "Learn More"
      },
      tourism: {
        title: "My Inbound Tourism Project",
        description: "Focused on providing inbound tourism services for foreign visitors to China, including itinerary planning, cultural experiences and local guide services.",
        buttonText: "View Project"
      }
    },
    skills: {
      title: "Professional Skills",
      tech: "Technical Skills",
      language: "Language Skills",
      professional: "Professional Areas",
      techSkills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'React Native', 'Next.js', 'Go', 'Excel', 'PowerPoint', 'Photoshop'],
      languageSkills: ['English (Fluent)', 'Mandarin (Native)'],
      professionalSkills: ['Product Design', 'User Research', 'Data Analysis', 'E-commerce', 'Audit & Finance']
    },
    contact: {
      title: "Contact Me",
      subtitle: "If you're interested in my projects or want to learn more, feel free to reach out through the following ways:"
    },
    navigation: {
      home: "🏠 Home",
      projects: "📂 Projects",
      about: "👤 About",
      contact: "📞 Contact"
    },
    footer: {
      copyright: "© 2024 Liang Yue. All rights reserved. 浙ICP备2025173001号"
    }
  }
}

export function getTranslation(language: Language): Translations {
  return translations[language]
}
