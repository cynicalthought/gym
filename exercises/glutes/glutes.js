window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.glutes = {
  name: { en: 'Glutes', el: 'Γλουτοί' },
  desc: { 
    en: 'Strengthen your posterior power center and hip drive with thrusts, bridges, and deadlifts.',
    el: 'Ενισχύστε το κέντρο δύναμης και την ώθηση ισχίου με hip thrusts και deadlifts.' 
  },
  icon: '<path d="M25 29q4-5 8-2l-1 10q-6 2-9-2zm14 0q-4-5-8-2l1 10q6 2 9-2z"/>',
  image: 'media/glutes/image.webp',
  folder: 'glutes',
  targets: ['groupGlutes'],
  exercises: [
    {
      id: 'deadlift',
      s: '3 sets · 5 reps',
      n: { en: 'Barbell Deadlift', el: 'Άρσεις Θανάτου με Μπάρα' },
      m: { en: 'Posterior chain, Glutes, Hamstrings', el: 'Οπίσθια αλυσίδα, Γλουτοί, Μηριαίοι' },
      media: {
        male: 'media/glutes/deadlifts/barbell-male.webm',
        female: 'media/glutes/deadlifts/barbell-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 40, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupHamstrings', p: 30, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' },
        { k: 'groupLowerBack', p: 20, en: 'Erector Spinae', el: 'Εκτείνοντες Ράχης' },
        { k: 'groupCore', p: 10, en: 'Core Bracing', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Keep the bar in contact with your shins throughout the pull.',
          'Engage your lats as if trying to orange-squeeze your armpits.',
          'Drive the floor away with your legs and lock your hips.'
        ],
        el: [
          'Κρατήστε τη μπάρα σε επαφή με τις κνήμες σε όλη την κίνηση.',
          'Ενεργοποιήστε τους πλατείς ραχιαίους.',
          'Σπρώξτε το πάτωμα μακριά με τα πόδια και κλειδώστε τους γοφούς.'
        ]
      }
    },
    {
      id: 'hipThrust',
      s: '3 sets · 10-12 reps',
      n: { en: 'Barbell Hip Thrust', el: 'Hip Thrust με Μπάρα' },
      m: { en: 'Gluteus Maximus, Hamstrings', el: 'Μέγιστος Γλουτιαίος, Οπίσθιοι Μηριαίοι' },
      media: {
        male: '',
        female: 'media/glutes/hip-thrusts/barbell-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 80, en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
        { k: 'groupHamstrings', p: 20, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' }
      ],
      t: {
        en: [
          'Rest your upper back firmly against a bench.',
          'Drive through your heels to lift your hips until thighs and torso align.',
          'Squeeze your glutes hard at the top.'
        ],
        el: [
          'Ακουμπήστε την άνω πλάτη σταθερά σε πάγκο.',
          'Πιέστε από τις φτέρνες για να σηκώσετε τους γοφούς.',
          'Σφίξτε δυνατά τους γλουτούς στην κορυφή.'
        ]
      }
    }
  ]
};