export const appConfig = {
  apiUrl:
    'https://u7cnze5cl0.execute-api.us-east-1.amazonaws.com/production/contact',
  resultField: 'learningtype',
  segmentId: '2',
  urlByProfile: {
    BBA: 'https://www.traveloktutor.com/result-bba',
    ABA: 'https://www.traveloktutor.com/result-aba',
    KBA: 'https://www.traveloktutor.com/result-kba',
  },
  theme: {
    primaryColor: '#8546A3',
  },
  questions: {
    '1': {
      customMauticField: 'why_do_you_want_to_learn',
      title:
        'Чому Ви хочете вивчати англійську? Виберіть один варіант, що найкраще описує Вас.',
      progress: 15,
      options: [
        ['Я хочу прокачати мозок.', 'I want to do it as a brain exercise'],
        [
          'Мені це потрібно для майбутньої поїздки.',
          'I need it for an upcoming trip',
        ],
        ['Мені це потрібно для моєї кар’єри.', 'I need it for my career'],
        [
          'Щоб спілкуватись з рідними/друзями.',
          'To connect with family/friends',
        ],
        [
          'Мені просто подобається вивчати нову мову.',
          'I just enjoy learning languages',
        ],
        ['Інше', 'Other'],
      ],
    },
    '2': {
      progress: 33,
      title:
        'Ви на заході. Виберіть ту кімнату, в яку Ви швидше за все підете.',
      options: [
        ['Навпроти коуча, щоб дивитись в йому в очі.', 'BBA'],
        ['Ближче до коуча, щоб гарно його чути.', 'ABA'],
        ['Там, де є роздатковий матеріал.', 'KBA'],
      ],
    },
    '3': {
      progress: 43,
      title:
        'Ви на груповому занятті з коучем. Виберіть стіл за який би Ви швидше за все сіли б:',
      options: [
        [
          'Кімната з іншими учасниками, де більшість роботи Ви будете виконувати у парах, використовуючи роздатковий матеріал.',
          'KBA',
        ],
        ['Кімната з навушниками. Вся розповідь буде на слух.', 'ABA'],
        ['Кімната з коучем. Вся розповідь буде проведена “вживу”.', 'BBA'],
      ],
    },
    '4': {
      progress: 52,
      title:
        'Виберіть рядок фраз, що є близьким для Вас. (Ті фрази, що Ви найчастіше вживаєте):',
      options: [
        ['Я слухаю. Яка хороша пісня.', 'ABA'],
        ['Подивись. Уяви.', 'BBA'],
        ['Відчуй. Мені здається.', 'KBA'],
      ],
    },
    '5': {
      progress: 62,
      title:
        'Згадайте свій відпочинок в осінньому парку. Про що перше Ви подумали?',
      options: [
        ['Жовті листочки, голубе небо.', 'BBA'],
        ['Запах дерев, свіже повітря.', 'KBA'],
        ['Шум вітру, листочків під ногами.', 'ABA'],
      ],
    },
    '6': {
      progress: 71,
      title: "Виберіть те, що Ви найкраще тримаєте у себе в пам'яті .",
      options: [
        ['Мелодії пісень.', 'ABA'],
        ['Картини, напрямки руху.', 'BBA'],
        ['Запахи, смаки.', 'KBA'],
      ],
    },
    '7': {
      customMauticField: 'challengefrustration',
      title:
        'Яка Ваше найбільша складність, розчарування при вивченні англійської мови?',
      progress: 81,
      options: [
        [
          'Я ніколи не могла вивчити англійську мову, незалежно від того, скільки я намагалась',
          "I've never been able to learn english no matter how hard I've tried",
        ],
        [
          'Я занадто зайнята, щоб вчити англійську мову',
          "I'm too busy to learn english",
        ],
        ['У мене немає мотивації', 'Not motivated'],
        [
          'Я хочу вивчити англійську мову, але мені здається це нудним',
          'I want to learn english but I find it boring',
        ],
        ['Жоден з вищевказаних', 'None of the above'],
      ],
    },
    '8': {
      progress: 90,
      title: 'Який Ваш тип вивчення англійської?',
      options: [],
      componentName: 'emailForm',
      customComponentProps: {
        resultTitle: 'Ваш Результат',
        emailCTAText:
          'Введіть нижче Ваш email, щоб отримати безкоштовне персональне відео і заключення із поясненням Вашого результату та найшвидший шлях вивчення англійської саме для Вас.',
        emailCTASubText: 'Ваша конфіденційність важлива для нас, і ми не будемо відправляти Вам спам.',
        buttonLabel: 'Продовжити...',
      },
    },
  },
};
export default appConfig;
