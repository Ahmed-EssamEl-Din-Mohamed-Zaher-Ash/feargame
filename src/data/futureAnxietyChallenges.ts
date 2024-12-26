import { Challenge } from '../types/game';

export const futureAnxietyLevels: Challenge[][] = [
  // المستوى الأول: القلق من المستقبل المهني
  [
    {
      situation: 'بتفكر في مستقبلك المهني...',
      choices: [
        {
          text: 'أكيد مش هلاقي شغل كويس في المجال اللي بحبه',
          isPositive: false,
          feedback: 'التشاؤم بيمنعنا من رؤية الفرص المتاحة'
        },
        {
          text: 'السوق صعب والمنافسة شديدة، مفيش أمل',
          isPositive: false,
          feedback: 'المنافسة موجودة فعلاً، بس ده مش معناه إن مفيش فرص'
        },
        {
          text: 'هركز في تطوير مهاراتي وبناء خبرات جديدة',
          isPositive: true,
          feedback: 'برافو! التطوير المستمر هو مفتاح النجاح'
        },
        {
          text: 'هدور على فرص التدريب والتعلم في مجالي',
          isPositive: true,
          feedback: 'ممتاز! البحث عن فرص التعلم بيفتح أبواب كتير'
        },
        {
          text: 'كل خطوة بتقربني من هدفي، حتى لو صغيرة',
          isPositive: true,
          feedback: 'تفكير رائع! النجاح رحلة مش نقطة وصول'
        }
      ]
    },
    {
      situation: 'بتفكر في مشروع جديد...',
      choices: [
        {
          text: 'لو فشل المشروع هخسر كل حاجة',
          isPositive: false,
          feedback: 'الفشل تجربة تعلم، مش نهاية العالم'
        },
        {
          text: 'الظروف صعبة، أحسن أأجل الموضوع',
          isPositive: false,
          feedback: 'التأجيل مش حل، ممكن نبدأ بخطوات صغيرة'
        },
        {
          text: 'هعمل دراسة جدوى وأخطط كويس قبل ما أبدأ',
          isPositive: true,
          feedback: 'برافو! التخطيط المدروس بيقلل المخاطر'
        },
        {
          text: 'هبدأ بمشروع صغير وأكبر مع الوقت',
          isPositive: true,
          feedback: 'فكرة ممتازة! النمو التدريجي أكثر أماناً'
        },
        {
          text: 'حتى لو فشلت، هتعلم دروس قيمة تفيدني',
          isPositive: true,
          feedback: 'تفكير ناضج! كل تجربة بتضيف لخبراتنا'
        }
      ]
    }
    // ... باقي الأسئلة للمستوى الأول
  ]
];