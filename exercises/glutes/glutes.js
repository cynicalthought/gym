window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.glutes = {
  name: { en: 'Glutes', el: 'Γλουτοί' },
  desc: { 
    en: 'Build lower body strength, shape, and hip power with targeted hip hinges, thrusts, and extensions.',
    el: 'Χτίστε δύναμη, σχήμα και εκρηκτικότητα στο κάτω μέρος του σώματος.' 
  },
  icon: '<path d="M18 16h12v16H18z"/>',
  image: 'exercises/glutes/image.jpg',
  folder: 'glutes',
  targets: ['groupGlutes'],
  exercises: [
    {
      id: 'quadrupedGluteKickback',
      s: '3 sets · 12-15 reps per leg',
      n: { en: 'Quadruped Glute Kickback', el: 'Εκτάσεις Γλουτών στα Τέσσερα' },
      m: { en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
      media: {
        male: '',
        female: 'exercises/glutes/kickbacks/quadruped-hip-extension-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 90, en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
        { k: 'groupCore', p: 10, en: 'Core Stability', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Get on your hands and knees in a tabletop position.',
          'Keeping your knee bent at 90 degrees, press one foot up toward the ceiling.',
          'Squeeze your glute hard at the top of the movement.',
          'Lower your knee back down with control without touching the floor.'
        ],
        el: [
          'Τοποθετηθείτε στα χέρια και τα γόνατα σε θέση τραπεζιού.',
          'Διατηρώντας το γόνατο λυγισμένο στις 90 μοίρες, πιέστε το πόδι προς το ταβάνι.',
          'Σφίξτε δυνατά τον γλουτό στην κορυφή της κίνησης.',
          'Κατεβάστε το γόνατο κάτω με έλεγχο χωρίς να ακουμπήσει στο έδαφος.'
        ]
      }
    },
    {
      id: 'barbellDeadlift',
      s: '3 sets · 5-8 reps',
      n: { en: 'Barbell Deadlift', el: 'Κλασικές Άρσεις Θανάτου με Μπάρα' },
      m: { en: 'Glutes, Hamstrings, Lower Back', el: 'Γλουτοί, Δικέφαλοι Μηριαίοι, Κάτω Ραχιαίοι' },
      media: {
        male: 'exercises/glutes/deadlifts/barbell-male.webm',
        female: 'exercises/glutes/deadlifts/barbell-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 45, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupGlutes', p: 35, en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' },
        { k: 'groupLowerBack', p: 20, en: 'Lower Back', el: 'Κάτω Ραχιαίοι' }
      ],
      t: {
        en: [
          'Stand with feet hip-width apart, barbell over mid-foot.',
          'Hinge at hips and bend knees to grip the bar outside your legs.',
          'Engage your lats, flatten your back, and drive the floor away.',
          'Stand tall and lock out your hips at the top.'
        ],
        el: [
          'Σταθείτε με τα πόδια στο φάρδος των ισχίων και τη μπάρα πάνω από το μέσο του πέλματος.',
          'Κάντε κάμψη στα ισχία και λυγίστε τα γόνατα για να πιάσετε τη μπάρα.',
          'Σφίξτε την πλάτη, ισιώστε τον κορμό και πιέστε το πάτωμα μακριά.',
          'Σταθείτε όρθιοι και κλειδώστε τη λεκάνη στην κορυφή.'
        ]
      }
    },
    {
      id: 'quadrupedStraightLegKickback',
      s: '3 sets · 12-15 reps per leg',
      n: { en: 'Quadruped Straight-Leg Kickback', el: 'Εκτάσεις Τεντωμένου Ποδιού στα Τέσσερα' },
      m: { en: 'Gluteus Maximus, Hamstrings', el: 'Μέγιστος Γλουτιαίος, Δικέφαλοι Μηριαίοι' },
      media: {
        male: '',
        female: 'exercises/glutes/kickbacks/straight-leg-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 80, en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
        { k: 'groupGlutes', p: 20, en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' }
      ],
      t: {
        en: [
          'Start on all fours with hands under shoulders and knees under hips.',
          'Extend one leg straight back behind you with your toe pointed down.',
          'Lift your leg upward using your glute without arching your lower back.',
          'Lower with control and repeat.'
        ],
        el: [
          'Ξεκινήστε στα τέσσερα με τα χέρια κάτω από τους ώμους.',
          'Τεντώστε το ένα πόδι ευθεία πίσω σας με τα δάχτυλα προς τα κάτω.',
          'Σηκώστε το πόδι προς τα πάνω χρησιμοποιώντας τον γλουτό χωρίς να καμπυλώσετε τη μέση.',
          'Κατεβάστε με έλεγχο και επαναλάβετε.'
        ]
      }
    },
    {
      id: 'barbellHipThrust',
      s: '4 sets · 8-12 reps',
      n: { en: 'Barbell Hip Thrust', el: 'Hip Thrust με Μπάρα' },
      m: { en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
      media: {
        male: '',
        female: 'exercises/glutes/hip-thrusts/barbell-female.webm'
      },
      targets: [
        { k: 'groupGlutes', p: 90, en: 'Gluteus Maximus', el: 'Μέγιστος Γλουτιαίος' },
        { k: 'groupGlutes', p: 10, en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' }
      ],
      t: {
        en: [
          'Sit on the floor with your upper back leaning against a stable bench.',
          'Place a padded barbell across your hips.',
          'Drive through your heels to lift your hips until your thighs and torso align.',
          'Squeeze your glutes hard at the top and lower with control.'
        ],
        el: [
          'Καθίστε στο πάτωμα με την πλάτη ακουμπισμένη σε σταθερό πάγκο.',
          'Τοποθετήστε μια προστατευμένη μπάρα πάνω στη λεκάνη.',
          'Πιέστε τις φτέρνες για να σηκώσετε τη λεκάνη μέχρι οι μηροί και ο κορμός να ευθυγραμμιστούν.',
          'Σφίξτε δυνατά τους γλουτούς στην κορυφή και κατεβάστε με έλεγχο.'
        ]
      }
    },
    {
      id: 'barbellPowerClean',
      s: '3 sets · 3-5 reps',
      n: { en: 'Barbell Power Clean', el: 'Power Clean με Μπάρα' },
      m: { en: 'Glutes, Hamstrings, Full Body', el: 'Γλουτοί, Δικέφαλοι Μηριαίοι, Ολόκληρο Σώμα' },
      media: {
        male: 'exercises/glutes/cleans/barbell-power-clean-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupGlutes', p: 40, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupHamstrings', p: 30, en: 'Hamstrings', el: 'Δικέφαλοι Μηριαίοι' },
        { k: 'groupShoulders', p: 30, en: 'Upper Body / Traps', el: 'Άνω Σώμα / Τραπεζοειδείς' }
      ],
      t: {
        en: [
          'Start in a standard deadlift setup with an overhand or hook grip.',
          'Explosively extend your hips, knees, and ankles in a powerful triple extension.',
          'Shrug your shoulders and pull your body underneath the bar.',
          'Catch the bar on the front delts with elbows high.'
        ],
        el: [
          'Ξεκινήστε σε θέση άρσης θανάτου με πρηνής λαβή.',
          'Εκτείνετε εκρηκτικά ισχία, γόνατα και αστραγάλους σε μια ισχυρή τριπλή έκταση.',
          'Σηκώστε τους ώμους και τραβήξτε το σώμα κάτω από τη μπάρα.',
          'Πιάστε τη μπάρα στους πρόσθιους δελτοειδείς με ψηλούς αγκώνες.'
        ]
      }
    }
  ]
};