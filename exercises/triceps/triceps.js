window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.triceps = {
  name: { en: 'Triceps', el: 'Τρικέφαλοι' },
  desc: { 
    en: 'Add massive arm thickness and lockout power with heavy presses and cable pushdowns.',
    el: 'Προσθέστε τεράστιο όγκο και δύναμη στα χέρια με πιέσεις και τροχαλίες τρικεφάλων.' 
  },
  icon: '<path d="M18 21q5-3 8 2l-2 11-5 2-4-7zm30 0q-5-3-8 2l2 11 5 2 4-7z"/>',
  image: 'media/triceps/image.webp',
  folder: 'triceps',
  targets: ['groupTriceps'],
  exercises: [
    {
      id: 'pushdown',
      s: '3 sets · 12-15 reps',
      n: { en: 'Tricep Cable Pushdown', el: 'Πιέσεις Τρικεφάλων στην Τροχαλία' },
      m: { en: 'Triceps', el: 'Τρικέφαλοι' },
      media: {
        male: 'media/triceps/pushdowns/standing-cable-male.gif',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 80, en: 'Lateral & Long Head', el: 'Πλάγια & Μακρά Κεφαλή' },
        { k: 'groupTriceps', p: 20, en: 'Medial Head', el: 'Έσω Κεφαλή' }
      ],
      t: {
        en: [
          'Hinge slightly forward at the hips with a stable core.',
          'Keep your elbows pinned to your sides.',
          'Extend fully and flex your triceps at the bottom.',
          'Control the upward return.'
        ],
        el: [
          'Γείρετε ελαφρώς μπροστά από τους γοφούς με σταθερό κορμό.',
          'Κρατήστε τους αγκώνες κολλημένους στα πλάγια.',
          'Εκτείνετε πλήρως και σφίξτε τους τρικεφάλους στο κάτω μέρος.',
          'Ελέγξτε την ανοδική επιστροφή.'
        ]
      }
    }
  ]
};