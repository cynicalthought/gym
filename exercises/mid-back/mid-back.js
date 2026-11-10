window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES['mid-back'] = {
  name: { en: 'Mid-Back', el: 'Μέση Πλάτη' },
  desc: { 
    en: 'Construct a wide, thick back and bulletproof posture with rows and pull-ups.',
    el: 'Κατασκευάστε μια φαρδιά, δυνατή πλάτη και αψεγάδιαστη στάση με κωπηλατικές.' 
  },
  icon: '<path d="M23 18q9-5 18 0l-2 12-7 5-7-5z"/>',
  image: 'exercises/mid-back/image.webp',
  folder: 'mid-back',
  targets: ['groupMidBack'],
  exercises: [
    {
      id: 'seatedCableRow',
      s: '4 sets · 8-10 reps',
      n: { en: 'Seated Cable Row', el: 'Κωπηλατική Τροχαλίας' },
      m: { en: 'Lats, Mid-back, Biceps', el: 'Πλατύς ραχιαίος, Μεσοπλάτιοι, Δικέφαλοι' },
      media: {
        male: 'exercises/mid-back/rows/seated-cable-rows-male.webm',
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
        male: 'exercises/mid-back/pull-ups/pull-ups-male.webm',
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
    },
    {
      id: 'Behind The Neck Lat Pulldown',
      s: '3 sets · 8-12 reps',
      n: { en: 'Behind The Neck Lat Pulldown', el: 'Οπισθολαίμιες Έλξεις Στην Τροχαλία' },
      m: { en: 'Mid-Back, Lats', el: 'Μέση Πλάτη, Πλατύς Ραχιαίος' },
      media: {
        male: 'exercises/mid-back/pull-downs/behind-the-neck-lat-pulldown-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupMidBack', p: 70, en: 'Mid-Back', el: 'Μέση Πλάτη' },
        { k: 'groupBiceps', p: 30, en: 'Biceps', el: 'Δικέφαλοι' }
      ],
      t: {
        en: [
          'Maintain a stable posture and neutral spine alignment.',
          'Execute the movement with controlled tempo.',
          'Focus on peak muscle contraction at the target range.',
          'Return to the starting position smoothly.'
        ],
        el: [
          'Διατηρήστε σταθερή στάση και ουδέτερη ευθυγράμμιση σπονδυλικής στήλης.',
          'Εκτελέστε την κίνηση με ελεγχόμενο ρυθμό.',
          'Εστιάστε στη μέγιστη μυϊκή σύσπαση στο επιθυμητό εύρος.',
          'Επιστρέψτε στην αρχική θέση ομαλά.'
        ]
      }
    },
    {
      id: 'bent-over-barbell-rows',
      s: '3 sets · 8-12 reps',
      n: { en: 'Bent-Over Barbell Rows', el: 'Κωπηλατική Με Μπάρα Σε Επίκυψη' },
      m: { en: 'Mid-Back, Rear Delts', el: 'Μέση Πλάτη, Πίσω Δελτοειδείς' },
      media: {
        male: 'exercises/mid-back/rows/bent-over-barbell-rows-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupMidBack', p: 75, en: 'Mid-Back', el: 'Μέση Πλάτη' },
        { k: 'groupShoulders', p: 25, en: 'Rear Delts', el: 'Πίσω Δελτοειδείς' }
      ],
      t: {
        en: [
          'Keep your upper body braced and stable throughout.',
          'Pull smoothly focusing on scapular retraction.',
          'Hold the contracted position briefly.',
          'Lower the weight with full control.'
        ],
        el: [
          'Κρατήστε το άνω μέρος του σώματος σταθερό σε όλη τη διάρκεια.',
          'Τραβήξτε ομαλά εστιάζοντας στην ανάκληση της ωμοπλάτης.',
          'Κρατήστε τη συσπασμένη θέση για λίγο.',
          'Κατεβάστε το βάρος με πλήρη έλεγχο.'
        ]
      }
    },
    {
      id: 't-bar-row',
      s: '3 sets · 8-12 reps',
      n: { en: 'T-Bar Row', el: 'Κωπηλατική σε T-Bar' },
      m: { en: 'Mid-Back, Lats', el: 'Μέση Πλάτη, Πλατύς Ραχιαίος' },
      media: {
        male: 'exercises/mid-back/rows/t-bar-row-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupMidBack', p: 80, en: 'Mid-Back', el: 'Μέση Πλάτη' },
        { k: 'groupBiceps', p: 20, en: 'Biceps', el: 'Δικέφαλοι' }
      ],
      t: {
        en: [
          'Set your stance and engage your core.',
          'Drive through the movement with correct form.',
          'Squeeze at full contraction.',
          'Release with a slow, controlled descent.'
        ],
        el: [
          'Ρυθμίστε τη στάση σας και ενεργοποιήστε τον κορμό.',
          'Εκτελέστε την κίνηση με σωστή φόρμα.',
          'Σφίξτε στη μέγιστη σύσπαση.',
          'Απελευθερώστε με αργή, ελεγχόμενη κάθοδο.'
        ]
      }
    }
  ]
};