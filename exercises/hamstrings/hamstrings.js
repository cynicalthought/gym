window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.hamstrings = {
  name: { en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' },
  desc: { 
    en: 'Protect your knees and build powerful leg curls with Romanian deadlifts and stretches.',
    el: 'Προστατέψτε τα γόνατα και χτίστε ισχυρούς δικεφάλους μηριαίους με RDLs.' 
  },
  icon: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>',
  image: 'media/hamstrings/image.webp',
  folder: 'hamstrings',
  targets: ['groupHamstrings'],
  exercises: [
    {
      id: 'rdl',
      s: '3 sets · 8-10 reps',
      n: { en: 'Romanian Deadlift (RDL)', el: 'Άρσεις Θανάτου με Τεντωμένα Πόδια (RDL)' },
      m: { en: 'Hamstrings, Glutes, Lower back', el: 'Οπίσθιοι Μηριαίοι, Γλουτοί, Κάτω Πλάτη' },
      media: {
        male: 'media/hamstrings/romanian-deadlifts/barbell-male.gif',
        female: 'media/hamstrings/romanian-deadlifts/dumbbells-female.webm'
      },
      targets: [
        { k: 'groupHamstrings', p: 60, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' },
        { k: 'groupGlutes', p: 25, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupMidBack', p: 15, en: 'Erector Spinae', el: 'Εκτείνοντες Ράχης' }
      ],
      t: {
        en: [
          'Maintain a slight bend in your knees throughout.',
          'Hinge backward at your hips, pushing your glutes out.',
          'Keep the bar or dumbbells gliding close to your shins.',
          'Feel a deep stretch in your hamstrings before returning.'
        ],
        el: [
          'Διατηρήστε μια ελαφριά κάμψη στα γόνατα σε όλη τη διάρκεια.',
          'Σπρώξτε τους γοφούς σας προς τα πίσω.',
          'Κρατήστε τη μπάρα ή τους αλτήρες κοντά στις κνήμες σας.',
          'Νιώστε βαθιά διάταση στους μηριαίους πριν επανέλθετε.'
        ]
      }
    }
  ]
};