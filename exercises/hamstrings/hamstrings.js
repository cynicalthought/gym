window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.hamstrings = {
  name: { en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' },
  desc: { 
    en: 'Strengthen the posterior chain, knee flexion, and hip extension with targeted hamstring movements.',
    el: 'Ενδυναμώστε το πίσω μέρος των μηρών και την έκταση των ισχίων.' 
  },
  icon: '<path d="M18 16h12v16H18z"/>',
  image: 'exercises/hamstrings/image.jpeg',
  folder: 'hamstrings',
  targets: ['groupHamstrings'],
  exercises: [
    {
      id: 'barbellRdl',
      s: '3 sets · 8-10 reps',
      n: { en: 'Barbell Romanian Deadlift', el: 'Romanian Deadlift με Μπάρα' },
      m: { en: 'Hamstrings, Glutes', el: 'Δικέφαλοι Μηριαίοι, Γλουτοί' },
      media: {
        male: 'exercises/hamstrings/romanian-deadlifts/dumbbells-female.webm',
        female: ''
      },
      targets: [
        { k: 'groupHamstrings', p: 60, en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' },
        { k: 'groupGlutes', p: 30, en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
        { k: 'groupLowerBack', p: 10, en: 'Lower Back', el: 'Κάτω Ραχιαίοι' }
      ],
      t: {
        en: [
          'Stand holding a barbell with a shoulder-width overhand grip.',
          'Keep a slight bend in your knees and hinge at your hips, pushing your glutes back.',
          'Lower the bar along your shins until you feel a deep stretch in your hamstrings.',
          'Drive your hips forward to return to the starting position.'
        ],
        el: [
          'Σταθείτε κρατώντας μια μπάρα με πρηνής λαβή στο φάρδος των ώμων.',
          'Κρατήστε μια ελαφριά κάμψη στα γόνατα και κάντε κάμψη από τα ισχία σπρώχνοντας τους γλουτούς πίσω.',
          'Κατεβάστε τη μπάρα κατά μήκος των κνημών μέχρι να νιώσετε βαθιά διάταση.',
          'Ωθήστε τη λεκάνη προς τα εμπρός για να επιστρέψετε στην αρχική θέση.'
        ]
      }
    }
  ]
};