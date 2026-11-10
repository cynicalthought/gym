window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.shoulders = {
  name: { en: 'Shoulders', el: 'Ώμοι' },
  desc: { 
    en: 'Build impressive 3D delt width and overhead stability with presses and lateral raises.',
    el: 'Χτίστε εντυπωσιακούς ώμους 3D και σταθερότητα πάνω από το κεφάλι με πιέσεις.' 
  },
  icon: '<path d="M19 17q6-6 12 0l-2 9-8 2-5-5zm26 0q-6-6-12 0l2 9 8 2 5-5z"/>',
  image: 'exercises/shoulders/image.avif',
  folder: 'shoulders',
  targets: ['groupShoulders'],
  exercises: [
    {
      id: 'standingDumbbelloverheadPress',
      s: '4 sets · 6-8 reps',
      n: { en: 'Standing Overhead Dumbbell Press', el: 'Πιέσεις Ώμων με Αλτήρες Όρθιος' },
      m: { en: 'Shoulders, Triceps, Core', el: 'Ώμοι, Τρικέφαλοι, Κορμός' },
      media: {
        male: 'exercises/shoulders/overhead-press/standing-dumbbells-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupShoulders', p: 65, en: 'Anterior & Lateral Delts', el: 'Πρόσθιοι & Πλάγιοι Δελτοειδείς' },
        { k: 'groupTriceps', p: 20, en: 'Triceps', el: 'Τρικέφαλοι' },
        { k: 'groupCore', p: 15, en: 'Core Stability', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Brace your glutes and core tightly to protect your lower back.',
          'Press the bar in a straight vertical line past your face.',
          'Lock your arms out overhead with shoulders active.',
          'Control the descent back to your collarbone.'
        ],
        el: [
          'Σφίξτε σφιχτά γοφούς και κορμό για προστασία της μέσης.',
          'Πιέστε τη μπάρα σε ευθεία κάθετη γραμμή μπροστά από το πρόσωπο.',
          'Εκτείνετε πλήρως τα χέρια επάνω με ενεργούς ώμους.',
          'Ελέγξτε την κάθοδο πίσω στην κλείδα.'
        ]
      }
    },
    {
      id: 'standingDumbbelllateralRaise',
      s: '3 sets · 12-15 reps',
      n: { en: 'Standing Dumbbell Lateral Raise', el: 'Πλάγιες Εκτάσεις Ώμων με Αλτήρες' },
      m: { en: 'Side Delts', el: 'Πλάγιοι Δελτοειδείς' },
      media: {
        male: 'exercises/shoulders/lateral-raises/standing-dumbbells-male.webm',
        female: 'exercises/shoulders/lateral-raises/standing-dumbbells-female.webm'
      },
      targets: [
        { k: 'groupShoulders', p: 90, en: 'Lateral Deltoids', el: 'Πλάγιοι Δελτοειδείς' },
        { k: 'groupShoulders', p: 10, en: 'Trapezius', el: 'Τραπεζοειδείς' }
      ],
      t: {
        en: [
          'Maintain a slight, soft bend in your elbows.',
          'Lead the movement with your elbows rather than your hands.',
          'Raise your arms until they are parallel to the floor.',
          'Lower slowly without momentum.'
        ],
        el: [
          'Διατηρήστε μια ελαφριά, χαλαρή κάμψη στους αγκώνες.',
          'Οδηγήστε την κίνηση με τους αγκώνες και όχι με τα χέρια.',
          'Σηκώστε τα χέρια μέχρι να γίνουν παράλληλα με το πάτωμα.',
          'Κατεβάστε αργά χωρίς ορμή.'
        ]
      }
    },
    {
      id: 'resistanceBandFacePulls',
      s: '3 sets · 15 reps',
      n: { en: 'Resistance Band Face Pull', el: 'Έλξεις προσώπου με λάστιχο' },
      m: { en: 'Rear Delts, Upper Back', el: 'Πίσω Δελτοειδείς, Άνω Πλάτη' },
      media: {
        male: 'exercises/shoulders/face-pulls/resistance-band-face-pulls-female.webm',
        female: ''
      },
      targets: [
        { k: 'groupShoulders', p: 55, en: 'Rear Deltoids', el: 'Πίσω Δελτοειδείς' },
        { k: 'groupMidBack', p: 30, en: 'Upper Back / Traps', el: 'Άνω Πλάτη / Τραπεζοειδείς' },
        { k: 'groupShoulders', p: 15, en: 'External Rotators', el: 'Εξωτερικοί Στροφείς' }
      ],
      t: {
        en: [
          'Set the cable pulley at upper-face height using a rope attachment.',
          'Pull toward your forehead while separating your hands.',
          'High elbows and external rotation are key at the back.',
          'Squeeze your rear delts and hold for 1 second.'
        ],
        el: [
          'Ρυθμίστε την τροχαλία στο ύψος του προσώπου με σκοινί.',
          'Τραβήξτε προς το μέτωπο ανοίγοντας τα χέρια προς τα έξω.',
          'Ψηλοί αγκώνες και εξωτερική στροφή είναι το κλειδί πίσω.',
          'Σφίξτε τους πίσω δελτοειδείς και κρατήστε για 1 δευτερόλεπτο.'
        ]
      }
    },
    {
      id: 'arnoldPress',
      s: '3 sets · 10-12 reps',
      n: { en: 'Arnold Press', el: 'Πιέσεις Arnold' },
      m: { en: 'All Deltoid Heads', el: 'Όλες οι Μοίρες Ώμων' },
      media: {
        male: 'exercises/shoulders/arnold-press/seated-dumbells-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupShoulders', p: 45, en: 'Anterior Delts', el: 'Πρόσθιοι Δελτοειδείς' },
        { k: 'groupShoulders', p: 40, en: 'Lateral Delts', el: 'Πλάγιοι Δελτοειδείς' },
        { k: 'groupShoulders', p: 15, en: 'Rear Delts', el: 'Πίσω Δελτοειδείς' }
      ],
      t: {
        en: [
          'Start with dumbbells held in front of your chest, palms facing you.',
          'Rotate your wrists outward as you press upward.',
          'Finish with palms facing forward at full extension.',
          'Reverse the rotation smoothly on the way down.'
        ],
        el: [
          'Ξεκινήστε με τους αγκώνες μπροστά και τις παλάμες προς το μέρος σας.',
          'Περιστρέψτε τους καρπούς προς τα έξω καθώς πιέζετε προς τα πάνω.',
          'Ολοκληρώστε με τις παλάμες μπροστά σε πλήρη έκταση.',
          'Αστρονομική αντίστροφη περιστροφή στην κάθοδο.'
        ]
      }
    },
    {
      id: 'bentOverDumbbells',
      s: '3 sets · 12-15 reps',
      n: { en: 'Bent-Over Dumbbell Lateral Raise', el: 'Σκυφτές Πλάγιες Άρσεις με Αλτήρες' },
      m: { en: 'Rear Delts, Upper Back', el: 'Πίσω Δελτοειδείς, Άνω Πλάτη' },
      media: {
        male: 'exercises/shoulders/lateral-raises/bent-over-dumbbells-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupShoulders', p: 80, en: 'Rear Deltoids', el: 'Πίσω Δελτοειδείς' },
        { k: 'groupMidBack', p: 20, en: 'Rhomboids & Traps', el: 'Ρομβοειδείς & Τραπεζοειδείς' }
      ],
      t: {
        en: [
          'Hinge forward at your hips with a flat back and slight knee bend.',
          'Hold dumbbells beneath you with palms facing each other.',
          'Raise your arms out to the sides, squeezing your rear delts.',
          'Lower the weights under strict control back to the start.'
        ],
        el: [
          'Κάντε κάμψη μπροστά από τα ισχία με ίσια πλάτη και ελαφριά κάμψη στα γόνατα.',
          'Κρατήστε τους αλτήρες κάτω με τις παλάμες να κοιτάζουν η μία την άλλη.',
          'Σηκώστε τα χέρια στα πλάγια σφίγγοντας τους πίσω δελτοειδείς.',
          'Κατεβάστε τα βάρη με αυστηρό έλεγχο στην αρχική θέση.'
        ]
      }
    }
  ]
};