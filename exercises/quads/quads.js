window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.quads = {
  name: { en: 'Quads', el: 'Τετρακέφαλοι' },
  desc: { 
    en: 'Drive maximum lower body mass and knee extension through squats and leg presses.',
    el: 'Αποκτήστε μέγιστη μυϊκή μάζα στα πόδια και έκταση γονάτων με βαθιά καθίσματα.' 
  },
  icon: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>',
  image: 'media/quads/image.webp',
  folder: 'quads',
  targets: ['groupQuads'],
  exercises: [
    {
      id: 'squat',
      s: '4 sets · 6-8 reps',
      n: { en: 'Barbell Back Squat', el: 'Βαθιά Καθίσματα με Μπάρα' },
      m: { en: 'Quads, Glutes, Core', el: 'Τετρακέφαλοι, Γλουτοί, Κορμός' },
      media: {
        male: 'media/quads/squats/barbell-back-squat-male.webm',
        female: 'media/quads/squats/barbell-1-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 55, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 30, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupCore', p: 15, en: 'Core & Lower Back', el: 'Κορμός & Κάτω Πλάτη' }
      ],
      t: {
        en: [
          'Rest the bar across your upper traps, brace your core hard.',
          'Break at your hips and knees simultaneously.',
          'Keep your knees tracking in line with your toes.',
          'Drive through your mid-foot to stand back up.'
        ],
        el: [
          'Τοποθετήστε τη μπάρα στους τραπεζοειδείς και σφίξτε τον κορμό.',
          'Λυγίστε ταυτόχρονα γοφούς και γόνατα.',
          'Κρατήστε τα γόνατα ευθυγραμμισμένα με τα δάχτυλα των ποδιών.',
          'Ωθήστε προς τα πάνω χρησιμοποιώντας ολόκληρο το πέλμα.'
        ]
      }
    },
    {
      id: 'legPress',
      s: '3 sets · 10-12 reps',
      n: { en: 'Leg Press', el: 'Πιέσεις Ποδιών (Leg Press)' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: 'media/quads/leg-press/machine-male.gif',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 70, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 30, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Position your feet shoulder-width apart on the platform.',
          'Lower the sled until your knees form a 90-degree angle.',
          'Do not let your lower back round off the seat pad.',
          'Press through your heels and mid-foot.'
        ],
        el: [
          'Τοποθετήστε τα πόδια σας στο πλάτος των ώμων στην πλατφόρμα.',
          'Χαμηλώστε το έλκηθρο μέχρι τα γόνατα να σχηματίσουν γωνία 90 μοιρών.',
          'Μην αφήσετε την κάτω πλάτη να ξεκολλήσει από το κάθισμα.',
          'Πιέστε χρησιμοποιώντας τις φτέρνες και το μέσο του πέλματος.'
        ]
      }
    }
  ]
};