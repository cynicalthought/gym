window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.triceps = {
  name: { en: 'Triceps', el: 'Τρικέφαλοι' },
  desc: { 
    en: 'Add massive arm thickness and lockout power with heavy presses and cable pushdowns.',
    el: 'Προσθέστε τεράστιο όγκο και δύναμη στα χέρια με πιέσεις και τροχαλίες τρικεφάλων.' 
  },
  icon: '<path d="M18 21q5-3 8 2l-2 11-5 2-4-7zm30 0q-5-3-8 2l2 11 5 2 4-7z"/>',
  image: 'exercises/triceps/image.webp',
  folder: 'triceps',
  targets: ['groupTriceps'],
  exercises: [
    {
      id: 'forearmPushUps',
      s: '3 sets · 10-15 reps',
      n: { en: 'Forearm Push-Ups', el: 'Κάμψεις σε Πήχεις (Forearm Push-Ups)' },
      m: { en: 'Triceps, Chest', el: 'Τρικέφαλοι, Στήθος' },
      media: {
        male: 'exercises/triceps/forearm-push-ups/forearm-push-ups-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 70, en: 'Triceps', el: 'Τρικέφαλοι' },
        { k: 'groupChest', p: 30, en: 'Chest', el: 'Στήθος' }
      ],
      t: {
        en: [
          'Start in a standard plank position resting on your forearms.',
          'Push up through your palms to elevate your body until your arms are fully extended.',
          'Engage your triceps strongly throughout the pressing motion.',
          'Lower back down to your forearms with complete control.'
        ],
        el: [
          'Ξεκινήστε σε κλασική θέση σανίδας στηριζόμενοι στους πήχεις.',
          'Πιέστε προς τα πάνω μέσα από τις παλάμες μέχρι τα χέρια να τεντωθούν πλήρως.',
          'Ενεργοποιήστε έντονα τους τρικεφάλους σε όλη τη διάρκεια της κίνησης.',
          'Κατεβείτε ξανά στους πήχεις με απόλυτο έλεγχο.'
        ]
      }
    },
    {
      id: 'standingDumbbellTricepsExtensions',
      s: '3 sets · 10-12 reps',
      n: { en: 'Standing Dumbbell Triceps Extension', el: 'Γαλλικές Πιέσεις Τρικεφάλων με Αλτήρα Όρθιος' },
      m: { en: 'Triceps (Long Head)', el: 'Τρικέφαλοι (Μακρά Κεφαλή)' },
      media: {
        male: 'exercises/triceps/overhead-extensions/standing-dumbbell-triceps-extensions-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 85, en: 'Triceps Long Head', el: 'Μακρά Κεφαλή Τρικεφάλων' },
        { k: 'groupCore', p: 15, en: 'Core Stability', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Stand tall and hold a dumbbell overhead with both hands.',
          'Keep your elbows pointing forward and close to your head.',
          'Lower the dumbbell behind your head with a controlled motion.',
          'Extend your arms back up to the starting position by contracting your triceps.'
        ],
        el: [
          'Σταθείτε όρθιοι κρατώντας έναν αλτήρα πάνω από το κεφάλι με τα δύο χέρια.',
          'Κρατήστε τους αγκώνες να δείχνουν μπροστά και κοντά στο κεφάλι.',
          'Κατεβάστε τον αλτήρα πίσω από το κεφάλι με ελεγχόμενη κίνηση.',
          'Εκτείνετε τα χέρια προς τα πάνω συσπώντας τους τρικεφάλους.'
        ]
      }
    },
    {
      id: 'benchDips',
      s: '3 sets · 10-12 reps',
      n: { en: 'Bench Dips', el: 'Βυθίσεις σε Πάγκο (Bench Dips)' },
      m: { en: 'Triceps, Chest, Shoulders', el: 'Τρικέφαλοι, Στήθος, Ώμοι' },
      media: {
        male: 'exercises/triceps/dips/bench-dips-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 65, en: 'Triceps', el: 'Τρικέφαλοι' },
        { k: 'groupChest', p: 20, en: 'Pectorals', el: 'Στήθος' },
        { k: 'groupShoulders', p: 15, en: 'Anterior Delts', el: 'Πρόσθιοι Δελτοειδείς' }
      ],
      t: {
        en: [
          'Place your hands shoulder-width apart on the edge of a stable bench.',
          'Extend your legs straight out in front of you with heels on the floor.',
          'Lower your body by bending your elbows until they form a 90-degree angle.',
          'Push back up to the starting position using your triceps.'
        ],
        el: [
          'Τοποθετήστε τα χέρια στο πλάτος των ώμων στην άκρη ενός σταθερού πάγκου.',
          'Τεντώστε τα πόδια μπροστά με τις φτέρνες στο πάτωμα.',
          'Κατεβάστε το σώμα λυγίζοντας τους αγκώνες μέχρι να σχηματίσουν γωνία 90 μοιρών.',
          'Πιέστε προς τα πάνω χρησιμοποιώντας τους τρικεφάλους.'
        ]
      }
    },
    {
      id: 'cableOverheadRopeTricepsExtension',
      s: '3 sets · 10-12 reps',
      n: { en: 'Cable Overhead Rope Triceps Extensions', el: 'Εκτάσεις Τρικεφάλων Πάνω Από το Κεφάλι με Σχοινί στην Τροχαλία' },
      m: { en: 'Triceps (Long Head)', el: 'Τρικέφαλοι (Μακρά Κεφαλή)' },
      media: {
        male: 'exercises/triceps/overhead-extensions/cable-overhead-rope-triceps-extension-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupTriceps', p: 90, en: 'Triceps Long Head', el: 'Μακρά Κεφαλή Τρικεφάλων' },
        { k: 'groupCore', p: 10, en: 'Core Stability', el: 'Σταθερότητα Κορμού' }
      ],
      t: {
        en: [
          'Attach a rope or straight bar to a low or medium cable pulley.',
          'Face away from the machine, holding the attachment overhead with elbows pointing forward.',
          'Extend your arms forward and upward, fully contracting your triceps.',
          'Return slowly with complete control behind your head.'
        ],
        el: [
          'Συνδέστε ένα σχοινί ή ίσια μπάρα σε μεσαία ή χαμηλή τροχαλία.',
          'Σταθείτε με την πλάτη προς το μηχάνημα, κρατώντας το εξάρτημα πάνω από το κεφάλι.',
          'Εκτείνετε τα χέρια μπροστά και επάνω, συσπώντας πλήρως τους τρικεφάλους.',
          'Επιστρέψτε αργά με απόλυτο έλεγχο πίσω από το κεφάλι.'
        ]
      }
    }
  ]
};