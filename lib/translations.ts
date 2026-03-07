export type Lang = "en" | "ru";

export type Translation = {
  nav: {
    features: string;
    howItWorks: string;
    pricing: string;
    logIn: string;
    getStarted: string;
  };
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
  };
  proofBar: {
    activeCooks: string;
    recipesMatched: string;
    lessFoodWaste: string;
    appStoreRating: string;
  };
  features: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    stepLabel: string;
    steps: { title: string; description: string }[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    steps: { title: string; description: string; alt: string }[];
  };
  benefits: {
    eyebrow: string;
    headline: string;
    testimonialsHeadline: string;
    items: { title: string; description: string }[];
    testimonials: { quote: string; role: string }[];
  };
  pricing: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    mostPopular: string;
    plans: {
      name: string;
      period: string;
      description: string;
      cta: string;
      features: string[];
      missing: string[];
    }[];
  };
  videoBanner: {
    eyebrow: string;
    headline: string;
    body: string;
    cta: string;
  };
  ctaBanner: {
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    copyright: string;
    groups: {
      heading: string;
      links: { label: string }[];
    }[];
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      logIn: "Log in",
      getStarted: "Get Started Free",
    },
    hero: {
      eyebrow: "Recipe Discovery",
      headline1: "Don't know what to eat?",
      headline2: "Take a photo of your fridge!",
      body: "Get personalized recipes based on the products in your fridge. Save time, money and reduce food waste with AI technology.",
      ctaPrimary: "Start Cooking Free",
      ctaSecondary: "Download the App",
      trustText: "home cooks already cooking smarter",
    },
    proofBar: {
      activeCooks: "Active Cooks",
      recipesMatched: "Recipes Matched",
      lessFoodWaste: "Less Food Waste",
      appStoreRating: "App Store Rating",
    },
    features: {
      eyebrow: "How It Works",
      headline: "Three steps to dinner",
      subheadline: "From empty fridge to delicious meal in less time than ordering takeaway.",
      stepLabel: "Step",
      steps: [
        {
          title: "Enter Your Ingredients",
          description: "Type in whatever's in your fridge, pantry, or freezer. Our smart autocomplete makes it fast — add 10 ingredients in under a minute.",
        },
        {
          title: "We Match the Recipes",
          description: "Our algorithm searches 200,000+ recipes and ranks them by how closely they match what you have. Full matches and near-matches both shown.",
        },
        {
          title: "Cook & Enjoy",
          description: "Step-by-step instructions, nutritional info, and a shopping list for any missing items. Save favourites and build your personal cookbook.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Deep Dive",
      headline: "See What2eat in action",
      steps: [
        {
          title: "Snap or type your ingredients",
          description: "Open the app or website and add what you have. Use our barcode scanner to add pantry staples in seconds, or type them manually. We support thousands of ingredients across every cuisine.",
          alt: "Person typing ingredients into a phone app in a bright kitchen",
        },
        {
          title: "Browse personalised recipe matches",
          description: "We rank recipes by match percentage so you always know what you can make right now vs what needs just one extra item from the shops. Filter by cuisine, dietary needs, or cooking time.",
          alt: "Grid of colourful recipe cards on a tablet screen",
        },
        {
          title: "Cook with confidence",
          description: "Follow our clear step-by-step instructions with photos. Save your favourites to personal collections and share them with friends or family.",
          alt: "Happy person cooking a colourful stir-fry in a modern kitchen",
        },
      ],
    },
    benefits: {
      eyebrow: "Why What2eat",
      headline: "Built for real kitchens",
      testimonialsHeadline: "What cooks are saying",
      items: [
        { title: "Reduce Food Waste", description: "Use what you already have before it goes off. Our users report 30% less food waste on average." },
        { title: "Save Money", description: "Stop buying ingredients you already have. Cook more, spend less on takeaway." },
        { title: "Every Cuisine", description: "Italian, Asian, Mexican, Mediterranean — 200,000+ recipes spanning every culinary tradition." },
        { title: "Dietary Filters", description: "Vegan, gluten-free, keto, dairy-free — filter to match your lifestyle instantly." },
        { title: "Time-Based Search", description: "Filter by cooking time. Got 15 minutes? We'll find something perfect." },
        { title: "Works Everywhere", description: "Web, iOS, and Android. Your ingredient list syncs across all your devices." },
      ],
      testimonials: [
        { quote: "I used to throw away so much food every week. Since using What2eat, I've cut my grocery bill by almost £40 a month. It's brilliant.", role: "Home Cook" },
        { quote: "The matching algorithm is scary good. It always finds something I actually want to eat with whatever random stuff is in my fridge.", role: "Meal Prep Enthusiast" },
        { quote: "Two kids, a hectic schedule, and a picky eater — What2eat makes dinnertime so much less stressful. I recommend it to every parent.", role: "Busy Parent" },
      ],
    },
    pricing: {
      eyebrow: "Simple Pricing",
      headline: "Start free, upgrade when ready",
      subheadline: "No credit card required. Cancel anytime. 14-day free trial on Premium.",
      mostPopular: "Most Popular",
      plans: [
        {
          name: "Free",
          period: "forever",
          description: "Perfect for casual home cooks getting started.",
          cta: "Get Started Free",
          features: ["Up to 10 saved ingredients", "50 recipe matches per day", "Basic dietary filters", "Mobile app access"],
          missing: ["Unlimited saved ingredients", "Premium recipe collections", "Nutritional tracking", "Priority support"],
        },
        {
          name: "Premium",
          period: "per month",
          description: "For serious home cooks who want the full experience.",
          cta: "Start Premium Free",
          features: ["Unlimited saved ingredients", "Unlimited recipe matches", "All dietary & cuisine filters", "Nutritional info & tracking", "Premium recipe collections", "Priority email support"],
          missing: [],
        },
      ],
    },
    videoBanner: {
      eyebrow: "See It in Action",
      headline: "Don't know what to eat? Take a photo of your fridge!",
      body: "Get personalized recipes based on the products in your fridge. Save time, money and reduce food waste with AI technology.",
      cta: "Start Cooking Free",
    },
    ctaBanner: {
      headline: "Stop wasting food. Start cooking smarter.",
      body: "Join 50,000+ home cooks who use What2eat every day to make the most of what they have.",
      ctaPrimary: "Get Started — It's Free",
      ctaSecondary: "Download the App",
    },
    footer: {
      copyright: "All rights reserved.",
      groups: [
        {
          heading: "Product",
          links: [{ label: "Features" }, { label: "How It Works" }, { label: "Pricing" }, { label: "Download App" }],
        },
        {
          heading: "Company",
          links: [{ label: "About Us" }, { label: "Blog" }, { label: "Careers" }, { label: "Press" }],
        },
        {
          heading: "Support",
          links: [{ label: "Help Centre" }, { label: "Contact Us" }, { label: "Status" }],
        },
        {
          heading: "Legal",
          links: [{ label: "Privacy Policy" }, { label: "Terms of Service" }, { label: "Cookie Policy" }],
        },
      ],
    },
  },

  ru: {
    nav: {
      features: "Возможности",
      howItWorks: "Как это работает",
      pricing: "Цены",
      logIn: "Войти",
      getStarted: "Начать бесплатно",
    },
    hero: {
      eyebrow: "Поиск рецептов",
      headline1: "Не знаешь что поесть?",
      headline2: "Сфотографируй холодильник!",
      body: "Получай персональные рецепты на основе продуктов в твоем холодильнике. Экономь время, деньги и сокращай отходы еды с помощью AI-технологий.",
      ctaPrimary: "Начать готовить бесплатно",
      ctaSecondary: "Скачать приложение",
      trustText: "домашних поваров уже готовят умнее",
    },
    proofBar: {
      activeCooks: "Активных поваров",
      recipesMatched: "Подобрано рецептов",
      lessFoodWaste: "Меньше пищевых отходов",
      appStoreRating: "Рейтинг в App Store",
    },
    features: {
      eyebrow: "Как это работает",
      headline: "Три шага до ужина",
      subheadline: "От пустого холодильника до вкусного блюда — быстрее, чем заказывать еду.",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Введите ингредиенты",
          description: "Укажите всё, что есть в холодильнике, кладовой или морозилке. Умное автодополнение ускоряет ввод — 10 ингредиентов менее чем за минуту.",
        },
        {
          title: "Мы подберём рецепты",
          description: "Наш алгоритм ищет по 200 000+ рецептам и ранжирует их по степени соответствия вашим продуктам. Показываются полные и частичные совпадения.",
        },
        {
          title: "Готовьте и наслаждайтесь",
          description: "Пошаговые инструкции, информация о пищевой ценности и список покупок для недостающих продуктов. Сохраняйте любимые рецепты и создавайте личную кулинарную книгу.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Подробнее",
      headline: "Смотрите What2eat в действии",
      steps: [
        {
          title: "Отсканируйте или введите ингредиенты",
          description: "Откройте приложение или сайт и добавьте то, что у вас есть. Используйте сканер штрихкодов для быстрого добавления продуктов или вводите их вручную. Мы поддерживаем тысячи ингредиентов из любых кухонь мира.",
          alt: "Человек вводит ингредиенты в приложение на телефоне на светлой кухне",
        },
        {
          title: "Просматривайте персональные рецепты",
          description: "Мы ранжируем рецепты по проценту совпадения, чтобы вы всегда знали, что можно приготовить прямо сейчас, а что требует одного дополнительного ингредиента. Фильтруйте по кухне, диете или времени приготовления.",
          alt: "Сетка красочных карточек рецептов на экране планшета",
        },
        {
          title: "Готовьте уверенно",
          description: "Следуйте нашим понятным пошаговым инструкциям с фотографиями. Сохраняйте любимые рецепты в личные коллекции и делитесь ими с друзьями или семьёй.",
          alt: "Счастливый человек готовит красочное жаркое на современной кухне",
        },
      ],
    },
    benefits: {
      eyebrow: "Почему What2eat",
      headline: "Создан для настоящих кухонь",
      testimonialsHeadline: "Что говорят пользователи",
      items: [
        { title: "Меньше пищевых отходов", description: "Используйте то, что уже есть, прежде чем оно испортится. Наши пользователи отмечают в среднем на 30% меньше пищевых отходов." },
        { title: "Экономьте деньги", description: "Перестаньте покупать ингредиенты, которые уже есть. Готовьте больше, тратьте меньше на доставку." },
        { title: "Все кухни мира", description: "Итальянская, азиатская, мексиканская, средиземноморская — 200 000+ рецептов из всех кулинарных традиций." },
        { title: "Диетические фильтры", description: "Веганское, без глютена, кето, без лактозы — мгновенно фильтруйте по своему образу жизни." },
        { title: "Поиск по времени", description: "Фильтруйте по времени приготовления. Есть 15 минут? Мы найдём что-нибудь идеальное." },
        { title: "Работает везде", description: "Веб, iOS и Android. Ваш список ингредиентов синхронизируется на всех устройствах." },
      ],
      testimonials: [
        { quote: "Раньше я каждую неделю выбрасывала так много еды. С тех пор как я использую What2eat, мои расходы на продукты сократились почти на 3 500 ₽ в месяц. Это потрясающе.", role: "Домашний повар" },
        { quote: "Алгоритм подбора пугающе точен. Он всегда находит что-то, что я действительно хочу съесть из того, что случайно лежит в холодильнике.", role: "Любитель meal prep" },
        { quote: "Двое детей, безумный график и привереда за столом — What2eat делает ужин намного менее стрессовым. Я рекомендую это каждому родителю.", role: "Занятой родитель" },
      ],
    },
    pricing: {
      eyebrow: "Простые цены",
      headline: "Начните бесплатно, обновитесь когда будете готовы",
      subheadline: "Карта не нужна. Отмена в любой момент. 14-дневный пробный период Premium.",
      mostPopular: "Популярный выбор",
      plans: [
        {
          name: "Бесплатный",
          period: "навсегда",
          description: "Идеально для начинающих домашних поваров.",
          cta: "Начать бесплатно",
          features: ["До 10 сохранённых ингредиентов", "50 подборок рецептов в день", "Базовые диетические фильтры", "Доступ к мобильному приложению"],
          missing: ["Неограниченные ингредиенты", "Коллекции премиум-рецептов", "Отслеживание питательных веществ", "Приоритетная поддержка"],
        },
        {
          name: "Премиум",
          period: "в месяц",
          description: "Для серьёзных домашних поваров, желающих полного опыта.",
          cta: "Попробовать Premium бесплатно",
          features: ["Неограниченные ингредиенты", "Неограниченные подборки рецептов", "Все диетические и кулинарные фильтры", "Информация о питательной ценности", "Коллекции премиум-рецептов", "Приоритетная поддержка по email"],
          missing: [],
        },
      ],
    },
    videoBanner: {
      eyebrow: "Смотрите в действии",
      headline: "Не знаешь что поесть? Сфотографируй холодильник!",
      body: "Получай персональные рецепты на основе продуктов в твоем холодильнике. Экономь время, деньги и сокращай отходы еды с помощью AI-технологий.",
      cta: "Начать бесплатно",
    },
    ctaBanner: {
      headline: "Перестаньте выбрасывать еду. Начните готовить умнее.",
      body: "Присоединяйтесь к 50 000+ домашних поваров, которые используют What2eat каждый день, чтобы максимально использовать то, что у них есть.",
      ctaPrimary: "Начать — это бесплатно",
      ctaSecondary: "Скачать приложение",
    },
    footer: {
      copyright: "Все права защищены.",
      groups: [
        {
          heading: "Продукт",
          links: [{ label: "Возможности" }, { label: "Как это работает" }, { label: "Цены" }, { label: "Скачать приложение" }],
        },
        {
          heading: "Компания",
          links: [{ label: "О нас" }, { label: "Блог" }, { label: "Вакансии" }, { label: "Пресса" }],
        },
        {
          heading: "Поддержка",
          links: [{ label: "Справочный центр" }, { label: "Связаться с нами" }, { label: "Статус" }],
        },
        {
          heading: "Юридическое",
          links: [{ label: "Политика конфиденциальности" }, { label: "Условия использования" }, { label: "Политика Cookie" }],
        },
      ],
    },
  },
};
