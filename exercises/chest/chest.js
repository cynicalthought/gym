window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.chest = {
  name: { en: 'Chest', el: 'Στήθος' },
  desc: { 
    en: 'Maximize upper body pressing power and pectoral thickness with bench presses and flyes.',
    el: 'Μεγιστοποιήστε τη δύναμη πίεσης και το πάχος του στήθους με πιέσεις πάγκου.' 
  },
  icon: '<path d="M25 18q6-4 10 1l-1 9q-6 3-10-1-2-5 1-9zm14 0q-6-4-10 1l1 9q6 3 10-1 2-5-1-9z"/>',
  image: 'exercises/chest/image.avif',
  folder: 'chest',
  targets: ['groupChest'],
  exercises: [
    {
      id: 'benchPress',
      s: '4 sets · 6-8 reps',
      n: { en: 'Barbell / Dumbbell Bench Press', el: 'Πιέσεις Στήθους' },
      m: { en: 'Chest, Triceps, Anterior Delts', el: 'Στήθος, Τρικέφαλοι, Πρόσθιοι Δελτοειδείς' },
      media: {
        male: 'exercises/chest/bench-press/flat-dumbbells-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupChest', p: 60, en: 'Pectoralis Major', el: 'Μείζων Θωρακικός' },
        { k: 'groupTriceps', p: 25, en: 'Triceps', el: 'Τρικέφαλοι' },
        { k: 'groupShoulders', p: 15, en: 'Front Delts', el: 'Πρόσθιοι Δελτοειδείς' }
      ],
      t: {
        en: [
          'Plant your feet firmly on the floor and arch your upper back.',
          'Keep your wrists stacked directly over your elbows.',
          'Lower the weight with control to mid-chest level.',
          'Press explosively upward while keeping shoulders back.'
        ],
        el: [
          'Πατήστε τα πόδια σας γερά στο πάτωμα και καμπυλώστε ελαφρά την πλάτη.',
          'Κρατήστε τους καρπούς σας ακριβώς πάνω από τους αγκώνες.',
          'Κατεβάστε το βάρος με έλεγχο στο ύψος του μέσου στήθους.',
          'Πιέστε εκρηκτικά προς τα πάνω κρατώντας τους ώμους πίσω.'
        ]
      }
    },
    {
      id: 'inclinePress',
      s: '3 sets · 8-10 reps',
      n: { en: 'Incline Bench Press', el: 'Πιέσεις Επικλινούς' },
      m: { en: 'Upper Chest, Triceps', el: 'Άνω Στήθος, Τρικέφαλοι' },
      media: {
        male: 'exercises/chest/bench-press/incline-dumbbells-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupChest', p: 65, en: 'Clavicular Head', el: 'Κλειδική Μοίρα Στήθους' },
        { k: 'groupShoulders', p: 20, en: 'Front Delts', el: 'Πρόσθιοι Δελτοειδείς' },
        { k: 'groupTriceps', p: 15, en: 'Triceps', el: 'Τρικέφαλοι' }
      ],
      t: {
        en: [
          'Set the bench at a 30 to 45-degree angle.',
          'Press the weight upward and slightly back.',
          'Maintain constant tension at the bottom stretch.',
          'Breathe in on the descent, exhale on the push.'
        ],
        el: [
          'Ρυθμίστε τον πάγκο σε γωνία 30 έως 45 μοιρών.',
          'Πιέστε το βάρος προς τα πάνω και ελαφρώς προς τα πίσω.',
          'Διατηρήστε σταθερή τάση στο κάτω μέρος της κίνησης.',
          'Εισπνεύστε στην κάθοδο, εκπνεύστε στην ώθηση.'
        ]
      }
    },
    {
      id: 'pushUps',
      s: '3 sets · AMRAP',
      n: { en: 'Push-Ups', el: 'Κάμψεις Στήθους' },
      m: { en: 'Chest, Core, Triceps', el: 'Στήθος, Κορμός, Τρικέφαλοι' },
      media: {
        male: 'exercises/chest/push-ups/push-ups-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupChest', p: 55, en: 'Pectoralis Major', el: 'Μείζων Θωρακικός' },
        { k: 'groupCore', p: 25, en: 'Core / Abs', el: 'Κορμός / Κοιλιακοί' },
        { k: 'groupTriceps', p: 20, en: 'Triceps', el: 'Τρικέφαλοι' }
      ],
      t: {
        en: [
          'Keep your body in a rigid straight line from head to heels.',
          'Position hands slightly wider than shoulder-width.',
          'Lower your chest until it hovers just above the floor.',
          'Lock out your arms firmly at the top.'
        ],
        el: [
          'Διατηρήστε το σώμα σας σε ευθεία και άκαμπτη γραμμή.',
          'Τοποθετήστε τα χέρια ελαφρώς πιο φαρδιά στους ώμους.',
          'Κατεβάστε το στήθος μέχρι να φτάσει ελάχιστα πάνω από το πάτωμα.',
          'Εκτείνετε πλήρως τα χέρια σας στην κορυφή.'
        ]
      }
    }
  ]
};