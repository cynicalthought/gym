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
      id: 'overheadPress',
      s: '4 sets · 6-8 reps',
      n: { en: 'Overhead Barbell Press', el: 'Πιέσεις Ώμων Όρθιος (Military Press)' },
      m: { en: 'Shoulders, Triceps, Core', el: 'Ώμοι, Τρικέφαλοι, Κορμός' },
      media: {
        male: 'media/shoulders/overhead-press/standing-barbell-male.webm',
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
      id: 'lateralRaises',
      s: '3 sets · 12-15 reps',
      n: { en: 'Dumbbell Lateral Raise', el: 'Πλάγιες Aρσεις Ώμων με Αλτήρες' },
      m: { en: 'Side Delts', el: 'Πλάγιοι Δελτοειδείς' },
      media: {
        male: 'media/shoulders/lateral-raises/standing-dumbbells-male.webm',
        female: 'media/shoulders/lateral-raises/standing-dumbbells-female.webm'
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
      id: 'facePulls',
      s: '3 sets · 15 reps',
      n: { en: 'Cable Face Pull', el: 'Face Pulls στην Τροχαλία' },
      m: { en: 'Rear Delts, Upper Back', el: 'Πίσω Δελτοειδείς, Άνω Πλάτη' },
      media: {
        male: 'media/shoulders/face-pulls/standing-cable-male.gif',
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
        male: 'media/shoulders/arnold-press/seated-dumbells-male.webm',
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
    }
  ]
};