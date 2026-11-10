window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES['lower-back'] = {
  name: { en: 'Lower Back', el: 'Κάτω Πλάτη' },
  desc: { 
    en: 'Strengthen your spinal erectors and posterior chain to prevent injury and improve posture.',
    el: 'Ενισχύστε τους εκτείνοντες της σπονδυλικής στήλης για αποφυγή τραυματισμών και σωστή στάση.' 
  },
  icon: '<path d="M20 26q12-6 24 0l-2 10q-10-4-20 0z"/>',
  image: 'media/lower-back/image.webp',
  folder: 'lower-back',
  targets: ['groupLowerBack'],
  exercises: [
    {
      id: 'hyperextensions',
      s: '3 sets · 12-15 reps',
      n: { en: 'Hyperextensions (Back Extensions)', el: 'Εκτάσεις Ράχης (Hyperextensions)' },
      m: { en: 'Lower Back, Glutes, Hamstrings', el: 'Κάτω Πλάτη, Γλουτοί, Οπίσθιοι Μηριαίοι' },
      media: {
        male: '',
        female: 'media/lower-back/45-degree back extension-female.webm'
      },
      targets: [
        { k: 'groupLowerBack', p: 65, en: 'Erector Spinae', el: 'Εκτείνοντες Ράχης' },
        { k: 'groupGlutes', p: 25, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupHamstrings', p: 10, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' }
      ],
      t: {
        en: [
          'Adjust the pad so it rests just below your hip bones.',
          'Cross your arms over your chest or place hands lightly behind your head.',
          'Lower your torso with control until a gentle stretch is felt.',
          'Lift your upper body until your torso is in a straight line with your legs.'
        ],
        el: [
          'Ρυθμίστε το μαξιλάρι ώστε να ακουμπά ακριβώς κάτω από τα οστά του ισχίου.',
          'Σταυρώστε τα χέρια στο στήθος ή τοποθετήστε τα ελαφρά πίσω από το κεφάλι.',
          'Χαμηλώστε τον κορμό με έλεγχο μέχρι να αισθανθείτε μια ήπια διάταση.',
          'Σηκώστε το πάνω μέρος του σώματος μέχρι να ευθυγραμμιστεί με τα πόδια.'
        ]
      }
    }
  ]
};