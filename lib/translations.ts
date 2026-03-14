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
    tagline: string;
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
    subtitle: string;
    tryAppCta: string;
    githubLink: string;
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
    billing: { monthly: string; yearly: string; save: string };
    plans: {
      name: string;
      monthlyPrice: string;
      yearlyPrice: string;
      periodMonthly: string;
      periodYearly: string;
      description: string;
      cta: string;
      features: string[];
      missing: string[];
    }[];
  };
  tinderBanner: {
    slogan: string;
    cta: string;
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
    brandTagline: string;
    support: { heading: string; email: string; placeholder: string; send: string };
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
      eyebrow: "AI Meal Planner",
      tagline: "Snap your fridge — get recipes and a weekly meal plan.",
      body: "AI detects your ingredients from a single photo. Swipe through recipe cards to pick what you like. Then plan your week and get a smart shopping list in one tap.",
      ctaPrimary: "Try It Free",
      ctaSecondary: "Download the App",
      trustText: "Free to try — no credit card needed",
    },
    proofBar: {
      activeCooks: "Recipes",
      recipesMatched: "Cuisines",
      lessFoodWaste: "AI Features",
      appStoreRating: "Free to Start",
    },
    features: {
      eyebrow: "How It Works",
      headline: "Three steps to dinner",
      subheadline: "From empty fridge to meal plan in under a minute.",
      stepLabel: "Step",
      steps: [
        {
          title: "Snap Your Fridge",
          description: "AI detects all ingredients from a single photo. Manual selection also available with category tabs.",
        },
        {
          title: "Swipe to Choose",
          description: "Browse recipe cards like Tinder — swipe right to keep, left to skip. Personalised selection at the end.",
        },
        {
          title: "Plan Your Week",
          description: "Add liked dishes to the weekly planner and get a smart shopping list in one tap.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Deep Dive",
      headline: "See what2eat in action",
      subtitle: "Meal planning from your ingredients and fridge photo — try the live app below.",
      tryAppCta: "Try the app",
      githubLink: "Source code",
      steps: [
        {
          title: "Snap Your Fridge or Pick Ingredients",
          description: "Tap the big blue button and photograph your fridge — the AI detects ingredients automatically. Or choose ingredients manually by category: meat, grains, vegetables, dairy, spices.",
          alt: "App screen: camera or ingredient list from what2eat",
        },
        {
          title: "Swipe Recipe Cards & Find Dishes",
          description: "Get personalised dish suggestions. Swipe through recipe cards, use filters: vegetarian, vegan, budget. Tap «Find dishes» or «Random» when you can't decide.",
          alt: "App screen: recipe cards and filters in what2eat",
        },
        {
          title: "Plan Meals & Shopping List",
          description: "Add liked dishes to your plan. The app builds a shopping list with only what you're missing — no duplicate buys.",
          alt: "App screen: weekly planner and shopping list in what2eat",
        },
      ],
    },
    benefits: {
      eyebrow: "Why what2eat",
      headline: "Built for real kitchens",
      testimonialsHeadline: "What cooks are saying",
      items: [
        { title: "AI Photo Recognition", description: "Point your camera at the fridge and let AI detect all ingredients instantly. No typing needed." },
        { title: "Swipe to Decide", description: "Browse recipe cards like Tinder. Swipe right on what looks good, left on what doesn't fit." },
        { title: "Weekly Meal Planner", description: "Schedule meals for every day of the week and keep the whole family on the same page." },
        { title: "Smart Shopping List", description: "The app knows what you have and adds only what's missing for the week's meal plan." },
        { title: "Recipe Randomizer", description: "Can't decide? Pick cuisine, meal type, cooking time, or complexity and let the app choose." },
        { title: "Free Core Features", description: "Manual ingredient selection, 10 swipes/day, and AI photo (1/day) are completely free. No card needed." },
      ],
      testimonials: [
        { quote: "I snap my fridge and the app finds the ingredients and suggests dishes. Dinner is planned in a minute.", role: "Home Cook" },
        { quote: "The swipe mechanic is brilliant. I browse recipe cards like Tinder and at the end I know exactly what I want to cook.", role: "Cooking Enthusiast" },
        { quote: "The weekly planner saves me so much time. The shopping list builds itself — I buy exactly what I need and nothing more.", role: "Busy Parent" },
      ],
    },
    pricing: {
      eyebrow: "Flexible Pricing",
      headline: "Start free, upgrade when ready",
      subheadline: "No credit card required. Cancel anytime.",
      mostPopular: "Most Popular",
      billing: { monthly: "Monthly", yearly: "Yearly", save: "Save 33%" },
      plans: [
        {
          name: "Free",
          monthlyPrice: "$0",
          yearlyPrice: "$0",
          periodMonthly: "forever",
          periodYearly: "forever",
          description: "Perfect for casual home cooks getting started.",
          cta: "Get Started Free",
          features: [
            "Unlimited manual ingredient selection",
            "Basic recipe search & filtering",
            "Vegetarian filter",
            "Recipe viewing & step-by-step instructions",
            "10 swipes per day in recipe deck",
            "Session-based shopping list",
            "AI photo recognition: 1 per day",
            "Randomizer: cuisine & dish type",
          ],
          missing: [
            "Unlimited swipes",
            "Unlimited AI photo recognition",
            "AI calorie estimation from photos",
            "AI dish suggestions",
            "Advanced randomizer (time, complexity, dietary)",
            "Vegan & budget-optimized filters",
            "Weekly meal planner",
            "Smart shopping list from meal plan",
          ],
        },
        {
          name: "Premium",
          monthlyPrice: "$2.99",
          yearlyPrice: "$23.99",
          periodMonthly: "per month",
          periodYearly: "per year",
          description: "For serious home cooks who want the full experience.",
          cta: "Get Premium",
          features: [
            "Unlimited manual ingredient selection",
            "Basic recipe search & filtering",
            "Vegetarian filter",
            "Recipe viewing & step-by-step instructions",
            "Unlimited swipes in recipe deck",
            "Session-based shopping list",
            "Unlimited AI photo recognition",
            "AI calorie estimation from photos",
            "AI dish suggestions",
            "Advanced randomizer (time, complexity, dietary)",
            "Vegan & budget-optimized filters",
            "Weekly meal planner",
            "Smart shopping list from meal plan",
          ],
          missing: [],
        },
      ],
    },
    tinderBanner: {
      slogan: "Swipe recipes like Tinder!\nwhat2eat — your food match!",
      cta: "Find My Match",
    },
    videoBanner: {
      eyebrow: "See It in Action",
      headline: "Don't know what to eat? Take a photo of your fridge!",
      body: "Get personalized recipes based on the products in your fridge. Save time, money and reduce food waste with AI technology.",
      cta: "Start Cooking Free",
    },
    ctaBanner: {
      headline: "Know what's for dinner tonight.",
      body: "Snap your fridge, swipe the recipes you like, plan the week — done.",
      ctaPrimary: "Start Free — No Card Needed",
      ctaSecondary: "Download the App",
    },
    footer: {
      copyright: "All rights reserved. · AI Meal Planner",
      brandTagline: "AI-powered meal planning — snap your fridge, swipe recipes, plan your week.",
      support: {
        heading: "Support",
        email: "support@w2e.com",
        placeholder: "Your message...",
        send: "Send",
      },
      groups: [
        {
          heading: "Product",
          links: [{ label: "Features" }, { label: "How It Works" }, { label: "Pricing" }, { label: "Download App" }],
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
      eyebrow: "ИИ-планировщик питания",
      tagline: "Сфотографируй холодильник — получи рецепты и план питания на неделю.",
      body: "ИИ находит ингредиенты по одному фото. Свайпай карточки рецептов и выбирай понравившиеся. Потом планируй неделю и получай умный список покупок в один тап.",
      ctaPrimary: "Попробовать бесплатно",
      ctaSecondary: "Скачать приложение",
      trustText: "Бесплатно — без карты",
    },
    proofBar: {
      activeCooks: "Рецептов",
      recipesMatched: "Кухонь мира",
      lessFoodWaste: "ИИ-функции",
      appStoreRating: "Бесплатный старт",
    },
    features: {
      eyebrow: "Как это работает",
      headline: "Три шага до ужина",
      subheadline: "От пустого холодильника до плана питания — меньше минуты.",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Сфотографируй холодильник",
          description: "ИИ находит все ингредиенты по одному фото. Также доступен ручной выбор с вкладками по категориям.",
        },
        {
          title: "Свайпай рецепты",
          description: "Листай карточки рецептов как в Tinder — свайп вправо чтобы сохранить, влево чтобы пропустить. Персональная подборка в конце.",
        },
        {
          title: "Планируй неделю",
          description: "Добавляй понравившиеся блюда в планировщик и получай умный список покупок в один тап.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Подробнее",
      headline: "Смотрите what2eat в действии",
      subtitle: "ЧтоЕсть — планирование приёмов пищи по ингредиентам и фото холодильника.",
      tryAppCta: "Попробовать приложение",
      githubLink: "Исходный код",
      steps: [
        {
          title: "Сфоткай холодильник или выбери ингредиенты",
          description: "Нажми на большую синюю кнопку и сфотографируй продукты — ИИ сам определит ингредиенты. Или выбери ингредиенты вручную: мясо, крупы, овощи, молочное, специи.",
          alt: "Экран приложения: камера или список ингредиентов what2eat",
        },
        {
          title: "Свайпай карточки и находи блюда",
          description: "Получай подборку блюд под свои продукты. Листай карточки рецептов, ставь фильтры: вегетарианское, веган, бюджет. Кнопки «Найти блюда» и «Случайное» — когда не можешь определиться.",
          alt: "Экран приложения: карточки рецептов и фильтры what2eat",
        },
        {
          title: "Планируй приёмы пищи и список покупок",
          description: "Добавляй понравившиеся блюда в план. Приложение соберёт список покупок — только то, чего ещё нет дома.",
          alt: "Экран приложения: планировщик и список покупок what2eat",
        },
      ],
    },
    benefits: {
      eyebrow: "Почему what2eat",
      headline: "Создан для настоящих кухонь",
      testimonialsHeadline: "Что говорят пользователи",
      items: [
        { title: "Распознавание фото ИИ", description: "Направьте камеру на холодильник — ИИ мгновенно найдёт все ингредиенты. Никакого ввода вручную." },
        { title: "Свайп для выбора", description: "Листайте карточки рецептов как в Tinder. Свайп вправо на то, что нравится, влево — на то, что не подходит." },
        { title: "Планировщик питания на неделю", description: "Составляйте меню на каждый день недели и держите всю семью в курсе." },
        { title: "Умный список покупок", description: "Приложение знает, что у вас есть, и добавляет только то, чего не хватает для планового меню." },
        { title: "Рандомайзер рецептов", description: "Не можете выбрать? Укажите кухню, тип блюда, время приготовления или сложность — приложение выберет за вас." },
        { title: "Бесплатные основные функции", description: "Ручной выбор ингредиентов, 10 свайпов в день и распознавание фото ИИ (1 раз в день) — полностью бесплатно. Карта не нужна." },
      ],
      testimonials: [
        { quote: "Снимаю холодильник — приложение само находит продукты и предлагает блюда. Ужин планируется за минуту.", role: "Домашний повар" },
        { quote: "Свайп-механика — просто огонь. Листаю карточки с рецептами как в Tinder, в конце вижу что хочу приготовить.", role: "Любитель готовки" },
        { quote: "Планировщик на неделю экономит кучу времени. Список покупок формируется автоматически — беру ровно то, что нужно.", role: "Занятой родитель" },
      ],
    },
    pricing: {
      eyebrow: "Гибкие тарифы",
      headline: "Начните бесплатно, обновитесь когда будете готовы",
      subheadline: "Карта не нужна. Отмена в любой момент.",
      mostPopular: "Популярный выбор",
      billing: { monthly: "По месяцам", yearly: "По годам", save: "Скидка 33%" },
      plans: [
        {
          name: "Бесплатный",
          monthlyPrice: "$0",
          yearlyPrice: "$0",
          periodMonthly: "навсегда",
          periodYearly: "навсегда",
          description: "Идеально для начинающих домашних поваров.",
          cta: "Начать бесплатно",
          features: [
            "Неограниченный ручной выбор ингредиентов",
            "Базовый поиск и фильтрация рецептов",
            "Фильтр «вегетарианское»",
            "Просмотр рецептов и пошаговые инструкции",
            "10 свайпов в день в колоде рецептов",
            "Список покупок на сессию",
            "Распознавание фото ИИ: 1 раз в день",
            "Рандомайзер: кухня и тип блюда",
          ],
          missing: [
            "Неограниченные свайпы",
            "Неограниченное распознавание фото ИИ",
            "Подсчёт калорий ИИ по фото",
            "Предложения блюд от ИИ",
            "Расширенный рандомайзер (время, сложность, диета)",
            "Фильтры «веганское» и «экономичное»",
            "Планировщик питания на неделю",
            "Умный список покупок из плана питания",
          ],
        },
        {
          name: "Премиум",
          monthlyPrice: "$2.99",
          yearlyPrice: "$23.99",
          periodMonthly: "в месяц",
          periodYearly: "в год",
          description: "Для серьёзных домашних поваров, желающих полного опыта.",
          cta: "Получить Premium",
          features: [
            "Неограниченный ручной выбор ингредиентов",
            "Базовый поиск и фильтрация рецептов",
            "Фильтр «вегетарианское»",
            "Просмотр рецептов и пошаговые инструкции",
            "Неограниченные свайпы в колоде рецептов",
            "Список покупок на сессию",
            "Неограниченное распознавание фото ИИ",
            "Подсчёт калорий ИИ по фото",
            "Предложения блюд от ИИ",
            "Расширенный рандомайзер (время, сложность, диета)",
            "Фильтры «веганское» и «экономичное»",
            "Планировщик питания на неделю",
            "Умный список покупок из плана питания",
          ],
          missing: [],
        },
      ],
    },
    tinderBanner: {
      slogan: "Свайпай рецепты, как в Tinder!\nwhat2eat — твой матч с едой!",
      cta: "Найти мой матч",
    },
    videoBanner: {
      eyebrow: "Смотрите в действии",
      headline: "Не знаешь что поесть? Сфотографируй холодильник!",
      body: "Получай персональные рецепты на основе продуктов в твоем холодильнике. Экономь время, деньги и сокращай отходы еды с помощью AI-технологий.",
      cta: "Начать бесплатно",
    },
    ctaBanner: {
      headline: "Знай, что приготовить сегодня.",
      body: "Сфотографируй холодильник, свайпни рецепты, запланируй неделю — готово.",
      ctaPrimary: "Начать бесплатно — без карты",
      ctaSecondary: "Скачать приложение",
    },
    footer: {
      copyright: "Все права защищены. · ИИ-планировщик питания",
      brandTagline: "ИИ-планировщик питания — фото холодильника, свайп рецептов, план на неделю.",
      support: {
        heading: "Поддержка",
        email: "support@w2e.com",
        placeholder: "Ваше сообщение...",
        send: "Отправить",
      },
      groups: [
        {
          heading: "Продукт",
          links: [{ label: "Возможности" }, { label: "Как это работает" }, { label: "Цены" }, { label: "Скачать приложение" }],
        },
        {
          heading: "Юридическое",
          links: [{ label: "Политика конфиденциальности" }, { label: "Условия использования" }, { label: "Политика Cookie" }],
        },
      ],
    },
  },
};
