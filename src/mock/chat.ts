export const CHAT_STEPS = [
  {
    id: '0',
    message: 'Hi, Paul! Welcome to Planeteer chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Understood! Would you like to continue in the region of São Paulo?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'São Paulo?', trigger: '5' },
      { value: 2, label: 'Other', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'In which city would you like to invest?',
    trigger: 'city'
  },
  {
    id: 'city',
    user: true,
    trigger: '6'
  },
  {
    id: '6',
    message: 'I found some interesting and responsible production options for growing in {previousValue}.',
    trigger: '7'
  },
  {
    id: '7',
    message: 'Culture: Plum\nSoil: Clayish, Medium Texture\nMonths: August',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Culture: Rice\nSoil: Sandy, Medium Texture\nMonths: Octuber, November',
    trigger: '9'
  },
  {
    id: '9',
    message: 'Culture: Wheat\nSoil: Clayish, Medium Texture\nMonths: November, December',
    end: true
  }
];
