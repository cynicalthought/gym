window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES['mid-back'] = {
  name: { en: 'Mid-Back', el: 'Μέση Πλάτη' },
  desc: { 
    en: 'Construct a wide, thick back and bulletproof posture with rows and pull-ups.',
    el: 'Κατασκευάστε μια φαρδιά, δυνατή πλάτη και αψεγάδιαστη στάση με κωπηλατικές.' 
  },
  icon: '<path d="M23 18q9-5 18 0l-2 12-7 5-7-5z"/>',
  image: 'media/mid-back/image.webp',
  folder: 'mid-back',
  targets: ['groupMidBack'],
  exercises: [
    {
      id: 'seatedCableRow',
      s: '4 sets · 8-10 reps',
      n: { en: 'Seated Cable Row', el: 'Κωπηλατική Τροχαλίας' },
      m: { en: 'Lats, Mid-back, Biceps', el: 'Πλατύς ραχιαίος, Μεσοπλάτιοι, Δικέφαλοι' },
      media: {
        male: 'media/mid-back/rows/seated-cable-rows-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupMidBack', p: 40, en: 'Lats', el: 'Πλατύς Ραχιαίος' },
        { k: 'groupMidBack', p: 30, en: 'Rhomboids', el: 'Ρομβοειδείς' },
        { k: 'groupBiceps', p: 20, en: 'Biceps', el: 'Δικέφαλοι' },
        { k: 'groupShoulders', p: 10, en: 'Rear delts', el: 'Πίσω Δελτοειδείς' }
      ],
      t: {
        en: [
          'Keep your chest proud and spine neutral throughout.',
          'Drive your elbows back past your torso without swinging.',
          'Squeeze your shoulder blades together at peak contraction.',
          'Return slowly with full arm extension.'
        ],
        el: [
          'Διατηρήστε το στήθος ψηλά και τη σπονδυλική στήλη ουδέτερη.',
          'Οδηγήστε τους αγκώνες σας προς τα πίσω χωρίς ταλάντευση.',
          'Σφίξτε τις ωμοπλάτες σας στο μέγιστο σημείο σύσπασης.',
          'Επιστρέψτε αργά με πλήρη έκταση των χεριών.'
        ]
      }
    },
    {
      id: 'pullUps',
      s: '3 sets · AMRAP',
      n: { en: 'Pull-Ups', el: 'Έλξεις Μονόζυγου' },
      m: { en: 'Lats, Biceps', el: 'Πλατύς ραχιαίος, Δικέφαλοι' },
      media: {
        male: 'media/mid-back/pull-ups/pull-ups-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupMidBack', p: 65, en: 'Lats', el: 'Πλατύς Ραχιαίος' },
        { k: 'groupBiceps', p: 25, en: 'Biceps', el: 'Δικέφαλοι' },
        { k: 'groupShoulders', p: 10, en: 'Teres Major', el: 'Μείζων Στρογγυλός' }
      ],
      t: {
        en: [
          'Initiate the pull by depressing your shoulder blades.',
          'Drive your elbows down and pull your chest to the bar.',
          'Maintain a stable core with no excessive kicking.',
          'Lower yourself under complete control.'
        ],
        el: [
          'Ξεκινήστε την έλξη χαμηλώνοντας τις ωμοπλάτες σας.',
          'Οδηγήστε τους αγκώνες κάτω και φέρτε το στήθος στη μπάρα.',
          'Διατηρήστε σταθερό κορμό χωρίς υπερβολικές κινήσεις.',
          'Κατεβείτε με απόλυτο έλεγχο.'
        ]
      }
    }
  ]
};