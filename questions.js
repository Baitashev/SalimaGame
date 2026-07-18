export const categories = [
  {
    "id": "love",
    "title": "Любовь и чувства",
    "emoji": "💗",
    "description": "О том, что мы чувствуем и почему выбираем друг друга.",
    "moods": [
      "sad",
      "close"
    ],
    "questionCount": 13
  },
  {
    "id": "memories",
    "title": "Наши воспоминания",
    "emoji": "📸",
    "description": "Моменты, к которым хочется возвращаться снова.",
    "moods": [
      "sad",
      "close"
    ],
    "questionCount": 12
  },
  {
    "id": "everyday",
    "title": "Повседневность",
    "emoji": "☕",
    "description": "Маленькие привычки, уют и обычные счастливые дни.",
    "moods": [
      "calm"
    ],
    "questionCount": 13
  },
  {
    "id": "care",
    "title": "Забота и поддержка",
    "emoji": "🫂",
    "description": "Как быть рядом бережно, особенно в сложные дни.",
    "moods": [
      "sad",
      "close"
    ],
    "questionCount": 13
  },
  {
    "id": "dates",
    "title": "Свидания и романтика",
    "emoji": "🥂",
    "description": "Идеи для красивых вечеров, сюрпризов и нежности.",
    "moods": [
      "bored",
      "close"
    ],
    "questionCount": 12
  },
  {
    "id": "future",
    "title": "Будущее и мечты",
    "emoji": "🌅",
    "description": "Какими мы видим дом, планы и нашу жизнь дальше.",
    "moods": [
      "close",
      "calm"
    ],
    "questionCount": 13
  },
  {
    "id": "fun",
    "title": "Весёлые вопросы",
    "emoji": "😄",
    "description": "Смешные сценарии, странные выборы и немного безумия.",
    "moods": [
      "bored"
    ],
    "questionCount": 13
  },
  {
    "id": "know",
    "title": "Узнаём друг друга",
    "emoji": "🔎",
    "description": "То, о чём мы могли ещё не успеть поговорить.",
    "moods": [
      "bored",
      "close"
    ],
    "questionCount": 13
  },
  {
    "id": "trust",
    "title": "Доверие и честность",
    "emoji": "🤝",
    "description": "О безопасности, искренности и личных границах.",
    "moods": [
      "close",
      "calm"
    ],
    "questionCount": 12
  },
  {
    "id": "conflicts",
    "title": "Ссоры и примирение",
    "emoji": "🌿",
    "description": "Как спорить бережнее и быстрее возвращаться друг к другу.",
    "moods": [
      "calm"
    ],
    "questionCount": 12
  },
  {
    "id": "travel",
    "title": "Путешествия",
    "emoji": "✈️",
    "description": "Маршруты мечты, приключения и спонтанные поездки.",
    "moods": [
      "bored"
    ],
    "questionCount": 12
  },
  {
    "id": "home",
    "title": "Дом и совместная жизнь",
    "emoji": "🏡",
    "description": "Уют, быт, традиции и пространство для двоих.",
    "moods": [
      "calm",
      "close"
    ],
    "questionCount": 13
  },
  {
    "id": "intimacy",
    "title": "Интим и близость",
    "emoji": "🌙",
    "description": "Нежно и без неловкости: про доверие, прикосновения и границы.",
    "moods": [
      "close"
    ],
    "questionCount": 13
  },
  {
    "id": "surprises",
    "title": "Желания и сюрпризы",
    "emoji": "🎁",
    "description": "Как радовать тебя именно так, как тебе нравится.",
    "moods": [
      "bored",
      "close"
    ],
    "questionCount": 12
  },
  {
    "id": "warm",
    "title": "Тёплые послания",
    "emoji": "💌",
    "description": "Слова, которые можно перечитывать, когда грустно или одиноко.",
    "moods": [
      "sad"
    ],
    "questionCount": 12
  },
  {
    "id": "dilemmas",
    "title": "Быстрые дилеммы",
    "emoji": "⚡",
    "description": "Выбирай быстро — здесь нет времени долго думать.",
    "moods": [
      "bored"
    ],
    "questionCount": 14
  }
];

export const questions = [
  {
    "id": "love_01",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "А ты меня любишь?",
    "type": "runaway",
    "required": true,
    "yesText": "Конечно, люблю ♥",
    "noText": "Нет",
    "hint": "Одна из кнопок сегодня немного стесняется."
  },
  {
    "id": "love_02",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "В какой момент ты впервые почувствовала, что между нами есть что-то особенное?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "love_03",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Что для тебя означает «быть любимой» именно в наших отношениях?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "love_04",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Какие три мои черты ты любишь сильнее всего?",
    "type": "textarea",
    "required": true,
    "placeholder": "1. …\n2. …\n3. …"
  },
  {
    "id": "love_05",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Как тебе больше всего хочется почувствовать мою любовь сегодня?",
    "type": "choice",
    "required": true,
    "options": [
      "Нежные слова",
      "Долгие объятия",
      "Время только вдвоём",
      "Маленький сюрприз"
    ]
  },
  {
    "id": "love_06",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Какая моя фраза всегда согревает тебя?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "love_07",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Что делает наши отношения непохожими на другие?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "love_08",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Насколько любимой ты чувствуешь себя рядом со мной?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Иногда не хватает",
    "maxLabel": "Очень-очень любимой"
  },
  {
    "id": "love_09",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Что мне стоит делать чаще, чтобы ты чувствовала мою любовь без сомнений?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "love_10",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Какая песня могла бы быть нашей песней?",
    "type": "text",
    "required": true,
    "placeholder": "Название или строчка…"
  },
  {
    "id": "love_11",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Какой язык любви тебе сейчас нужнее всего?",
    "type": "choice",
    "required": true,
    "options": [
      "Слова",
      "Прикосновения",
      "Помощь делами",
      "Совместное время"
    ]
  },
  {
    "id": "love_12",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Прикрепи фотографию, на которой особенно чувствуется наша любовь",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "love_13",
    "categoryId": "love",
    "category": "Любовь и чувства",
    "emoji": "💗",
    "title": "Закончи фразу: «Я выбираю тебя, потому что…»",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_01",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Каким было твоё самое первое впечатление обо мне?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_02",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какой наш разговор ты помнишь особенно хорошо?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_03",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какой наш момент был самым смешным?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_04",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какой день со мной ты назвала бы одним из самых счастливых?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_05",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какое место сразу напоминает тебе обо мне?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "memories_06",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какая маленькая деталь из начала наших отношений до сих пор живёт в памяти?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_07",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Прикрепи фото или видео воспоминания, которое хочется сохранить навсегда",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "memories_08",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Как наши отношения изменили тебя в хорошем смысле?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_09",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Когда ты особенно гордилась мной?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_10",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Есть ли наша старая неловкая ситуация, над которой теперь хочется смеяться?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_11",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какой один момент ты хотела бы прожить ещё раз без изменений?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "memories_12",
    "categoryId": "memories",
    "category": "Наши воспоминания",
    "emoji": "📸",
    "title": "Какое воспоминание о нас ты расскажешь кому-нибудь через много лет?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_01",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какой совместный утренний ритуал тебе понравился бы?",
    "type": "choice",
    "required": true,
    "options": [
      "Кофе и разговор",
      "Объятия без телефона",
      "Завтрак вместе",
      "Утренняя прогулка"
    ]
  },
  {
    "id": "everyday_02",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Как мне лучше вести себя, когда ты возвращаешься очень уставшей?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_03",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Как выглядит наш идеальный обычный вечер?",
    "type": "choice",
    "required": true,
    "options": [
      "Фильм и еда",
      "Прогулка и разговор",
      "Каждый занят своим, но рядом",
      "Спонтанная поездка"
    ]
  },
  {
    "id": "everyday_04",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какие домашние дела ты любишь, а какие готова отдать мне навсегда?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_05",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какое блюдо или напиток почти гарантированно улучшит тебе настроение?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "everyday_06",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какое сообщение от меня среди рабочего дня заставило бы тебя улыбнуться?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_07",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Насколько тебе комфортно просто молчать рядом со мной?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Хочется говорить",
    "maxLabel": "Очень уютно молчать"
  },
  {
    "id": "everyday_08",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какая моя повседневная привычка тебя умиляет, а какая немного раздражает?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_09",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какой маленький ежедневный ритуал должен быть только нашим?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "everyday_10",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Что из простых вещей тебе приятнее делать вместе?",
    "type": "choice",
    "required": true,
    "options": [
      "Готовить",
      "Покупать продукты",
      "Убираться под музыку",
      "Гулять без цели"
    ]
  },
  {
    "id": "everyday_11",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какой темп выходных тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Всё распланировать",
      "Решать по настроению",
      "Полдня отдыхать, полдня гулять",
      "Вообще не смотреть на часы"
    ]
  },
  {
    "id": "everyday_12",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Какая маленькая помощь от меня экономит тебе больше всего сил?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "everyday_13",
    "categoryId": "everyday",
    "category": "Повседневность",
    "emoji": "☕",
    "title": "Прикрепи фотографию обычного дня, который почему-то стал тёплым",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "care_01",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Когда тебе грустно, что лучше сделать первым?",
    "type": "choice",
    "required": true,
    "options": [
      "Обнять",
      "Выслушать",
      "Рассмешить",
      "Дать немного тишины"
    ]
  },
  {
    "id": "care_02",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Как я могу понять, что ты расстроена, даже если ты говоришь «всё нормально»?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_03",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Что помогает тебе, когда ты тревожишься?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_04",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Когда ты злишься, тебе нужнее…",
    "type": "choice",
    "required": true,
    "options": [
      "Сразу поговорить",
      "Сначала успокоиться",
      "Получить объятие",
      "Переписываться, а не говорить"
    ]
  },
  {
    "id": "care_05",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Какие слова поддержки тебе неприятны или совсем не помогают?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_06",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Какую твою границу мне особенно важно всегда помнить?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_07",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Какой маленький знак означает: «мне сейчас нужна твоя поддержка»?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "care_08",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Как должно выглядеть хорошее извинение от меня?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_09",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Насколько безопасно тебе делиться со мной сложными чувствами?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Иногда страшно",
    "maxLabel": "Полностью безопасно"
  },
  {
    "id": "care_10",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Как ты относишься к нежности на публике?",
    "type": "choice",
    "required": true,
    "options": [
      "Очень люблю",
      "Немного — да",
      "Только за руку",
      "Лучше только наедине"
    ]
  },
  {
    "id": "care_11",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Какую важную дату или событие мне нельзя забывать?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "care_12",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Что я должен помнить о тебе в самые тяжёлые дни?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "care_13",
    "categoryId": "care",
    "category": "Забота и поддержка",
    "emoji": "🫂",
    "title": "Составь для меня короткую инструкцию: «Как заботиться о Салиме, когда ей плохо»",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dates_01",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Опиши наше идеальное свидание без ограничений по бюджету и расстоянию.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dates_02",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "А теперь придумай идеальное свидание почти без денег.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dates_03",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Какой формат сюрприз-свидания тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Красиво и нарядно",
      "Уютно дома",
      "Активно и необычно",
      "Тихо на природе"
    ]
  },
  {
    "id": "dates_04",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "В чём ты хотела бы увидеть меня на особенно красивом свидании?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "dates_05",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Как устроить идеальное домашнее свидание?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dates_06",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Что выберем для вечерней прогулки?",
    "type": "choice",
    "required": true,
    "options": [
      "Огни города",
      "Тихий парк",
      "Набережная",
      "Крыша с видом"
    ]
  },
  {
    "id": "dates_07",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Какое время года самое романтичное для нас?",
    "type": "choice",
    "required": true,
    "options": [
      "Весна",
      "Лето",
      "Осень",
      "Зима"
    ]
  },
  {
    "id": "dates_08",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Что ценнее на свидании?",
    "type": "choice",
    "required": true,
    "options": [
      "Красивое место",
      "Вкусная еда",
      "Долгий разговор",
      "Неожиданный момент"
    ]
  },
  {
    "id": "dates_09",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Куда ты согласилась бы поехать со мной завтра без долгих сборов?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "dates_10",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Какая песня должна звучать по дороге на наше свидание?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "dates_11",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Какое одно правило сделало бы свидание идеальным? Например: два часа без телефонов.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dates_12",
    "categoryId": "dates",
    "category": "Свидания и романтика",
    "emoji": "🥂",
    "title": "Прикрепи фото места или образа для нашего будущего свидания",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "future_01",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Представь один наш обычный день через пять лет. Что происходит?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_02",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Как выглядит дом, в котором тебе хотелось бы жить со мной?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_03",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Хотела бы ты завести вместе питомца?",
    "type": "choice",
    "required": true,
    "options": [
      "Да, собаку",
      "Да, кошку",
      "Другого питомца",
      "Пока не хочу"
    ]
  },
  {
    "id": "future_04",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Какую страну или город мы обязательно должны увидеть вместе?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "future_05",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Какие семейные или парные традиции ты хотела бы создать?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_06",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Как нам удобнее обсуждать общие деньги?",
    "type": "choice",
    "required": true,
    "options": [
      "Регулярно и подробно",
      "Только крупные траты",
      "Разделять зоны ответственности",
      "Пока не думала"
    ]
  },
  {
    "id": "future_07",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Как я могу поддержать твои профессиональные мечты?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_08",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Какая твоя большая цель должна стать и моей целью поддержки?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_09",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Что обязательно должно попасть в наш совместный список желаний?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_10",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Какими качествами должна обладать наша будущая совместная жизнь?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_11",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Представь нас пожилой парой. Над чем мы всё ещё смеёмся?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "future_12",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Насколько тебе легко мечтать о будущем вместе со мной?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Пока осторожно",
    "maxLabel": "Очень легко"
  },
  {
    "id": "future_13",
    "categoryId": "future",
    "category": "Будущее и мечты",
    "emoji": "🌅",
    "title": "Напиши короткое письмо нам будущим.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "fun_01",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Как назывался бы фильм о наших отношениях?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "fun_02",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Кто из нас чаще забывает, зачем вошёл в комнату?",
    "type": "choice",
    "required": true,
    "options": [
      "Ты 😏",
      "Я 🙈",
      "Оба",
      "Мы слишком идеальны"
    ]
  },
  {
    "id": "fun_03",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какое смешное прозвище ты могла бы мне дать?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "fun_04",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какую суперсилу выбрать для нашей пары?",
    "type": "choice",
    "required": true,
    "options": [
      "Телепортация",
      "Чтение мыслей",
      "Остановка времени",
      "Бесконечные деньги на поездки"
    ]
  },
  {
    "id": "fun_05",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Кто лучше справится во время зомби-апокалипсиса?",
    "type": "choice",
    "required": true,
    "options": [
      "Ты",
      "Я",
      "Только вместе",
      "Мы спрячемся первыми"
    ]
  },
  {
    "id": "fun_06",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какое самое странное сочетание еды ты готова попробовать со мной?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "fun_07",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какой смешной челлендж для пары нам стоит пройти?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "fun_08",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какой мем лучше всего описывает наши отношения?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "fun_09",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Кто первым начнёт танцевать на кухне?",
    "type": "choice",
    "required": true,
    "options": [
      "Ты",
      "Я",
      "Оба одновременно",
      "Никто, но будем петь"
    ]
  },
  {
    "id": "fun_10",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Какая моя странная привычка кажется тебе милой?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "fun_11",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Если бы мы участвовали в шоу, что это было бы?",
    "type": "choice",
    "required": true,
    "options": [
      "Путешествия",
      "Кулинария",
      "Выживание",
      "Интеллектуальная игра"
    ]
  },
  {
    "id": "fun_12",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Придумай самый нелепый сценарий нашего следующего свидания.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "fun_13",
    "categoryId": "fun",
    "category": "Весёлые вопросы",
    "emoji": "😄",
    "title": "Прикрепи смешное фото, видео или мем, который напоминает о нас",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "know_01",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Какой твой талант я пока недооцениваю?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "know_02",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Какая еда мгновенно возвращает тебя в детство?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "know_03",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Как выглядит твой идеальный день наедине с собой?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "know_04",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Что сильнее всего мотивирует тебя не сдаваться?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "know_05",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Какой страх тебе хотелось бы однажды преодолеть?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "know_06",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Каким своим поступком ты особенно гордишься?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "know_07",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Какой язык любви тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Слова",
      "Подарки",
      "Помощь",
      "Время и прикосновения"
    ]
  },
  {
    "id": "know_08",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Что люди часто понимают о тебе неправильно?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "know_09",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "О чём ты мечтала в детстве?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "know_10",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Как ты чаще принимаешь важные решения?",
    "type": "choice",
    "required": true,
    "options": [
      "Логикой",
      "Сердцем",
      "Советуюсь",
      "Долго взвешиваю"
    ]
  },
  {
    "id": "know_11",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Что лучше всего восстанавливает твои силы?",
    "type": "choice",
    "required": true,
    "options": [
      "Сон",
      "Общение",
      "Одиночество",
      "Природа"
    ]
  },
  {
    "id": "know_12",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "На какую тему ты можешь говорить часами?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "know_13",
    "categoryId": "know",
    "category": "Узнаём друг друга",
    "emoji": "🔎",
    "title": "Какой вопрос ты давно хотела задать мне, но откладывала?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_01",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Что для тебя означает настоящее доверие в отношениях?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_02",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Какая степень личного пространства нужна тебе даже в очень близких отношениях?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_03",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "В каких ситуациях говорить правду бывает особенно трудно?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_04",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Какие границы помогают тебе не чувствовать ревность?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_05",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Как ты относишься к личным перепискам и телефонам?",
    "type": "choice",
    "required": true,
    "options": [
      "Полная приватность",
      "Можно показать по просьбе",
      "Никаких секретов",
      "Нужны договорённости"
    ]
  },
  {
    "id": "trust_06",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Есть ли вещи, которые важно рассказать партнёру, даже если страшно?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_07",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Какой поступок лучше всего показывает надёжность человека?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "trust_08",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Как правильно исправлять ситуацию после нарушенного обещания?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_09",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "О чём тебе особенно важно говорить без страха осуждения?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_10",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Насколько сильно ты доверяешь мне сейчас?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Нужно ещё расти",
    "maxLabel": "Доверяю полностью"
  },
  {
    "id": "trust_11",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "Что я могу сделать, чтобы укрепить твоё доверие ещё сильнее?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "trust_12",
    "categoryId": "trust",
    "category": "Доверие и честность",
    "emoji": "🤝",
    "title": "В чём ты никогда не хотела бы сомневаться в наших отношениях?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_01",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Что чаще всего заставляет тебя закрываться во время спора?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_02",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Когда возникает конфликт, что лучше?",
    "type": "choice",
    "required": true,
    "options": [
      "Решить сразу",
      "Взять паузу",
      "Сначала обняться",
      "Написать мысли сообщением"
    ]
  },
  {
    "id": "conflicts_03",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Какой тон или фразы во время ссоры для тебя недопустимы?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_04",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Что помогает тебе поверить, что извинение искреннее?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_05",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Сложную тему лучше обсуждать…",
    "type": "choice",
    "required": true,
    "options": [
      "Лично",
      "Голосом",
      "В переписке",
      "Сначала написать, потом поговорить"
    ]
  },
  {
    "id": "conflicts_06",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Какой ритуал примирения мог бы стать нашим?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "conflicts_07",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Какие правила честного спора нам стоит установить?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_08",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Есть ли тема, к которой мы возвращаемся, но пока не решили её до конца?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_09",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Что мне лучше не говорить, даже если я очень зол?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_10",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "В чём тебе было бы легче пойти на компромисс, а в чём — нет?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_11",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Что тебе нужно после тяжёлого разговора, чтобы снова почувствовать близость?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "conflicts_12",
    "categoryId": "conflicts",
    "category": "Ссоры и примирение",
    "emoji": "🌿",
    "title": "Какое обещание мы можем дать друг другу на случай следующей ссоры?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "travel_01",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Куда бы ты улетела со мной завтра утром?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "travel_02",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Что выбираем?",
    "type": "choice",
    "required": true,
    "options": [
      "Море",
      "Горы",
      "Большой город",
      "Тихая деревня"
    ]
  },
  {
    "id": "travel_03",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Как путешествовать приятнее?",
    "type": "choice",
    "required": true,
    "options": [
      "Всё планировать",
      "Оставлять место спонтанности",
      "Ехать без плана",
      "Планируешь ты, я наслаждаюсь"
    ]
  },
  {
    "id": "travel_04",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какая страна кажется тебе самой романтичной?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "travel_05",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какая роль твоя в дорожной поездке?",
    "type": "choice",
    "required": true,
    "options": [
      "Навигатор",
      "DJ",
      "Фотограф",
      "Главный по перекусам"
    ]
  },
  {
    "id": "travel_06",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Где уютнее остановиться?",
    "type": "choice",
    "required": true,
    "options": [
      "Красивый отель",
      "Домик в природе",
      "Квартира в центре",
      "Необычное жильё"
    ]
  },
  {
    "id": "travel_07",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какую местную еду ты хотела бы попробовать вместе?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "travel_08",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Прикрепи фото места, куда ты мечтаешь поехать со мной",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "travel_09",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какой темп отпуска тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Каждый день новое",
      "Чередовать активность и отдых",
      "Максимум отдыха",
      "Решать утром"
    ]
  },
  {
    "id": "travel_10",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какой сувенир мы должны привозить из каждой поездки?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "travel_11",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Что будем делать, если потеряемся в незнакомом городе без интернета?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "travel_12",
    "categoryId": "travel",
    "category": "Путешествия",
    "emoji": "✈️",
    "title": "Какое маленькое приключение можно устроить уже в ближайшие выходные?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_01",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Какой стиль дома тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Светлый минимализм",
      "Тёплый уют",
      "Современный городский",
      "Много цвета и деталей"
    ]
  },
  {
    "id": "home_02",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Где тебе приятнее жить: в центре, тихом районе или ближе к природе?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "home_03",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Как честно и удобно разделить домашние обязанности?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_04",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Как вести общий бюджет?",
    "type": "choice",
    "required": true,
    "options": [
      "Общий полностью",
      "Общий плюс личные деньги",
      "Раздельно",
      "Нужен эксперимент"
    ]
  },
  {
    "id": "home_05",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Кто чаще готовит?",
    "type": "choice",
    "required": true,
    "options": [
      "Ты",
      "Я",
      "По очереди",
      "Заказываем 😄"
    ]
  },
  {
    "id": "home_06",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Как часто тебе хотелось бы приглашать гостей домой?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_07",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Что делать, если у нас разные режимы сна?",
    "type": "choice",
    "required": true,
    "options": [
      "Подстроиться",
      "Не мешать друг другу",
      "Создать общий ритуал",
      "Искать компромисс"
    ]
  },
  {
    "id": "home_08",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Нужно ли каждому своё личное рабочее или тихое место?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_09",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Что обязательно должно быть в нашем доме?",
    "type": "choice",
    "required": true,
    "options": [
      "Много растений",
      "Питомец",
      "Большой диван",
      "Красивая кухня"
    ]
  },
  {
    "id": "home_10",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Как выглядит наше идеальное воскресенье дома?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_11",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Какой уголок дома станет твоим любимым?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "home_12",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Какие три правила сделают совместную жизнь спокойнее?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "home_13",
    "categoryId": "home",
    "category": "Дом и совместная жизнь",
    "emoji": "🏡",
    "title": "Какую первую вещь мы купим в наш общий дом?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "intimacy_01",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Что для тебя означает эмоциональная близость между нами?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_02",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Что помогает тебе чувствовать себя спокойно и уверенно в разговорах об интимной стороне отношений?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_03",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какой темп сближения для тебя комфортнее?",
    "type": "choice",
    "required": true,
    "options": [
      "Очень постепенно",
      "По взаимному настроению",
      "Когда всё заранее обсуждено",
      "Зависит от дня"
    ]
  },
  {
    "id": "intimacy_04",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какие проявления нежности тебе особенно приятны?",
    "type": "choice",
    "required": true,
    "options": [
      "Объятия",
      "Поцелуи",
      "Держаться за руки",
      "Лежать рядом и разговаривать"
    ]
  },
  {
    "id": "intimacy_05",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Как мне лучше проявлять инициативу, чтобы это ощущалось бережно и желанно?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_06",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какая атмосфера помогает тебе расслабиться и почувствовать близость?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_07",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Есть ли границы, о которых нам важно договориться заранее?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_08",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Как удобнее проверять взаимное согласие и комфорт?",
    "type": "choice",
    "required": true,
    "options": [
      "Спросить прямо",
      "Договориться о сигналах",
      "Остановиться при сомнении",
      "Всё перечисленное"
    ]
  },
  {
    "id": "intimacy_09",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какие слова или действия помогают тебе чувствовать себя желанной и любимой?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_10",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Что может заставить тебя почувствовать неловкость, давление или отдаление?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "intimacy_11",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какая нежность после тяжёлого дня тебе ближе?",
    "type": "choice",
    "required": true,
    "options": [
      "Долгие объятия",
      "Массаж плеч",
      "Поцелуй и тишина",
      "Просто полежать рядом"
    ]
  },
  {
    "id": "intimacy_12",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Насколько свободно тебе говорить со мной о желаниях и границах?",
    "type": "scale",
    "required": true,
    "min": 1,
    "max": 10,
    "minLabel": "Пока сложно",
    "maxLabel": "Совсем свободно"
  },
  {
    "id": "intimacy_13",
    "categoryId": "intimacy",
    "category": "Интим и близость",
    "emoji": "🌙",
    "title": "Какое нежное желание о нашей близости ты хотела бы однажды мне рассказать?",
    "type": "textarea",
    "required": true,
    "placeholder": "Можно отвечать настолько подробно, насколько тебе комфортно."
  },
  {
    "id": "surprises_01",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какой маленький подарок без повода тебя искренне порадует?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "surprises_02",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какие цветы тебе приятнее?",
    "type": "choice",
    "required": true,
    "options": [
      "Любимые конкретные",
      "Полевые",
      "Неожиданный букет",
      "Лучше другое внимание"
    ]
  },
  {
    "id": "surprises_03",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какой масштаб сюрприза тебе комфортен?",
    "type": "choice",
    "required": true,
    "options": [
      "Совсем маленький",
      "Красивый вечер",
      "Большое событие",
      "Зависит от повода"
    ]
  },
  {
    "id": "surprises_04",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Что приятнее получить?",
    "type": "choice",
    "required": true,
    "options": [
      "Полезную вещь",
      "Что-то символичное",
      "Впечатление",
      "Письмо от сердца"
    ]
  },
  {
    "id": "surprises_05",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Где спрятать для тебя неожиданную записку?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "surprises_06",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Как выглядит твой идеальный день рождения?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "surprises_07",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какие сюрпризы тебе не нравятся или вызывают стресс?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "surprises_08",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какое впечатление или мастер-класс нам стоит подарить друг другу?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "surprises_09",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какое неожиданное сообщение от меня заставило бы тебя бросить всё и улыбнуться?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "surprises_10",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Прикрепи скриншот вещи, места или идеи, о которой мечтаешь",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "surprises_11",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Хотела бы ты маленький сюрприз каждый месяц?",
    "type": "choice",
    "required": true,
    "options": [
      "Да!",
      "Лучше редко, но метко",
      "Только без расходов",
      "Пусть будет спонтанно"
    ]
  },
  {
    "id": "surprises_12",
    "categoryId": "surprises",
    "category": "Желания и сюрпризы",
    "emoji": "🎁",
    "title": "Какой сюрприз ты сама однажды хотела бы устроить мне?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_01",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Напиши мне сообщение, которое я должен показать тебе, когда тебе грустно.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_02",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "За что ты сейчас собой гордишься, даже если редко об этом говоришь?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_03",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "За что ты благодарна нашим отношениям?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_04",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Что тебе пора простить самой себе?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_05",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Какая маленькая вещь почти всегда заставляет тебя улыбнуться?",
    "type": "text",
    "required": true,
    "placeholder": "Напиши короткий ответ…"
  },
  {
    "id": "warm_06",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Закончи фразу: «Рядом с тобой я чувствую себя дома, когда…»",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_07",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "На что хорошее ты надеешься в ближайшее время?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_08",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Напиши себе один честный и красивый комплимент.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_09",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Оставь письмо себе будущей, которая откроет его в счастливый день.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_10",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Какие слова ты хотела бы слышать от меня перед сном?",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "warm_11",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Прикрепи голосовое, фото или файл, который поднимает тебе настроение",
    "type": "file",
    "required": false,
    "accept": "image/*,video/*,application/pdf",
    "multiple": true
  },
  {
    "id": "warm_12",
    "categoryId": "warm",
    "category": "Тёплые послания",
    "emoji": "💌",
    "title": "Оставь мне самое тёплое послание, которое я смогу перечитывать, когда соскучусь.",
    "type": "textarea",
    "required": true,
    "placeholder": "Напиши то, что чувствуешь…"
  },
  {
    "id": "dilemmas_01",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Объятия или поцелуи?",
    "type": "choice",
    "required": true,
    "options": [
      "Объятия",
      "Поцелуи",
      "Сначала одно, потом другое",
      "Не заставляй выбирать"
    ]
  },
  {
    "id": "dilemmas_02",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Рассвет или закат?",
    "type": "choice",
    "required": true,
    "options": [
      "Рассвет",
      "Закат",
      "Ночная прогулка",
      "Всё вместе"
    ]
  },
  {
    "id": "dilemmas_03",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Море или горы?",
    "type": "choice",
    "required": true,
    "options": [
      "Море",
      "Горы",
      "Город",
      "Главное — вместе"
    ]
  },
  {
    "id": "dilemmas_04",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Письмо или голосовое?",
    "type": "choice",
    "required": true,
    "options": [
      "Письмо",
      "Голосовое",
      "Видеосообщение",
      "Личная встреча"
    ]
  },
  {
    "id": "dilemmas_05",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Сюрприз или заранее согласованный план?",
    "type": "choice",
    "required": true,
    "options": [
      "Сюрприз",
      "План",
      "Небольшая тайна внутри плана",
      "По настроению"
    ]
  },
  {
    "id": "dilemmas_06",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Ужин дома или ресторан?",
    "type": "choice",
    "required": true,
    "options": [
      "Дома",
      "Ресторан",
      "Пикник",
      "Уличная еда"
    ]
  },
  {
    "id": "dilemmas_07",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Сериал на весь вечер или один хороший фильм?",
    "type": "choice",
    "required": true,
    "options": [
      "Сериал",
      "Фильм",
      "YouTube",
      "Разговор без экрана"
    ]
  },
  {
    "id": "dilemmas_08",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Большой праздник или тихий вечер вдвоём?",
    "type": "choice",
    "required": true,
    "options": [
      "Праздник",
      "Вечер вдвоём",
      "Сначала праздник, потом вдвоём",
      "Зависит от повода"
    ]
  },
  {
    "id": "dilemmas_09",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Подарок или совместное впечатление?",
    "type": "choice",
    "required": true,
    "options": [
      "Подарок",
      "Впечатление",
      "И то и другое",
      "Тёплое письмо"
    ]
  },
  {
    "id": "dilemmas_10",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Планировать отпуск за месяцы или купить билеты завтра?",
    "type": "choice",
    "required": true,
    "options": [
      "Планировать",
      "Купить завтра",
      "Планировать основу",
      "Довериться тебе"
    ]
  },
  {
    "id": "dilemmas_11",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Готовить вместе или заказать любимую еду?",
    "type": "choice",
    "required": true,
    "options": [
      "Готовить",
      "Заказать",
      "Ты готовишь — я помогаю",
      "Я выбираю десерт"
    ]
  },
  {
    "id": "dilemmas_12",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Сфотографировать момент или просто прожить его?",
    "type": "choice",
    "required": true,
    "options": [
      "Сфотографировать",
      "Прожить",
      "Одно фото и убрать телефон",
      "Ты фотографируешь"
    ]
  },
  {
    "id": "dilemmas_13",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Говорить всё сразу или сначала обдумать?",
    "type": "choice",
    "required": true,
    "options": [
      "Сразу",
      "Обдумать",
      "Написать черновик",
      "Зависит от темы"
    ]
  },
  {
    "id": "dilemmas_14",
    "categoryId": "dilemmas",
    "category": "Быстрые дилеммы",
    "emoji": "⚡",
    "title": "Ещё одну категорию или отдых?",
    "type": "choice",
    "required": true,
    "options": [
      "Ещё одну!",
      "Немного отдохнуть",
      "Сначала объятия",
      "Отправить ответы Бекназару"
    ]
  }
];
