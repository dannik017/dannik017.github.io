import { type SyntheticEvent, useEffect, useState } from 'react'

/* oxlint-disable react/jsx-no-literals */

type Language = 'ru' | 'kk' | 'en'

const translations = {
  ru: {
    nav: ['Обо мне', 'Навыки', 'Проекты', 'Отзывы', 'Связаться'],
    hero: {
      portfolio: 'ПОРТФОЛИО · 2026',
      role: 'Frontend-разработчик',
      description:
        'Создаю понятные и выразительные веб-интерфейсы — от первой идеи до готового сайта.',
      projects: 'Смотреть проекты',
      about: 'Познакомиться',
      scroll: 'ЛИСТАЙТЕ ВНИЗ',
      developer: 'РАЗРАБОТЧИК',
      chip: 'Иллюстрация микросхемы',
      code: 'Микросхема с символом кода',
    },
    about: {
      kicker: '01 — ОБО МНЕ',
      heading: 'Создаю интерфейсы,',
      emphasis: 'которыми удобно',
      ending: 'пользоваться.',
      bio: 'Я Жорабек Даниел — студент ВКТУ и frontend-разработчик из Усть-Каменогорска. Изучаю веб-разработку и создаю современные, удобные и стильные цифровые продукты. Постоянно развиваю свои навыки и работаю над новыми проектами.',
      cta: 'Давайте обсудим вашу идею',
      facts: [
        'Внимание к интерфейсу',
        'Адаптивная разработка',
        'Чистая структура кода',
      ],
    },
    skills: {
      kicker: '02 — ИНСТРУМЕНТЫ',
      heading: 'Мой стек',
      emphasis: 'и навыки.',
      intro:
        'Инструменты и технологии, которые использую в проектах и изучаю дальше.',
      categories: [
        [
          'Frontend-разработка',
          'Интерактивные веб-интерфейсы',
          ['React', 'TypeScript', 'JavaScript'],
        ],
        [
          'Веб-технологии',
          'Структура и оформление страниц',
          ['HTML', 'CSS', 'Адаптивная вёрстка'],
        ],
        [
          'Библиотеки и сборка',
          'Создание и запуск веб-проектов',
          ['React', 'Vite'],
        ],
        ['Инструменты', 'Рабочий процесс разработки', ['Git', 'GitHub']],
        [
          'Анализ данных',
          'Подготовка данных для исследования',
          ['Python', 'Pandas', 'Scikit-learn'],
        ],
        [
          'Машинное обучение',
          'Учебная классификация уровня анемии',
          ['Логистическая регрессия', 'Дерево решений', 'Случайный лес'],
        ],
      ],
    },
    projects: {
      kicker: '03 — ИЗБРАННЫЕ РАБОТЫ',
      title: 'Проекты',
      summary:
        'Учебные и практические работы в веб-разработке и анализе данных.',
      category: 'МАШИННОЕ ОБУЧЕНИЕ',
      anemia: 'Уровень анемии',
      age: 'Возраст',
      gender: 'Пол',
      hemoglobin: 'Гемоглобин',
      mild: 'Лёгкая степень',
      moderate: 'Умеренная степень',
      severe: 'Тяжёлая степень',
      study: 'УЧЕБНОЕ ИССЛЕДОВАНИЕ',
      projectName: 'Прогнозирование уровня анемии',
      description:
        'Классификация уровня анемии по возрасту, полу и уровню гемоглобина. Сравнил логистическую регрессию, дерево решений и ансамбль деревьев решений (Random Forest) с помощью Python, Pandas и Scikit-learn.',
    },
    reviews: {
      kicker: '04 — ОТЗЫВЫ',
      heading: 'Мнение о совместной работе',
      name: 'Ваше имя',
      namePlaceholder: 'Как к вам обращаться',
      role: 'Роль или компания',
      optional: '(необязательно)',
      rolePlaceholder: 'Например, коллега',
      message: 'Отзыв',
      messagePlaceholder: 'Напишите пару слов о совместной работе',
      rating: 'Оценка',
      ratings: [
        '★★★★★ — отлично',
        '★★★★☆ — хорошо',
        '★★★☆☆ — нормально',
        '★★☆☆☆ — плохо',
        '★☆☆☆☆ — очень плохо',
      ],
      submit: 'Показать отзыв',
      note: 'Отзыв будет виден до перезагрузки страницы и не сохранится.',
      empty: 'Пока отзывов нет. Оставьте первый — он появится здесь.',
      ratingAria: 'Оценка',
    },
    contact: {
      kicker: '05 — КОНТАКТ',
      heading: 'Есть идея?',
      emphasis: 'Давайте обсудим.',
      note: 'Заполните форму — сообщение откроется в WhatsApp, где его можно будет отправить.',
      name: 'Ваше имя',
      namePlaceholder: 'Имя',
      email: 'Ваш Email',
      subject: 'Тема',
      subjectPlaceholder: 'Запрос по проекту',
      message: 'Сообщение',
      messagePlaceholder: 'Расскажите, что хотели бы обсудить...',
      submit: 'Написать в WhatsApp',
      instagram: 'Открыть профиль',
      telegram: 'Ссылка появится здесь',
      location: 'Открыть Усть-Каменогорск в 2ГИС',
    },
    footer: ['Сделано с вниманием к деталям', 'Наверх ↑'],
    contactMessage: [
      'Здравствуйте!',
      'Меня зовут:',
      'не указан',
      'Тема:',
      'Сообщение:',
    ],
  },
  kk: {
    nav: ['Мен туралы', 'Дағдылар', 'Жобалар', 'Пікірлер', 'Байланысу'],
    hero: {
      portfolio: 'ПОРТФОЛИО · 2026',
      role: 'Frontend әзірлеуші',
      description:
        'Алғашқы идеядан дайын сайтқа дейін түсінікті әрі әсерлі веб-интерфейстер жасаймын.',
      projects: 'Жобаларды көру',
      about: 'Танысу',
      scroll: 'ТӨМЕН ЖЫЛЖЫҢЫЗ',
      developer: 'ӘЗІРЛЕУШІ',
      chip: 'Микросхема иллюстрациясы',
      code: 'Код белгісі бар микросхема',
    },
    about: {
      kicker: '01 — МЕН ТУРАЛЫ',
      heading: 'Ыңғайлы интерфейстер',
      emphasis: 'жасаймын',
      ending: '.',
      bio: 'Мен Жорабек Даниел — ШҚТУ студенті және Өскемен қаласынан шыққан frontend әзірлеушімін. Веб-әзірлеуді үйреніп, заманауи, ыңғайлы әрі стильді цифрлық өнімдер жасаймын. Дағдыларымды үнемі дамытып, жаңа жобалармен жұмыс істеймін.',
      cta: 'Идеяңызды талқылайық',
      facts: [
        'Интерфейске мән беру',
        'Бейімделгіш әзірлеу',
        'Кодтың таза құрылымы',
      ],
    },
    skills: {
      kicker: '02 — ҚҰРАЛДАР',
      heading: 'Менің стекім',
      emphasis: 'және дағдыларым.',
      intro:
        'Жобаларда қолданатын және әрі қарай үйреніп жүрген құралдар мен технологиялар.',
      categories: [
        [
          'Frontend әзірлеу',
          'Интерактивті веб-интерфейстер',
          ['React', 'TypeScript', 'JavaScript'],
        ],
        [
          'Веб-технологиялар',
          'Беттердің құрылымы мен безендірілуі',
          ['HTML', 'CSS', 'Бейімделгіш беттеу'],
        ],
        [
          'Кітапханалар және жинақтау',
          'Веб-жобаларды жасау және іске қосу',
          ['React', 'Vite'],
        ],
        ['Құралдар', 'Әзірлеу жұмыс үдерісі', ['Git', 'GitHub']],
        [
          'Деректерді талдау',
          'Зерттеу деректерін дайындау',
          ['Python', 'Pandas', 'Scikit-learn'],
        ],
        [
          'Машиналық оқыту',
          'Анемия деңгейін жіктеу бойынша оқу жобасы',
          ['Логистикалық регрессия', 'Шешім ағашы', 'Random Forest'],
        ],
      ],
    },
    projects: {
      kicker: '03 — ТАҢДАЛҒАН ЖҰМЫСТАР',
      title: 'Жобалар',
      summary:
        'Веб-әзірлеу және деректерді талдау бойынша оқу және практикалық жұмыстар.',
      category: 'МАШИНАЛЫҚ ОҚЫТУ',
      anemia: 'Анемия деңгейі',
      age: 'Жасы',
      gender: 'Жынысы',
      hemoglobin: 'Гемоглобин',
      mild: 'Жеңіл деңгей',
      moderate: 'Орташа деңгей',
      severe: 'Ауыр деңгей',
      study: 'ОҚУ ЗЕРТТЕУІ',
      projectName: 'Анемия деңгейін болжау',
      description:
        'Жасы, жынысы және гемоглобин деңгейі бойынша анемияны жіктеу. Python, Pandas және Scikit-learn көмегімен логистикалық регрессияны, шешім ағашын және Random Forest ансамблін салыстырдым.',
    },
    reviews: {
      kicker: '04 — ПІКІРЛЕР',
      heading: 'Бірлескен жұмыс туралы пікірлер',
      name: 'Атыңыз',
      namePlaceholder: 'Атыңызды жазыңыз',
      role: 'Рөліңіз немесе компания',
      optional: '(міндетті емес)',
      rolePlaceholder: 'Мысалы, әріптес',
      message: 'Пікір',
      messagePlaceholder: 'Бірлескен жұмыс туралы қысқаша жазыңыз',
      rating: 'Бағалау',
      ratings: [
        '★★★★★ — өте жақсы',
        '★★★★☆ — жақсы',
        '★★★☆☆ — орташа',
        '★★☆☆☆ — нашар',
        '★☆☆☆☆ — өте нашар',
      ],
      submit: 'Пікірді көрсету',
      note: 'Пікір бет жаңартылғанға дейін көрсетіледі және сақталмайды.',
      empty: 'Әзірге пікір жоқ. Бірінші пікірді қалдырыңыз.',
      ratingAria: 'Бағасы',
    },
    contact: {
      kicker: '05 — БАЙЛАНЫС',
      heading: 'Идеяңыз бар ма?',
      emphasis: 'Талқылайық.',
      note: 'Пішінді толтырыңыз — хабарлама WhatsApp-та ашылады, сол жерден жібере аласыз.',
      name: 'Атыңыз',
      namePlaceholder: 'Атыңыз',
      email: 'Email мекенжайыңыз',
      subject: 'Тақырып',
      subjectPlaceholder: 'Жоба туралы сұрақ',
      message: 'Хабарлама',
      messagePlaceholder: 'Нені талқылағыңыз келетінін жазыңыз...',
      submit: 'WhatsApp-қа жазу',
      instagram: 'Профильді ашу',
      telegram: 'Сілтеме кейін қосылады',
      location: 'Өскеменді 2GIS-тен ашу',
    },
    footer: ['Егжей-тегжейге мән беріп жасалды', 'Жоғарыға ↑'],
    contactMessage: [
      'Сәлеметсіз бе!',
      'Атым:',
      'көрсетілмеген',
      'Тақырып:',
      'Хабарлама:',
    ],
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Reviews', 'Contact'],
    hero: {
      portfolio: 'PORTFOLIO · 2026',
      role: 'Frontend Developer',
      description:
        'I build clear, expressive web interfaces — from the first idea to a finished website.',
      projects: 'View projects',
      about: 'Get to know me',
      scroll: 'SCROLL DOWN',
      developer: 'DEVELOPER',
      chip: 'Microchip illustration',
      code: 'Microchip with a code symbol',
    },
    about: {
      kicker: '01 — ABOUT ME',
      heading: 'I create interfaces',
      emphasis: 'people enjoy',
      ending: 'using.',
      bio: 'I’m Zhorabek Daniel, an East Kazakhstan Technical University student and frontend developer from Oskemen. I study web development and build modern, user-friendly digital products. I keep improving my skills and working on new projects.',
      cta: 'Let’s discuss your idea',
      facts: [
        'Attention to interfaces',
        'Responsive development',
        'Clean code structure',
      ],
    },
    skills: {
      kicker: '02 — TOOLKIT',
      heading: 'My stack',
      emphasis: 'and skills.',
      intro:
        'Tools and technologies I use in projects and continue to explore.',
      categories: [
        [
          'Frontend Development',
          'Interactive web interfaces',
          ['React', 'TypeScript', 'JavaScript'],
        ],
        [
          'Web Technologies',
          'Page structure and styling',
          ['HTML', 'CSS', 'Responsive design'],
        ],
        [
          'Libraries & Build Tools',
          'Creating and running web projects',
          ['React', 'Vite'],
        ],
        ['Tools', 'Development workflow', ['Git', 'GitHub']],
        [
          'Data Analysis',
          'Preparing data for research',
          ['Python', 'Pandas', 'Scikit-learn'],
        ],
        [
          'Machine Learning',
          'Anemia-level classification study',
          ['Logistic Regression', 'Decision Tree', 'Random Forest'],
        ],
      ],
    },
    projects: {
      kicker: '03 — SELECTED WORK',
      title: 'Projects',
      summary:
        'Study and practice projects in web development and data analysis.',
      category: 'MACHINE LEARNING',
      anemia: 'Anemia level',
      age: 'Age',
      gender: 'Sex',
      hemoglobin: 'Hemoglobin',
      mild: 'Mild',
      moderate: 'Moderate',
      severe: 'Severe',
      study: 'STUDY PROJECT',
      projectName: 'Anemia Level Prediction',
      description:
        'Classification of anemia level based on age, sex, and hemoglobin. Compared Logistic Regression, Decision Tree, and Random Forest models using Python, Pandas, and Scikit-learn.',
    },
    reviews: {
      kicker: '04 — REVIEWS',
      heading: 'What it’s like to work together',
      name: 'Your name',
      namePlaceholder: 'How should we address you?',
      role: 'Role or company',
      optional: '(optional)',
      rolePlaceholder: 'For example, colleague',
      message: 'Review',
      messagePlaceholder: 'Share a few words about working together',
      rating: 'Rating',
      ratings: [
        '★★★★★ — excellent',
        '★★★★☆ — good',
        '★★★☆☆ — okay',
        '★★☆☆☆ — poor',
        '★☆☆☆☆ — very poor',
      ],
      submit: 'Show review',
      note: 'Your review will appear until the page is refreshed and will not be saved.',
      empty: 'No reviews yet. Leave the first one.',
      ratingAria: 'Rating',
    },
    contact: {
      kicker: '05 — CONTACT',
      heading: 'Have an idea?',
      emphasis: 'Let’s talk.',
      note: 'Fill out the form — your message will open in WhatsApp, where you can send it.',
      name: 'Your name',
      namePlaceholder: 'Name',
      email: 'Your email',
      subject: 'Subject',
      subjectPlaceholder: 'Project inquiry',
      message: 'Message',
      messagePlaceholder: 'Tell me what you would like to discuss...',
      submit: 'Message on WhatsApp',
      instagram: 'Open profile',
      telegram: 'Link coming soon',
      location: 'Open Oskemen in 2GIS',
    },
    footer: ['Made with attention to detail', 'Back to top ↑'],
    contactMessage: [
      'Hello!',
      'My name:',
      'not provided',
      'Subject:',
      'Message:',
    ],
  },
} as const

const getFormValue = (fields: FormData, name: string, fallback = '') => {
  const value = fields.get(name)
  return typeof value === 'string' ? value : fallback
}

const handleContactSubmit = (
  event: SyntheticEvent<HTMLFormElement>,
  language: Language
) => {
  event.preventDefault()

  const fields = new FormData(event.currentTarget)
  const message = [
    translations[language].contactMessage[0],
    `${translations[language].contactMessage[1]} ${getFormValue(fields, 'name')}`,
    `${translations[language].contact.email}: ${getFormValue(fields, 'email', translations[language].contactMessage[2])}`,
    `${translations[language].contactMessage[3]} ${getFormValue(fields, 'subject')}`,
    `${translations[language].contactMessage[4]} ${getFormValue(fields, 'message')}`,
  ].join('\n')

  window.open(
    `https://wa.me/77077770707?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  )
}

type SubmittedReview = {
  name: string
  role: string
  message: string
  rating: number
}

const Landing = () => {
  const [language, setLanguage] = useState<Language>('ru')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  const [submittedReviews, setSubmittedReviews] = useState<SubmittedReview[]>(
    []
  )

  const handleReviewSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    setSubmittedReviews((reviews) => [
      ...reviews,
      {
        name: getFormValue(fields, 'reviewer'),
        role: getFormValue(fields, 'reviewerRole'),
        message: getFormValue(fields, 'reviewMessage'),
        rating: Number(getFormValue(fields, 'reviewRating', '5')),
      },
    ])
    form.reset()
  }

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`DZ — ${t.nav[4]}`}>
          <img
            className="wordmark-mark"
            src="/images/dz-logo-round.png"
            alt="DZ"
          />
          <span>
            Жорабек Даниел<span className="wordmark-dot">.</span>
          </span>
        </a>
        <nav
          className="site-nav"
          aria-label={
            language === 'ru'
              ? 'Основная навигация'
              : language === 'kk'
                ? 'Негізгі навигация'
                : 'Main navigation'
          }
        >
          <a href="#about">{t.nav[0]}</a>
          <a href="#skills">{t.nav[1]}</a>
          <a href="#work">{t.nav[2]}</a>
          <a href="#reviews">{t.nav[3]}</a>
        </nav>
        <div
          className="language-switcher"
          role="group"
          aria-label="Language / Тіл / Язык"
        >
          {(['ru', 'kk', 'en'] as const).map((code) => (
            <button
              aria-pressed={language === code}
              className={language === code ? 'language-active' : ''}
              key={code}
              onClick={() => setLanguage(code)}
              type="button"
            >
              <span
                title={
                  code === 'ru'
                    ? 'Русский'
                    : code === 'kk'
                      ? 'Қазақша'
                      : 'English'
                }
              >
                {code === 'kk' ? 'KZ' : code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
        <a className="header-contact" href="#contact">
          {t.nav[4]} <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {t.hero.portfolio}
          </p>
          <h1 className="hero-name">Жорабек Даниел</h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              {t.hero.projects} <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#about">
              {t.hero.about} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label={t.hero.chip}>
          <div className="signature-card">
            <div className="signature-top">
              <span className="signature-mark-small">&lt;/&gt;</span>
              <span>{t.hero.portfolio}</span>
            </div>
            <div className="signature-center">
              <svg
                className="chip-art"
                viewBox="0 0 220 220"
                role="img"
                aria-label={t.hero.code}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M70 25v27m40-27v27m40-27v27M70 168v27m40-27v27m40-27v27M25 70h27m-27 40h27m-27 40h27m116-80h27m-27 40h27m-27 40h27" />
                  <rect
                    x="52"
                    y="52"
                    width="116"
                    height="116"
                    rx="18"
                    strokeWidth="2"
                  />
                  <rect
                    x="75"
                    y="75"
                    width="70"
                    height="70"
                    rx="12"
                    strokeWidth="1.5"
                  />
                </g>
                <path
                  d="m101 94-15 16 15 16m18-32 15 16-15 16"
                  fill="none"
                  stroke="#f5f4ef"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <circle cx="110" cy="110" r="3" fill="currentColor" />
              </svg>
              <span className="signature-underline" />
              <span className="signature-name">ЖОРАБЕК ДАНИЕЛ</span>
            </div>
            <div className="signature-bottom">
              <span>FRONTEND</span>
              <span>{t.hero.developer}</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span /> {t.hero.scroll}
        </a>
        <span className="hero-index">01 / 05</span>
      </section>

      <section className="intro-section section-wrap" id="about">
        <p className="section-kicker">{t.about.kicker}</p>
        <div className="intro-content">
          <h2>
            {t.about.heading}
            <br />
            <span>{t.about.emphasis}</span>
            <br />
            {t.about.ending}
          </h2>
          <div className="intro-aside">
            <p>{t.about.bio}</p>
            <a className="underlined-link" href="#contact">
              {t.about.cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="facts-row">
          <div>
            <span className="fact-number">01</span>
            <span>{t.about.facts[0]}</span>
          </div>
          <div>
            <span className="fact-number">02</span>
            <span>{t.about.facts[1]}</span>
          </div>
          <div>
            <span className="fact-number">03</span>
            <span>{t.about.facts[2]}</span>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap skills-inner">
          <div className="skills-heading">
            <p className="section-kicker">{t.skills.kicker}</p>
            <h2>
              {t.skills.heading} <span>{t.skills.emphasis}</span>
            </h2>
            <p className="skills-intro">{t.skills.intro}</p>
          </div>
          <div
            className="skill-cards"
            aria-label={
              language === 'ru'
                ? 'Технологии и навыки'
                : language === 'kk'
                  ? 'Технологиялар мен дағдылар'
                  : 'Technologies and skills'
            }
          >
            {t.skills.categories.map(([title, description, tags], index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-heading">
                  <span className="skill-icon" aria-hidden="true">
                    {['</>', 'JS', '⚛', '⌘', '▤', '◌'][index]}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="work-heading">
          <div>
            <p className="section-kicker">{t.projects.kicker}</p>
            <h2>
              {t.projects.title}
              <span className="wordmark-dot">.</span>
            </h2>
          </div>
          <p>{t.projects.summary}</p>
        </div>
        <article className="project-placeholder">
          <div className="project-visual">
            <div className="project-cover">
              <div className="project-cover-top">
                <span>{t.projects.category}</span>
                <span className="cover-mark">DZ</span>
              </div>
              <p className="cover-title">{t.projects.anemia}</p>
              <div className="cover-features">
                <div className="feature-card">
                  <span className="feature-icon age-icon" aria-hidden="true">
                    ⌁
                  </span>
                  <span className="feature-label">{t.projects.age}</span>
                </div>
                <div className="feature-card">
                  <span className="feature-icon sex-icon" aria-hidden="true">
                    ♀ / ♂
                  </span>
                  <span className="feature-label">{t.projects.gender}</span>
                </div>
                <div className="feature-card">
                  <span
                    className="feature-icon hemoglobin-icon"
                    aria-hidden="true"
                  >
                    Hb
                  </span>
                  <span className="feature-label">{t.projects.hemoglobin}</span>
                </div>
              </div>
              <svg
                className="project-flow"
                viewBox="0 0 600 42"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M20 8 120 30 215 12 310 34 405 14 500 30 580 8" />
                <circle cx="20" cy="8" r="3" />
                <circle cx="120" cy="30" r="3" />
                <circle cx="215" cy="12" r="3" />
                <circle cx="310" cy="34" r="3" />
                <circle cx="405" cy="14" r="3" />
                <circle cx="500" cy="30" r="3" />
                <circle cx="580" cy="8" r="3" />
              </svg>
              <div className="cover-models">
                <span>{t.projects.mild}</span>
                <span>{t.projects.moderate}</span>
                <span>{t.projects.severe}</span>
              </div>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="project-caption">
            <div>
              <span className="project-number">01</span>
              <h3>{t.projects.projectName}</h3>
            </div>
            <span className="project-type">{t.projects.study}</span>
          </div>
          <p className="project-note">{t.projects.description}</p>
        </article>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-wrap reviews-inner">
          <div className="reviews-heading">
            <p className="section-kicker">{t.reviews.kicker}</p>
            <h2>
              {t.reviews.heading}
              <span>.</span>
            </h2>
          </div>
          <div className="review-panel">
            <form className="review-form" onSubmit={handleReviewSubmit}>
              <label className="review-field">
                {t.reviews.name}
                <input
                  name="reviewer"
                  required
                  maxLength={60}
                  placeholder={t.reviews.namePlaceholder}
                />
              </label>
              <label className="review-field">
                {t.reviews.role} <span>{t.reviews.optional}</span>
                <input
                  name="reviewerRole"
                  maxLength={80}
                  placeholder={t.reviews.rolePlaceholder}
                />
              </label>
              <label className="review-field review-message-field">
                {t.reviews.message}
                <textarea
                  name="reviewMessage"
                  required
                  maxLength={600}
                  rows={4}
                  placeholder={t.reviews.messagePlaceholder}
                />
              </label>
              <label className="review-field review-rating-field">
                {t.reviews.rating}
                <select name="reviewRating" defaultValue="5">
                  {t.reviews.ratings.map((rating, index) => (
                    <option key={rating} value={5 - index}>
                      {rating}
                    </option>
                  ))}
                </select>
              </label>
              <button className="review-submit" type="submit">
                {t.reviews.submit} <span aria-hidden="true">↗</span>
              </button>
              <p className="review-note">{t.reviews.note}</p>
            </form>
            {submittedReviews.length > 0 ? (
              <div className="review-grid" aria-live="polite">
                {submittedReviews.map((review, index) => (
                  <article
                    className="review-card"
                    key={`${review.name}-${index}`}
                  >
                    <div className="review-card-person">
                      <span className="review-avatar" aria-hidden="true">
                        {review.name.trim().charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <strong>{review.name}</strong>
                        {review.role && (
                          <span className="review-card-role">
                            {review.role}
                          </span>
                        )}
                      </div>
                    </div>
                    <p>{review.message}</p>
                    <div
                      className="review-stars"
                      aria-label={`${t.reviews.ratingAria}: ${review.rating} / 5`}
                    >
                      {'★'.repeat(review.rating)}
                      <span>{'★'.repeat(5 - review.rating)}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="review-empty">{t.reviews.empty}</p>
            )}
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="contact-header">
            <div>
              <p className="section-kicker">{t.contact.kicker}</p>
              <h2>
                {t.contact.heading}
                <br />
                <span>{t.contact.emphasis}</span>
              </h2>
            </div>
            <p className="contact-note">{t.contact.note}</p>
          </div>
          <div className="contact-columns">
            <form
              className="contact-form"
              onSubmit={(event) => handleContactSubmit(event, language)}
            >
              <div className="contact-form-row">
                <label className="contact-field">
                  {t.contact.name}
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder={t.contact.namePlaceholder}
                    required
                  />
                </label>
                <label className="contact-field">
                  {t.contact.email}
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                  />
                </label>
              </div>
              <label className="contact-field">
                {t.contact.subject}
                <input
                  name="subject"
                  placeholder={t.contact.subjectPlaceholder}
                  required
                />
              </label>
              <label className="contact-field">
                {t.contact.message}
                <textarea
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  required
                />
              </label>
              <button className="contact-submit" type="submit">
                {t.contact.submit} <span aria-hidden="true">↗</span>
              </button>
            </form>
            <aside
              className="contact-info"
              aria-label={
                language === 'ru'
                  ? 'Контактная информация'
                  : language === 'kk'
                    ? 'Байланыс ақпараты'
                    : 'Contact information'
              }
            >
              <a
                className="contact-info-card"
                href="https://www.instagram.com/elonmusk/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <strong>Instagram</strong>
                  <small>{t.contact.instagram}</small>
                </span>
                <span className="contact-info-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="contact-info-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.7 3.2 18.5 20c-.2 1.2-.9 1.5-1.9.9l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3 9.7-8.8c.4-.4-.1-.6-.6-.2L5.5 13.2.4 11.6c-1.1-.3-1.1-1 .2-1.5L20.3 2.5c.9-.3 1.7.2 1.4.7Z" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <strong>Telegram</strong>
                  <small>{t.contact.telegram}</small>
                </span>
              </div>
              <a
                className="contact-info-card"
                href="https://wa.me/77077770707"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L1 23l5.4-1.4a11.8 11.8 0 0 0 14.1-18.1Z" />
                    <path d="M8.2 7.8c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.7.8c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.8-.8c.2-.2.4-.3.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.1-.7 1.5-.5.5-1.1.7-1.8.7s-1.8-.3-3-.9c-1.5-.8-2.9-2.2-3.6-3.2-.7-.9-1.1-1.9-1.1-2.6s.3-1.2.7-1.6Z" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <strong>WhatsApp</strong>
                  <small>+7 707 777 07 07</small>
                </span>
                <span className="contact-info-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                className="contact-info-card"
                href="https://wa.me/77020077707"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L1 23l5.4-1.4a11.8 11.8 0 0 0 14.1-18.1Z" />
                    <path d="M8.2 7.8c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.7.8c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.8-.8c.2-.2.4-.3.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.1-.7 1.5-.5.5-1.1.7-1.8.7s-1.8-.3-3-.9c-1.5-.8-2.9-2.2-3.6-3.2-.7-.9-1.1-1.9-1.1-2.6s.3-1.2.7-1.6Z" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <strong>WhatsApp</strong>
                  <small>+7 702 007 77 07</small>
                </span>
                <span className="contact-info-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                className="contact-info-card"
                href="https://2gis.kz/ustkam/search/%D0%93.%20%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <strong>Локация</strong>
                  <small>{t.contact.location}</small>
                </span>
                <span className="contact-info-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </aside>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Жорабек Даниел</span>
            <span>{t.footer[0]}</span>
            <a className="footer-top-link" href="#home">
              {t.footer[1]}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Landing