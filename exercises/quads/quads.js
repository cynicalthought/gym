window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.quads = {
  name: { en: 'Quads', el: 'Τετρακέφαλοι' },
  desc: { 
    en: 'Drive maximum lower body mass and knee extension through squats and leg presses.',
    el: 'Αποκτήστε μέγιστη μυϊκή μάζα στα πόδια και έκταση γονάτων με βαθιά καθίσματα.' 
  },
  icon: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>',
  image: 'exercises/quads/image.webp',
  folder: 'quads',
  targets: ['groupQuads'],
  exercises: [
    {
  id: 'rowingMachineFemale',
  s: '3 sets · 10-15 mins',
  n: { en: 'Rowing Machine', el: 'Κωπηλατική Μηχανή' },
  m: { en: 'Full Body', el: 'Ολόκληρο Σώμα' },
  media: {
    male: '',
    female: 'exercises/quads/rows/machine-female.webm'
  },
  targets: [
    { k: 'groupQuads', p: 30, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
    { k: 'groupLats', p: 15, en: 'Lats', el: 'Πλατύς Ραχιαίος' },
    { k: 'groupGlutes', p: 15, en: 'Glutes', el: 'Γλουτοί' },
    { k: 'groupLowerBack', p: 10, en: 'Lower Back', el: 'Κάτω Πλάτη' },
    { k: 'groupHamstrings', p: 10, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' },
    { k: 'groupUpperBack', p: 5, en: 'Upper Back', el: 'Άνω Πλάτη' },
    { k: 'groupCalves', p: 5, en: 'Calves', el: 'Γάμπες' },
    { k: 'groupAbs', p: 5, en: 'Core', el: 'Κορμός' },
    { k: 'groupBiceps', p: 5, en: 'Biceps', el: 'Δικέφαλοι' }
  ],
  t: {
    en: [
      'Strap your feet securely into the footplates and grip the handle with both hands.',
      'Push powerfully through your heels to extend your legs while keeping your core braced and back flat.',
      'Once your legs are straight, lean back slightly and pull the handle toward your lower ribs.',
      'Reverse the motion smoothly by extending your arms, hinging forward, and bending your knees back to the start.'
    ],
    el: [
      'Δέστε τα πόδια σας με ασφάλεια στα υποπόδια και πιάστε τη λαβή και με τα δύο χέρια.',
      'Σπρώξτε δυνατά με τις φτέρνες για να τεντώσετε τα πόδια, κρατώντας τον κορμό σφιχτό και την πλάτη ίσια.',
      'Μόλις τεντώσουν τα πόδια, γείρετε ελαφρώς προς τα πίσω και τραβήξτε τη λαβή προς τα κάτω πλευρά.',
      'Επιστρέψτε ομαλά στην αρχική θέση τεντώνοντας πρώτα τα χέρια, γέρνοντας μπροστά και λυγίζοντας τα γόνατα.'
    ]
  }
},

    {
      id: 'burpeeMale',
      s: '3 sets · 10-12 reps',
      n: { en: 'Burpee', el: 'Burpees' },
      m: { en: 'Quads, Full Body', el: 'Τετρακέφαλοι, Ολόκληρο Σώμα' },
      media: {
        male: 'exercises/quads/burpees/burpee-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 60, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupCore', p: 40, en: 'Full Body / Core', el: 'Ολόκληρο Σώμα / Κορμός' }
      ],
      t: {
        en: [
          'Drop down into a squat position with your hands on the floor.',
          'Kick your feet back into a push-up position and perform a push-up.',
          'Jump your feet back to your hands and explosively jump upward.',
          'Land softly and immediately begin the next repetition.'
        ],
        el: [
          'Κατεβείτε σε θέση squat με τα χέρια στο πάτωμα.',
          'Πετάξτε τα πόδια πίσω σε θέση push-up και εκτελέστε κάμψη.',
          'Φέρτε τα πόδια ξανά μπροστά με άλμα και εκτελέστε εκρηκτικό άλμα προς τα πάνω.',
          'Προσγειωθείτε απαλά και ξεκινήστε αμέσως την επόμενη επανάληψη.'
        ]
      }
    },
    {
      id: 'machineLegPress',
      s: '3 sets · 10-12 reps',
      n: { en: 'Leg Press Machine', el: 'Πιέσεις Ποδιών σε Μηχάνημα' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: 'exercises/quads/leg-press/machine-leg-press-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 75, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 25, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Place your feet shoulder-width apart on the sled platform.',
          'Lower the weight safely until your knees form a 90-degree angle.',
          'Press back up through your mid-foot without locking your knees fully.',
          'Keep your lower back firmly against the pad.'
        ],
        el: [
          'Τοποθετήστε τα πόδια στο πλάτος των ώμων στην πλατφόρμα.',
          'Κατεβάστε το βάρος με ασφάλεια μέχρι τα γόνατα να σχηματίσουν γωνία 90 μοιρών.',
          'Πιέστε προς τα πάνω από το μέσο του πέλματος χωρίς να κλειδώσετε τελείως τα γόνατα.',
          'Κρατήστε την κάτω πλάτη σταθερή στο μαξιλάρι.'
        ]
      }
    },
    {
      id: 'inPlaceStep',
      s: '3 sets · 12 reps per leg',
      n: { en: 'In-Place Lunge', el: 'Βήματα επί Τόπου (Lunges)' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: 'exercises/quads/lunges/in-place-step-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 70, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 30, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Step upward onto the platform or elevated surface with control.',
          'Drive through the heel of your working leg to lift your body.',
          'Lower back down slowly with a steady cadence.',
          'Switch legs or complete all reps on one side.'
        ],
        el: [
          'Ανεβείτε στην πλατφόρμα ή στην υπερυψωμένη επιφάνεια με έλεγχο.',
          'Πιέστε μέσα από τη φτέρνα του ποδιού στήριξης για να σηκώσετε το σώμα.',
          'Κατεβείτε αργά με σταθερό ρυθμό.',
          'Αλλάξτε πόδι ή ολοκληρώστε όλες τις επαναλήψεις στη μία πλευρά.'
        ]
      }
    },
    {
      id: 'barbellBackSquat',
      s: '4 sets · 6-8 reps',
      n: { en: 'Barbell Back Squat', el: 'Βαθιά Καθίσματα με Μπάρα' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: 'exercises/quads/squats/barbell-back-squat-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 65, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 35, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Rest the bar across your upper traps and brace your core hard.',
          'Break at your hips and knees simultaneously, lowering under control.',
          'Keep your knees tracking over your toes.',
          'Drive up through your mid-foot to stand back up.'
        ],
        el: [
          'Τοποθετήστε τη μπάρα στους τραπεζοειδείς και σφίξτε τον κορμό.',
          'Λυγίστε ταυτόχρονα γοφούς και γόνατα, κατεβαίνοντας με έλεγχο.',
          'Κρατήστε τα γόνατα ευθυγραμμισμένα με τα δάχτυλα των ποδιών.',
          'Ωθήστε προς τα πάνω χρησιμοποιώντας το μέσο του πέλματος.'
        ]
      }
    },
    {
      id: 'gobletSquat',
      s: '3 sets · 10-12 reps',
      n: { en: 'Goblet Squat', el: 'Καθίσματα Goblet' },
      m: { en: 'Quads, Core', el: 'Τετρακέφαλοι, Κορμός' },
      media: {
        male: '',
        female: 'exercises/quads/squats/goblet-squat-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 75, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupCore', p: 25, en: 'Core & Glutes', el: 'Κορμός & Γλουτοί' }
      ],
      t: {
        en: [
          'Hold a dumbbell or kettlebell close to your chest with both hands.',
          'Squat down between your legs while keeping your torso upright.',
          'Drive your knees outward over your toes at the bottom.',
          'Push through your heels to return to standing.'
        ],
        el: [
          'Κρατήστε έναν αλτήρα ή kettlebell κοντά στο στήθος και με τα δύο χέρια.',
          'Κατεβείτε σε κάθισμα διατηρώντας τον κορμό σε όρθια θέση.',
          'Πιέστε τα γόνατα προς τα έξω πάνω από τα δάχτυλα.',
          'Πιέστε μέσα από τις φτέρνες για να επιστρέψετε στην όρθια θέση.'
        ]
      }
    },
    {
      id: 'barbellSplitSquat',
      s: '3 sets · 8-10 reps per leg',
      n: { en: 'Barbell Split Squat', el: 'Προβολές με Μπάρα (Split Squat)' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: '',
        female: 'exercises/quads/squats/barbell-split-squat-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 70, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 30, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Set a barbell across your upper back and take a staggered split stance.',
          'Lower your body straight down until both knees form 90-degree angles.',
          'Keep your torso tall and core engaged throughout the movement.',
          'Drive through the front foot to push yourself back up.'
        ],
        el: [
          'Τοποθετηθείτε με τη μπάρα στην πλάτη σε διασταυρωμένη στάση (split stance).',
          'Κατεβάστε το σώμα ευθεία κάτω μέχρι τα γόνατα να σχηματίσουν γωνία 90 μοιρών.',
          'Διατηρήστε τον κορμό όρθιο και σφιχτό.',
          'Πιέστε μέσα από το μπροστινό πέλμα για να ανεβείτε.'
        ]
      }
    },
    {
      id: 'stabilityBallSingleLegSquat',
      s: '3 sets · 10-12 reps per leg',
      n: { en: 'Stability Ball Single-Leg Squat', el: 'Μονοποδικό Κάθισμα με Μπάλα Ισορροπίας' },
      m: { en: 'Quads, Core', el: 'Τετρακέφαλοι, Κορμός' },
      media: {
        male: '',
        female: 'exercises/quads/squats/stability-ball-single-leg-squat-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 80, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupCore', p: 20, en: 'Core & Balance', el: 'Κορμός & Ισορροπία' }
      ],
      t: {
        en: [
          'Place a stability ball behind your lower back against a smooth wall.',
          'Lift one foot slightly off the floor and balance on your working leg.',
          'Squat down on the single leg as the ball rolls smoothly down the wall.',
          'Drive through your heel to return to the top position.'
        ],
        el: [
          'Τοποθετήστε μια μπάλα ισορροπίας πίσω από τη μέση σας στον τοίχο.',
          'Σηκώστε το ένα πόδι ελαφρά και ισορροπήστε στο πόδι στήριξης.',
          'Κατεβείτε σε μονοποδικό κάθισμα καθώς η μπάλα κυλάει στον τοίχο.',
          'Πιέστε από τη φτέρνα για να επιστρέψετε στην αρχική θέση.'
        ]
      }
    },
    {
      id: 'uprightTorsoSumo',
      s: '3 sets · 10-12 reps',
      n: { en: 'Upright Torso Sumo Squat', el: 'Καθίσματα Sumo με Όρθιο Κορμό' },
      m: { en: 'Quads, Adductors', el: 'Τετρακέφαλοι, Προσαγωγοί' },
      media: {
        male: '',
        female: 'exercises/quads/squats/upright-torso-sumo-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 65, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 35, en: 'Adductors & Glutes', el: 'Προσαγωγοί & Γλουτοί' }
      ],
      t: {
        en: [
          'Take a wide stance with your toes pointed outwards at a 45-degree angle.',
          'Squat down while keeping your torso explicitly upright and chest high.',
          'Push your knees outward over your toes as you lower down.',
          'Drive through your heels to return to standing.'
        ],
        el: [
          'Πάρτε φαρδιά στάση με τα δάχτυλα των ποδιών στραμμένα προς τα έξω.',
          'Κατεβείτε σε κάθισμα διατηρώντας τον κορμό απόλυτα όρθιο.',
          'Πιέστε τα γόνατα προς τα έξω καθώς χαμηλώνετε.',
          'Πιέστε από τις φτέρνες για να επιστρέψετε στην όρθια θέση.'
        ]
      }
    },
    {
      id: 'barbellBulgarianSplitSquat',
      s: '3 sets · 8-10 reps per leg',
      n: { en: 'Barbell Bulgarian Split Squat', el: 'Βουλγαρικές Προβολές με Μπάρα' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: '',
        female: 'exercises/quads/squats/barbell-bulgarian-split-squat-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 65, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 35, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Place a barbell across your upper back and elevate your rear foot on a bench.',
          'Lower your hips straight down until your front thigh is parallel to the floor.',
          'Keep most of your weight on the front leg and maintain a steady balance.',
          'Drive through the front heel to return to the starting position.'
        ],
        el: [
          'Τοποθετήστε τη μπάρα στην πλάτη και στηρίξτε το πίσω πόδι σε πάγκο.',
          'Κατεβάστε τη λεκάνη ευθεία κάτω μέχρι ο μπροστινός μηρός να έρθει παράλληλα με το έδαφος.',
          'Διατηρήστε το μεγαλύτερο βάρος στο μπροστινό πόδι.',
          'Πιέστε από τη μπροστινή φτέρνα για να επιστρέψετε στην όρθια θέση.'
        ]
      }
    },
    {
      id: 'barbellCleanGripFrontSquat',
      s: '3 sets · 8-10 reps',
      n: { en: 'Barbell Clean-Grip Front Squat', el: 'Καθίσματα με Μπάρα Μπροστά (Με Λαβή Επολέ)' },
      m: { en: 'Quads, Core', el: 'Τετρακέφαλοι, Κορμός' },
      media: {
        male: '',
        female: 'exercises/quads/squats/barbell-clean-grip-front-squat-male.webm'
      },
      targets: [
        { k: 'groupQuads', p: 80, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupCore', p: 20, en: 'Core Stability', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Rest the barbell across your front shoulders with elbows driven high.',
          'Squat down while maintaining a strict vertical torso.',
          'Drive through your heels to return to the top position.'
        ],
        el: [
          'Τοποθετήστε τη μπάρα στο μπροστινό μέρος των ώμων με ψηλά τους αγκώνες.',
          'Κατεβείτε σε κάθισμα διατηρώντας αυστηρά όρθιο τον κορμό.',
          'Πιέστε μέσα από τις φτέρνες για να επιστρέψετε στην αρχική θέση.'
        ]
      }
    },
    {
      id: 'barbell3Female',
      s: '3 sets · 8-10 reps',
      n: { en: 'Barbell Bench Squat', el: 'Καθίσματα με Μπάρα σε Πάγκο' },
      m: { en: 'Quads, Glutes', el: 'Τετρακέφαλοι, Γλουτοί' },
      media: {
        male: 'exercises/quads/squats/barbell-bench-squat-male.webm',
        female: 'exercises/quads/squats/barbell-bench-squat-female.webm'
      },
      targets: [
        { k: 'groupQuads', p: 60, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 40, en: 'Glutes', el: 'Γλουτοί' }
      ],
      t: {
        en: [
          'Stand in front of a sturdy box or bench with the bar on your back.',
          'Hinge back and sit onto the box with control, keeping tension in your core.',
          'Pause briefly on the box without rocking backward.',
          'Explode upward through your mid-foot to a full standing position.'
        ],
        el: [
          'Σταθείτε μπροστά από ένα κουτί ή πάγκο με τη μπάρα στην πλάτη.',
          'Κατεβείτε και καθίστε στο κουτί με έλεγχο, διατηρώντας την τάση στον κορμό.',
          'Κάντε μια σύντομη παύση χωρίς να γείρετε πίσω.',
          'Εκρήξτε προς τα πάνω από το μέσο του πέλματος μέχρι την όρθια θέση.'
        ]
      }
    },
    {
      id: 'barbellLowBarSquatMale',
      s: '4 sets · 6-8 reps',
      n: { en: 'Barbell Low Bar Squat', el: 'Low Bar Καθίσματα με Μπάρα' },
      m: { en: 'Quads, Posterior Chain', el: 'Τετρακέφαλοι, Οπίσθια Αλυσίδα' },
      media: {
        male: 'exercises/quads/squats/barbell-low-bar-squat-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupQuads', p: 55, en: 'Quadriceps', el: 'Τετρακέφαλοι' },
        { k: 'groupGlutes', p: 45, en: 'Glutes & Posterior Chain', el: 'Γλουτοί & Οπίσθια Αλυσίδα' }
      ],
      t: {
        en: [
          'Position the barbell lower on your back across your posterior deltoids.',
          'Hinge slightly more at the hips as you squat down to depth.',
          'Keep your chest tight and brace your core throughout.',
          'Drive through your full foot to stand up tall.'
        ],
        el: [
          'Τοποθετήστε τη μπάρα χαμηλότερα στην πλάτη, στους πίσω δελτοειδείς.',
          'Κάντε ελαφρώς μεγαλύτερη κάμψη στα ισχία καθώς κατεβαίνετε σε βάθος.',
          'Κρατήστε το στήθος σφιχτό και ενεργοποιήστε τον κορμό.',
          'Πιέστε από ολόκληρο το πέλμα για να επιστρέψετε στην όρθια θέση.'
        ]
      }
    }
  ]
};