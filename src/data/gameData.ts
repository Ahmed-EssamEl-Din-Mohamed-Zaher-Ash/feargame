export const fears = [
  {
    id: 'bugs',
    name: 'الصراصير الطيارة',
    description: 'يلا نواجه الصراصير الطيارة ونتغلب على خوفنا منها',
    level: 1,
  },
  {
    id: 'social',
    name: 'نظرات الناس',
    description: 'خلينا نشوف إزاي نتعامل مع نظرات الناس وكلامهم',
    level: 2,
  },
  {
    id: 'dark',
    name: 'الضلمة',
    description: 'مش هنخاف من الضلمة تاني',
    level: 3,
  },
];

export const socialChallenges = [
  {
    situation: 'الناس في الشارع بيبصولي بطريقة غريبة...',
    choices: [
      {
        text: 'أكيد في حاجة غلط في شكلي أو لبسي',
        isPositive: false
      },
      {
        text: 'مش مهم نظرات الناس، المهم إني مرتاح مع نفسي',
        isPositive: true
      }
    ]
  },
  {
    situation: 'سمعت ناس بيضحكوا وأنا ماشي...',
    choices: [
      {
        text: 'أكيد بيضحكوا عليا',
        isPositive: false
      },
      {
        text: 'الناس ممكن تضحك لأي سبب، مش لازم يكون ليا علاقة',
        isPositive: true
      }
    ]
  },
  {
    situation: 'حد قالي رأيه في لبسي بطريقة مش حلوة...',
    choices: [
      {
        text: 'لازم أغير لبسي عشان أرضي الناس',
        isPositive: false
      },
      {
        text: 'ده ذوقي وأنا مرتاح بيه، مش لازم كل الناس تحبه',
        isPositive: true
      }
    ]
  },
  {
    situation: 'في الشغل، زميلي انتقد شغلي قدام الكل...',
    choices: [
      {
        text: 'هو صح، أنا فاشل وشغلي وحش',
        isPositive: false
      },
      {
        text: 'هستفيد من النقد البناء وأحسن من نفسي',
        isPositive: true
      }
    ]
  },
  {
    situation: 'محدش عبرني في الحفلة...',
    choices: [
      {
        text: 'أكيد أنا شخص ممل ومحدش طايقني',
        isPositive: false
      },
      {
        text: 'مش كل مرة لازم أكون مركز الاهتمام، المهم إني استمتع بوقتي',
        isPositive: true
      }
    ]
  }
];