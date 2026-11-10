window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.core = {
  name: { en: 'Core', el: 'Κορμός' },
  desc: { 
    en: 'Strengthen your abdominal wall, obliques, and lower back stability with targeted core movements.',
    el: 'Ενδυναμώστε τους κοιλιακούς, τους πλάγιους και τη σταθερότητα του κορμού.' 
  },
  icon: '<path d="M18 16h12v16H18z"/>',
  image: 'exercises/core/image.webp',
  folder: 'core',
  targets: ['groupCore'],
  exercises: [
    {
      id: 'doubleCrunch',
      s: '3 sets · 12-15 reps',
      n: { en: 'Double Crunch', el: 'Διπλές Κάμψεις Κοιλιακών' },
      m: { en: 'Rectus Abdominis, Core', el: 'Ορθός Κοιλιακός, Κορμός' },
      media: {
        male: 'exercises/core/crunches/double-crunch-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupCore', p: 85, en: 'Abs', el: 'Κοιλιακοί' },
        { k: 'groupCore', p: 15, en: 'Hip Flexors', el: 'Καμπτήρες Ισχίου' }
      ],
      t: {
        en: [
          'Lie flat on your back with knees bent and hands lightly behind your head.',
          'Simultaneously curl your upper torso and bring your knees toward your chest.',
          'Squeeze your abs hard at the point of maximum contraction.',
          'Lower with control back to the starting position.'
        ],
        el: [
          'Ξαπλώστε ανάσκελα με τα γόνατα λυγισμένα και τα χέρια ελαφρά πίσω από το κεφάλι.',
          'Συγχρόνως σηκώστε τον κορμό και φέρετε τα γόνατα προς το στήθος.',
          'Σφίξτε δυνατά τους κοιλιακούς στο σημείο μέγιστης σύσπασης.',
          'Κατεβάστε με έλεγχο πίσω στην αρχική θέση.'
        ]
      }
    },
    {
      id: 'reverseCrunch',
      s: '3 sets · 12-15 reps',
      n: { en: 'Reverse Crunch', el: 'Ανάποδες Κάμψεις Κοιλιακών' },
      m: { en: 'Lower Abs', el: 'Κάτω Κοιλιακοί' },
      media: {
        male: 'exercises/core/crunches/reverse-crunch-male.webm',
        female: 'exercises/core/crunches/reverse-crunch-female.webm'
      },
      targets: [
        { k: 'groupCore', p: 80, en: 'Lower Rectus Abdominis', el: 'Κάτω Κοιλιακοί' },
        { k: 'groupCore', p: 20, en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' }
      ],
      t: {
        en: [
          'Lie on your back with arms flat by your sides and knees bent at 90 degrees.',
          'Contract your lower abs to curl your hips off the floor.',
          'Bring your knees toward your chest in a controlled motion.',
          'Lower your hips back down slowly without touching the floor.'
        ],
        el: [
          'Ξαπλώστε ανάσκελα με τα χέρια στα πλάγια και τα γόνατα λυγισμένα στις 90 μοίρες.',
          'Συσπάστε τους κάτω κοιλιακούς για να σηκώσετε τη λεκάνη από το πάτωμα.',
          'Φέρε τα γόνατα προς το στήθος με ελεγχόμενη κίνηση.',
          'Κατεβάστε αργά τη λεκάνη πίσω χωρίς να ακουμπήσει στο έδαφος.'
        ]
      }
    },
    {
      id: 'crunch',
      s: '3 sets · 15-20 reps',
      n: { en: 'Crunch', el: 'Κλασικές Κάμψεις Κοιλιακών' },
      m: { en: 'Upper Abs', el: 'Άνω Κοιλιακοί' },
      media: {
        male: '',
        female: 'exercises/core/crunches/crunch-female.webm'
      },
      targets: [
        { k: 'groupCore', p: 90, en: 'Rectus Abdominis', el: 'Ορθός Κοιλιακός' },
        { k: 'groupCore', p: 10, en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' }
      ],
      t: {
        en: [
          'Lie on your back with knees bent and feet flat on the floor.',
          'Place hands lightly behind your head without pulling your neck.',
          'Curl your shoulder blades off the floor using your abdominals.',
          'Lower back down with control.'
        ],
        el: [
          'Ξαπλώστε ανάσκελα με τα γόνατα λυγισμένα και τα πέλματα στο πάτωμα.',
          'Τοποθετήστε τα χέρια ελαφρά πίσω από το κεφάλι χωρίς να τραβάτε τον αὐχένα.',
          'Σηκώστε τις ωμοπλάτες από το πάτωμα χρησιμοποιώντας τους κοιλιακούς.',
          'Κατεβείτε ξανά κάτω με έλεγχο.'
        ]
      }
    },
    {
      id: 'rolloutOnKnees',
      s: '3 sets · 10-12 reps',
      n: { en: 'Rollout on Knees', el: 'Rollout στα Γόνατα' },
      m: { en: 'Transverse Abdominis, Core', el: 'Εγκάρσιος Κοιλιακός, Κορμός' },
      media: {
        male: '',
        female: 'exercises/core/stability ball/rollout-on-knees-female.webm'
      },
      targets: [
        { k: 'groupCore', p: 80, en: 'Deep Core', el: 'Βαθύς Κορμός' },
        { k: 'groupShoulders', p: 20, en: 'Shoulders', el: 'Ώμοι' }
      ],
      t: {
        en: [
          'Kneel on the floor holding an ab wheel or barbell.',
          'Brace your core and roll forward by extending your arms and torso.',
          'Keep your back straight and hips extended as you roll out.',
          'Pull yourself back to the starting position using your core.'
        ],
        el: [
          'Γονατίστε στο πάτωμα κρατώντας έναν τροχό κοιλιακών ή μια μπάρα.',
          'Σφίξτε τον κορμό και κυλήστε μπροστά τεντώνοντας τα χέρια και τον κορμό.',
          'Κρατήστε την πλάτη ίσια και τη λεκάνη σταθερή.',
          'Τραβήξτε τον εαυτό σας πίσω στην αρχική θέση με τη δύναμη των κοιλιακών.'
        ]
      }
    },
    {
      id: 'seatedRussianTwist',
      s: '3 sets · 15-20 reps',
      n: { en: 'Seated Russian Twist', el: 'Ρωσικές Στροφές Καθιστός' },
      m: { en: 'Obliques, Core', el: 'Πλάγιοι Κοιλιακοί, Κορμός' },
      media: {
        male: 'exercises/core/twists/seated-russian-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupCore', p: 80, en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' },
        { k: 'groupCore', p: 20, en: 'Rectus Abdominis', el: 'Ορθός Κοιλιακός' }
      ],
      t: {
        en: [
          'Sit on the floor with knees bent and lean your torso back slightly.',
          'Lift your feet slightly off the floor for an extra challenge.',
          'Rotate your torso from side to side, touching the floor beside you.',
          'Maintain a controlled rhythm throughout.'
        ],
        el: [
          'Καθίστε στο πάτωμα με τα γόνατα λυγισμένα και γύρστε τον κορμό ελαφρώς πίσω.',
          'Σηκώστε τα πόδια ελαφρώς από το πάτωμα για μεγαλύτερη δυσκολία.',
          'Περιστρέψτε τον κορμό από πλευρά σε πλευρά, ακουμπώντας το πάτωμα δίπλα σας.',
          'Διατηρήστε ελεγχόμενο ρυθμό σε όλη τη διάρκεια.'
        ]
      }
    },
    {
      id: 'hangingObliqueKneeRaise',
      s: '3 sets · 10-12 reps',
      n: { en: 'Hanging Oblique Knee Raise', el: 'Πλάγιες Άρσεις Γοφών σε Μονόζυγο' },
      m: { en: 'Obliques, Lower Abs', el: 'Πλάγιοι Κοιλιακοί, Κάτω Κοιλιακοί' },
      media: {
        male: 'exercises/core/twists/hanging oblique knee raise exercise-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupCore', p: 75, en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' },
        { k: 'groupCore', p: 25, en: 'Lower Abs', el: 'Κάτω Κοιλιακοί' }
      ],
      t: {
        en: [
          'Hang securely from a pull-up bar with straight arms.',
          'Raise your knees upward while angling them toward your side/shoulder.',
          'Lower with control and switch sides on the next rep.',
          'Avoid swinging your body.'
        ],
        el: [
          'Κρεμαστείτε με ασφάλεια από μονόζυγο με τεντωμένα χέρια.',
          'Ανεβάστε τα γόνατα προς τα πάνω στρέφοντάς τα προς το πλάι/ώμο.',
          'Κατεβάστε με έλεγχο και αλλάξτε πλευρά στην επόμενη επανάληψη.',
          'Αποφύγετε την αιώρηση του σώματος.'
        ]
      }
    },
    {
      id: 'longLeverFrontPlank',
      s: '3 sets · 30-45 sec',
      n: { en: 'Long Lever Front Plank', el: 'Σανίδα Μακρού Μοχλού' },
      m: { en: 'Deep Core, Transverse Abdominis', el: 'Βαθύς Κορμός, Εγκάρσιος Κοιλιακός' },
      media: {
        male: 'exercises/core/planks/long-lever-front-plank-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupCore', p: 85, en: 'Deep Core', el: 'Βαθύς Κορμός' },
        { k: 'groupCore', p: 15, en: 'Shoulders', el: 'Ώμοι' }
      ],
      t: {
        en: [
          'Set up in a forearm plank position but move your elbows further forward.',
          'This increases the lever arm and places significantly more load on your core.',
          'Keep your body rigid and prevent your lower back from sagging.',
          'Breathe steadily and hold.'
        ],
        el: [
          'Τοποθετηθείτε σε θέση σανίδας πήχη αλλά μετακινήστε τους αγκώνες πιο μπροστά.',
          'Αυτό αυξάνει τον μοχλό και επιβαρύνει σημαντικά περισσότερο τον κορμό.',
          'Κρατήστε το σώμα άκαμπτο και αποτρέψτε την πτώση της μέσης.',
          'Αναπνεύστε σταθερά και κρατήστε τη θέση.'
        ]
      }
    },
    {
      id: 'sidePlank',
      s: '3 sets · 30-45 sec per side',
      n: { en: 'Side Plank', el: 'Πλάγια Σανίδα' },
      m: { en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' },
      media: {
        male: 'exercises/core/planks/side-plank-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupCore', p: 85, en: 'Obliques', el: 'Πλάγιοι Κοιλιακοί' },
        { k: 'groupCore', p: 15, en: 'Abductors', el: 'Απαγωγοί' }
      ],
      t: {
        en: [
          'Lie on your side supporting your upper body on your forearm.',
          'Lift your hips so your body forms a straight diagonal line.',
          'Engage your obliques and prevent your hips from sagging.',
          'Hold for time and switch sides.'
        ],
        el: [
          'Ξαπλώστε στο πλάι στηρίζοντας το σώμα στον πήχη.',
          'Σηκώστε τη λεκάνη ώστε το σώμα να σχηματίζει ευθεία διαγώνια γραμμή.',
          'Σφίξτε τους πλάγιους κοιλιακούς και αποτρέψτε την πτώση της λεκάνης.',
          'Κρατήστε για τον καθορισμένο χρόνο και αλλάξτε πλευρά.'
        ]
      }
    }
  ]
};