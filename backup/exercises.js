// ============================================================
// EXERCISES.JS — Self-contained exercise library & workout schedule
// Every exercise holds its data, translation, targets, and media paths in one place.
// ============================================================

const CATEGORY_ICONS = {
  groupBiceps: '<path d="M19 22q-5 2-3 9l5 3 4-4-1-7zm26 0q5 2 3 9l-5 3-4-4 1-7z"/>',
  groupChest: '<path d="M25 18q6-4 10 1l-1 9q-6 3-10-1-2-5 1-9zm14 0q-6-4-10 1l1 9q6 3 10-1 2-5-1-9z"/>',
  groupCore: '<path d="M29 31h7v8h-7zm9 0h7v8h-7zm-9 10h7v8h-7zm9 0h7v8h-7z"/>',
  groupCalves: '<path d="M27 42q5 1 9 0l-2 19-5 2-4-13Zm26 0q-5 1-9 0l2 19 5 2 4-13z"/>',
  groupGlutes: '<path d="M25 29q4-5 8-2l-1 10q-6 2-9-2zm14 0q-4-5-8-2l1 10q6 2 9-2z"/>',
  groupHamstrings: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>',
  groupLowerBack: '<path d="M20 26q12-6 24 0l-2 10q-10-4-20 0z"/>',
  groupMidBack: '<path d="M23 18q9-5 18 0l-2 12-7 5-7-5z"/>',
  groupQuads: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>',
  groupShoulders: '<path d="M19 17q6-6 12 0l-2 9-8 2-5-5zm26 0q-6-6-12 0l2 9 8 2 5-5z"/>',
  groupTriceps: '<path d="M18 21q5-3 8 2l-2 11-5 2-4-7zm30 0q-5-3-8 2l2 11 5 2 4-7 z"/>'
};

const TARGET_COLORS = ['#36d399', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981'];

const CATEGORY_TARGETS = {
  groupBiceps: ['groupBiceps'],
  groupChest: ['groupChest'],
  groupCore: ['groupCore'],
  groupCalves: ['groupCalves'],
  groupGlutes: ['groupGlutes'],
  groupHamstrings: ['groupHamstrings'],
  groupLowerBack: ['groupLowerBack'],
  groupMidBack: ['groupMidBack'],
  groupQuads: ['groupQuads'],
  groupShoulders: ['groupShoulders'],
  groupTriceps: ['groupTriceps']
};

const CATEGORY_FOLDER = {
  groupBiceps: 'biceps',
  groupChest: 'chest',
  groupCore: 'core',
  groupCalves: 'calves',
  groupGlutes: 'glutes',
  groupHamstrings: 'hamstrings',
  groupLowerBack: 'lower-back',
  groupMidBack: 'mid-back',
  groupQuads: 'quads',
  groupShoulders: 'shoulders',
  groupTriceps: 'triceps'
};

const I18 = {
  en: {
    schedule: 'Schedule',
    library: 'Exercise library',
    timer: 'Rest timer',
    rt: 'Rest Timer',
    rs: 'Between sets',
    reset: 'Reset',
    start: 'Start',
    close: 'Close',
    d1: 'Back & Biceps',
    d2: 'Chest & Triceps',
    d3: 'Legs',
    d4: 'Shoulders',
    libraryTitle: 'All exercises',
    libraryDescription: 'Browse every exercise in your plan and watch its demonstration.',
    searchExercises: 'Search exercises or muscles',
    libraryPrompt: 'Choose a muscle group above or search for an exercise.',
    resultCount: 'exercises',
    targetDistribution: 'Muscle target distribution',
    panelTargets: 'Target muscles',
    demo: 'Demonstration',
    tips: 'Form cues',
    male: 'Male',
    female: 'Female',
    footer: 'Form first · Consistency always',
    groupBiceps: 'Biceps',
    groupCalves: 'Calves',
    groupChest: 'Chest',
    groupCore: 'Core',
    groupGlutes: 'Glutes',
    groupHamstrings: 'Hamstrings',
    groupLowerBack: 'Lower Back',
    groupMidBack: 'Mid-Back',
    groupQuads: 'Quads',
    groupShoulders: 'Shoulders',
    groupTriceps: 'Triceps',
    descBiceps: 'Build powerful arm mass and peak contraction with focused bicep curls and pulling movements.',
    descCalves: 'Develop lower leg definition and explosive ankle strength through standing and seated raises.',
    descChest: 'Maximize upper body pressing power and pectoral thickness with bench presses and flyes.',
    descCore: 'Forge an unbreakable midsection, stability, and rotational control with planks and crunches.',
    descGlutes: 'Strengthen your posterior power center and hip drive with thrusts, bridges, and deadlifts.',
    descHamstrings: 'Protect your knees and build powerful leg curls with Romanian deadlifts and stretches.',
    descLowerBack: 'Strengthen your spinal erectors and posterior chain to prevent injury and improve posture.',
    descMidBack: 'Construct a wide, thick back and bulletproof posture with rows and pull-ups.',
    descQuads: 'Drive maximum lower body mass and knee extension through squats and leg presses.',
    descShoulders: 'Build impressive 3D delt width and overhead stability with presses and lateral raises.',
    descTriceps: 'Add massive arm thickness and lockout power with heavy presses and cable pushdowns.'
  },
  el: {
    schedule: 'Πρόγραμμα',
    library: 'Βιβλιοθήκη ασκήσεων',
    timer: 'Χρονόμετρο',
    rt: 'Χρονόμετρο Ξεκούρασης',
    rs: 'Μεταξύ σετ',
    reset: 'Επαναφορά',
    start: 'Εκκίνηση',
    close: 'Κλείσιμο',
    d1: 'Πλάτη & Δικέφαλοι',
    d2: 'Στήθος & Τρικέφαλοι',
    d3: 'Πόδια',
    d4: 'Ώμοι',
    libraryTitle: 'Όλες οι ασκήσεις',
    libraryDescription: 'Περιηγηθείτε σε κάθε άσκηση του προγράμματός σας και δείτε την επίδειξη.',
    searchExercises: 'Αναζήτηση ασκήσεων ή μυών',
    libraryPrompt: 'Επιλέξτε μια μυϊκή ομάδα παραπάνω ή αναζητήστε μια άσκηση.',
    resultCount: 'ασκήσεις',
    targetDistribution: 'Κατανομή μυϊκών στόχων',
    panelTargets: 'Στοχευμένοι μυς',
    demo: 'Επίδειξη',
    tips: 'Οδηγίες εκτέλεσης',
    male: 'Άνδρας',
    female: 'Γυναίκα',
    footer: 'Η φόρμα προηγείται · Η συνέπεια μετράει',
    groupBiceps: 'Δικέφαλοι',
    groupCalves: 'Γάμπες',
    groupChest: 'Στήθος',
    groupCore: 'Κορμός',
    groupGlutes: 'Γλουτοί',
    groupHamstrings: 'Οπίσθιοι Μηριαίοι',
    groupLowerBack: 'Κάτω Πλάτη',
    groupMidBack: 'Μέση Πλάτη',
    groupQuads: 'Τετρακέφαλοι',
    groupShoulders: 'Ώμοι',
    groupTriceps: 'Τρικέφαλοι',
    descBiceps: 'Χτίστε μυϊκή μάζα και δύναμη στα χέρια με στοχευμένες κάμψεις και ασκήσεις έλξης.',
    descCalves: 'Αναπτύξτε τις γάμπες και την εκρηκτική δύναμη με άρσεις όρθιους και καθιστούς.',
    descChest: 'Μεγιστοποιήστε τη δύναμη πίεσης και το πάχος του στήθους με πιέσεις πάγκου.',
    descCore: 'Δημιουργήστε έναν ατσάλινο κορμό, σταθερότητα και έλεγχο με σανίδες και κοιλιακούς.',
    descGlutes: 'Ενισχύστε το κέντρο δύναμης και την ώθηση ισχίου με hip thrusts και deadlifts.',
    descHamstrings: 'Προστατέψτε τα γόνατα και χτίστε ισχυρούς δικεφάλους μηριαίους με RDLs.',
    descLowerBack: 'Ενισχύστε τους εκτείνοντες της σπονδυλικής στήλης για αποφυγή τραυματισμών και σωστή στάση.',
    descMidBack: 'Κατασκευάστε μια φαρδιά, δυνατή πλάτη και αψεγάδιαστη στάση με κωπηλατικές.',
    descQuads: 'Αποκτήστε μέγιστη μυϊκή μάζα στα πόδια και έκταση γονάτων με βαθιά καθίσματα.',
    descShoulders: 'Χτίστε εντυπωσιακούς ώμους 3D και σταθερότητα πάνω από το κεφάλι με πιέσεις.',
    descTriceps: 'Προσθέστε τεράστιο όγκο και δύναμη στα χέρια με πιέσεις και τροχαλίες τρικεφάλων.'
  }
};

const D = {
  1: [
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
    },
    {
      id: 'dumbbellCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Dumbbell Bicep Curl', el: 'Κάμψεις Δικεφάλων με Αλτήρες' },
      m: { en: 'Biceps, Forearms', el: 'Δικέφαλοι, Πήχεις' },
      media: {
        male: 'media/biceps/standing-inner-biceps-dumbbell-curls/standing-inner-biceps-dumbbell-curls-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 75, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 25, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Pin your elbows strictly to your sides.',
          'Supinate your wrists as you curl upward.',
          'Squeeze hard at the top position.',
          'Lower with control, fully extending your arms.'
        ],
        el: [
          'Κρατήστε τους αγκώνες σας κολλημένους στα πλάγια.',
          'Περιστρέψτε τους καρπούς προς τα έξω καθώς ανεβάζετε.',
          'Σφίξτε δυνατά στην κορυφή της κίνησης.',
          'Κατεβείτε με έλεγχο, εκτείνοντας πλήρως τα χέρια.'
        ]
      }
    },
    {
      id: 'preacherCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Preacher Curl', el: 'Κάμψεις Preacher' },
      m: { en: 'Biceps', el: 'Δικέφαλοι' },
      media: {
        male: 'media/biceps/preacher-curls-barbell/preacher-curls-barbell-male.gif',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 85, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 15, en: 'Brachioradialis', el: 'Βραχιoκερκιδικός' }
      ],
      t: {
        en: [
          'Rest your upper arms firmly against the pad.',
          'Avoid lifting your hips off the seat.',
          'Control the negative descent completely.',
          'Do not lock out your elbows harshly at the bottom.'
        ],
        el: [
          'Ακουμπήστε τα μπράτσα σας σταθερά πάνω στο μαξιλάρι.',
          'Αποφύγετε να σηκώνετε τους γοφούς σας από το κάθισμα.',
          'Ελέγξτε πλήρως την αρνητική φάση.',
          'Μην τεντώνετε υπερβολικά τους αγκώνες στο κάτω μέρος.'
        ]
      }
    }
  ],
  2: [
    {
      id: 'benchPress',
      s: '4 sets · 6-8 reps',
      n: { en: 'Barbell / Dumbbell Bench Press', el: 'Πιέσεις Στήθους' },
      m: { en: 'Chest, Triceps, Anterior Delts', el: 'Στήθος, Τρικέφαλοι, Πρόσθιοι Δελτοειδείς' },
      media: {
        male: 'media/chest/bench-press/flat-dumbbells-male.webm',
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
        male: 'media/chest/bench-press/incline-dumbbells-male.webm',
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
        male: 'media/chest/push-ups/push-ups-male.webm',
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
          'Τοποθετήστε τα χέρια ελαφρώς πιο φαρδιά από τους ώμους.',
          'Κατεβάστε το στήθος μέχρι να φτάσει ελάχιστα πάνω από το πάτωμα.',
          'Εκτείνετε πλήρως τα χέρια σας στην κορυφή.'
        ]
      }
    },
    {
      id: 'pushdown',
      s: '3 sets · 12-15 reps',
      n: { en: 'Tricep Cable Pushdown', el: 'Πιέσεις Τρικεφάλων στην Τροχαλία' },
      m: { en: 'Triceps', el: 'Τρικέφαλοι' },
      media: {
        male: 'media/triceps/pushdowns/standing-cable-male.gif',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 80, en: 'Lateral & Long Head', el: 'Πλάγια & Μακρά Κεφαλή' },
        { k: 'groupTriceps', p: 20, en: 'Medial Head', el: 'Έσω Κεφαλή' }
      ],
      t: {
        en: [
          'Hinge slightly forward at the hips with a stable core.',
          'Keep your elbows pinned to your sides.',
          'Extend fully and flex your triceps at the bottom.',
          'Control the upward return.'
        ],
        el: [
          'Γείρετε ελαφρώς μπροστά από τους γοφούς με σταθερό κορμό.',
          'Κρατήστε τους αγκώνες κολλημένους στα πλάγια.',
          'Εκτείνετε πλήρως και σφίξτε τους τρικεφάλους στο κάτω μέρος.',
          'Ελέγξτε την ανοδική επιστροφή.'
        ]
      }
    }
  ],
  3: [
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
      id: 'rdl',
      s: '3 sets · 8-10 reps',
      n: { en: 'Romanian Deadlift (RDL)', el: 'Άρσεις Θανάτου με Τεντωμένα Πόδια (RDL)' },
      m: { en: 'Hamstrings, Glutes, Lower back', el: 'Οπίσθιοι Μηριαίοι, Γλουτοί, Κάτω Πλάτη' },
      media: {
        male: 'media/hamstrings/romanian-deadlifts/barbell-male.gif',
        female: 'media/hamstrings/romanian-deadlifts/dumbbells-female.webm'
      },
      targets: [
        { k: 'groupHamstrings', p: 60, en: 'Hamstrings', el: 'Οπίσθιοι Μηριαίοι' },
        { k: 'groupGlutes', p: 25, en: 'Glutes', el: 'Γλουτοί' },
        { k: 'groupMidBack', p: 15, en: 'Erector Spinae', el: 'Εκτείνοντες Ράχης' }
      ],
      t: {
        en: [
          'Maintain a slight bend in your knees throughout.',
          'Hinge backward at your hips, pushing your glutes out.',
          'Keep the bar or dumbbells gliding close to your shins.',
          'Feel a deep stretch in your hamstrings before returning.'
        ],
        el: [
          'Διατηρήστε μια ελαφριά κάμψη στα γόνατα σε όλη τη διάρκεια.',
          'Σπρώξτε τους γοφούς σας προς τα πίσω.',
          'Κρατήστε τη μπάρα ή τους αλτήρες κοντά στις κνήμες σας.',
          'Νιώστε βαθιά διάταση στους μηριαίους πριν επανέλθετε.'
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
    },
    {
      id: 'standingCalfRaise',
      s: '3 sets · 15-20 reps',
      n: { en: 'Standing Calf Raise', el: 'Άρσεις Γαστροκνημίων Όρθιος' },
      m: { en: 'Calves', el: 'Γαστροκνήμιες (Γάμπες)' },
      media: {
        male: '',
        female: 'media/calves/dumbbell-standing-calf-raise/dumbbell-standing-calf-raise-female.webm'
      },
      targets: [
        { k: 'groupCalves', p: 80, en: 'Gastrocnemius', el: 'Γαστροκνήμιος' },
        { k: 'groupCalves', p: 20, en: 'Soleus', el: 'Υποκνημίδιος' }
      ],
      t: {
        en: [
          'Place the balls of your feet securely on an elevated platform.',
          'Lower your heels fully to get a complete stretch at the bottom.',
          'Rise up onto your toes as high as possible.',
          'Pause briefly at peak contraction.'
        ],
        el: [
          'Τοποθετήστε τα μπροστινό τμήμα των πελμάτων σε υπερυψωμένη βάση.',
          'Χαμηλώστε τις φτέρνες πλήρως για μέγιστη διάταση.',
          'Ανεβείτε στις μύτες των ποδιών όσο πιο ψηλά γίνεται.',
          'Κάντε μια σύντομη παύση στην κορυφή.'
        ]
      }
    }
  ],
  4: [
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

const LIBRARY_EXTRAS = [
  {
    id: 'stabilityBall',
    s: '3 sets · 12-15 reps',
    n: { en: 'Stability Ball Rollout', el: 'Κύλιση Μπάλας Σταθερότητας' },
    m: { en: 'Core, Abs, Lower Back', el: 'Κορμός, Κοιλιακοί, Κάτω Πλάτη' },
    media: {
      male: '',
      female: 'media/core/stability ball/rollout-on-knees-female.webm'
    },
    targets: [
      { k: 'groupCore', p: 70, en: 'Core / Abs', el: 'Κορμός / Κοιλιακοί' },
      { k: 'groupLowerBack', p: 30, en: 'Lower Back', el: 'Κάτω Πλάτη' }
    ],
    t: {
      en: [
        'Keep your core braced tightly throughout the movement.',
        'Do not let your hips sag toward the floor.',
        'Control the roll outward and pull back smoothly using your abs.'
      ],
      el: [
        'Κρατήστε τον κορμό σας σφιχτό σε όλη τη διάρκεια της κίνησης.',
        'Μην αφήσετε τους γοφούς σας να πέσουν προς το πάτωμα.',
        'Ελέγξτε το κύλισμα προς τα έξω και τραβήξτε πίσω ομαλά.'
      ]
    }
  },
  {
    id: 'reverseCrunch',
    s: '3 sets · 12-15 reps',
    n: { en: 'Reverse Crunch', el: 'Ανάποδοι Κοιλιακοί' },
    m: { en: 'Lower Abs, Core', el: 'Κάτω Κοιλιακοί, Κορμός' },
    media: {
      male: 'media/core/crunches/reverse-crunch-male.webm',
      female: 'media/core/crunches/reverse-crunch-female.webm'
    },
    targets: [
      { k: 'groupCore', p: 85, en: 'Lower Abdominals', el: 'Κάτω Κοιλιακοί' },
      { k: 'groupCore', p: 15, en: 'Hip Flexors', el: 'Καμπτήρες Ισχίου' }
    ],
    t: {
      en: [
        'Lie flat on your back with arms resting by your sides.',
        'Bring your knees toward your chest and lift your hips.',
        'Control the descent without letting your lower back arch.'
      ],
      el: [
        'Ξαπλώστε ανάσκελα με τα χέρια στα πλάγια.',
        'Φέρετε τα γόνατα προς το στήθος και σηκώστε ελαφρά τους γοφούς.',
        'Ελέγξτε την κάθοδο χωρίς να καμπυλώσετε τη μέση.'
      ]
    }
  },
  {
    id: 'frontPlank',
    s: '3 sets · 45-60 sec',
    n: { en: 'Front Plank', el: 'Σανίδα Εμπρός' },
    m: { en: 'Core, Transverse Abdominis', el: 'Κορμός, Εγκάρσιος Κοιλιακός' },
    media: {
      male: 'media/core/planks/long-lever-front-plank-male.webm',
      female: ''
    },
    targets: [
      { k: 'groupCore', p: 80, en: 'Core / Abs', el: 'Κορμός / Κοιλιακοί' },
      { k: 'groupShoulders', p: 20, en: 'Shoulders', el: 'Ώμοι' }
    ],
    t: {
      en: [
        'Keep your elbows directly beneath your shoulders.',
        'Squeeze your glutes and brace your abs as hard as possible.',
        'Do not let your hips drop or pike upward.'
      ],
      el: [
        'Κρατήστε τους αγκώνες ακριβώς κάτω από τους ώμους.',
        'Σφίξτε τους γοφούς και τους κοιλιακούς όσο πιο δυνατά μπορείτε.',
        'Μην αφήσετε τη λεκάνη να πέσει ή να ανέβει ψηλά.'
      ]
    }
  },
  {
    id: 'lyingLegRaises',
    s: '3 sets · 12-15 reps',
    n: { en: 'Lying Leg Raises', el: 'Άρσεις Ποδιών Ξαπλωτός' },
    m: { en: 'Lower Abs, Core', el: 'Κάτω Κοιλιακοί, Κορμός' },
    media: {
      male: 'video_1.webm',
      female: 'video_1.webm'
    },
    targets: [
      { k: 'groupCore', p: 80, en: 'Lower Abdominals', el: 'Κάτω Κοιλιακοί' },
      { k: 'groupCore', p: 20, en: 'Hip Flexors', el: 'Καμπτήρες Ισχίου' }
    ],
    t: {
      en: [
        'Lie flat on your back with your hands placed securely under your glutes.',
        'Keep your legs straight and lift them slowly until vertical.',
        'Lower your legs under control without letting your lower back arch off the floor.'
      ],
      el: [
        'Ξαπλώστε ανάσκελα με τα χέρια σας τοποθετημένα σταθερά κάτω από τους γοφούς.',
        'Κρατήστε τα πόδια τεντωμένα και σηκώστε τα αργά μέχρι να γίνουν κάθετα.',
        'Χαμηλώστε τα πόδια με έλεγχο χωρίς να αφήσετε τη μέση να ξεκολλήσει από το πάτωμα.'
      ]
    }
  },
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
  },
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
];