window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.calves = {
  name: { en: 'Calves', el: 'Γάμπες' },
  desc: { 
    en: 'Develop lower leg definition and explosive ankle strength through standing and seated raises.',
    el: 'Αναπτύξτε τις γάμπες και την εκρηκτική δύναμη με άρσεις όρθιους και καθιστούς.' 
  },
  icon: '<path d="M27 42q5 1 9 0l-2 19-5 2-4-13Zm26 0q-5 1-9 0l2 19 5 2 4-13z"/>',
  image: 'exercises/calves/image.avif',
  folder: 'calves',
  targets: ['groupCalves'],
  exercises: [
    {
      id: 'standingCalfRaise',
      s: '3 sets · 15-20 reps',
      n: { en: 'Standing Calf Raise', el: 'Άρσεις Γαστροκνημίων Όρθιος' },
      m: { en: 'Calves', el: 'Γαστροκνήμιες (Γάμπες)' },
      media: {
        male: 'exercises/calves/dumbbell-standing-calf-raise/dumbbell-standing-calf-raise-female.webm',
        female: ''
      },
      targets: [
        { k: 'groupCalves', p: 80, en: 'Gastrocnemius', el: 'Γαστροκνήμιος' },
        { k: 'groupCalves', p: 20, en: 'Soleus', el: 'Υποκνημίδιος' }
      ],
      t: {
        en: [
          'Place the balls of your feet securely on an elevated platform.',
          'Lower your heels fully to get a complete stretch at the bottom.',
          'Rise up onto your toes as high as possible.',
          'Pause briefly at peak contraction.'
        ],
        el: [
          'Τοποθετήστε τα μπροστινό τμήμα των πελμάτων σε υπερυψωμένη βάση.',
          'Χαμηλώστε τις φτέρνες πλήρως για μέγιστη διάταση.',
          'Ανεβείτε στις μύτες των ποδιών όσο πιο ψηλά γίνεται.',
          'Κάντε μια σύντομη παύση στην κορυφή.'
        ]
      }
    }
  ]
};