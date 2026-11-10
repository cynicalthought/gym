window.EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};
window.EXERCISE_CATEGORIES.biceps = {
  name: { en: 'Biceps', el: 'Δικέφαλοι' },
  desc: { 
    en: 'Build powerful arm mass and peak contraction with focused bicep curls and pulling movements.',
    el: 'Χτίστε μυϊκή μάζα και δύναμη στα χέρια με στοχευμένες κάμψεις και ασκήσεις έλξης.' 
  },
  icon: '<path d="M19 22q-5 2-3 9l5 3 4-4-1-7zm26 0q5 2 3 9l-5 3-4-4 1-7z"/>',
  image: 'exercises/biceps/image.webp',
  folder: 'biceps',
  targets: ['groupBiceps'],
  exercises: [
    {
      id: 'preacherCurlEzBar',
      s: '3 sets · 10-12 reps',
      n: { en: 'Preacher Curl EZ-Bar', el: 'Κάμψεις Preacher με Μπάρα EZ' },
      m: { en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
      media: {
        male: 'exercises/biceps/preacher-curls/seated-ez-bar-preacher-curl-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 85, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 15, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Rest your upper arms flat against the preacher bench pad.',
          'Hold the EZ-bar with a shoulder-width underhand grip.',
          'Curl the bar upward toward your chin in a smooth arc.',
          'Lower under full control until your arms are fully extended.'
        ],
        el: [
          'Ακουμπήστε τα μπράτσα σας επίπεδα στο μαξιλάρι του preacher πάγκου.',
          'Κρατήστε την EZ-μπάρα με ανάποδη λαβή στο φάρδος των ώμων.',
          'Ανεβάστε τη μπάρα προς το πιγούνι με ομαλή κίνηση.',
          'Κατεβάστε με πλήρη έλεγχο μέχρι να τεντωθούν τα χέρια.'
        ]
      }
    },
    {
      id: 'seatedMachinePreacherCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Seated Machine Preacher Curl', el: 'Καθιστές Κάμψεις Preacher σε Μηχάνημα' },
      m: { en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
      media: {
        male: 'exercises/biceps/preacher-curls/seated-machine-preacher-curl-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 85, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 15, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Adjust the seat height so your armpits rest comfortably against the top of the pad.',
          'Grip the handles with an underhand grip.',
          'Curl the weight upward, maintaining strict form.',
          'Lower with control back to the starting position.'
        ],
        el: [
          'Ρυθμίστε το ύψος του καθίσματος ώστε οι μασχάλες να ακουμπούν άνετα στο μαξιλάρι.',
          'Πιάστε τις λαβές με ανάποδη λαβή.',
          'Ανεβάστε το βάρος διατηρώντας αυστηρή φόρμα.',
          'Κατεβάστε με έλεγχο πίσω στην αρχική θέση.'
        ]
      }
    },
    {
      id: 'standingEzBarPreacherCurls',
      s: '3 sets · 10-12 reps',
      n: { en: 'Standing EZ-Bar Preacher Curl', el: 'Όρθιες Κάμψεις Preacher με Μπάρα EZ' },
      m: { en: 'Biceps, Brachialis', el: 'Δικέφαλοι, Βραχιόνιος' },
      media: {
        male: 'exercises/biceps/preacher-curls/standing-ez-bar-preacher-curls-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 80, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 20, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Stand facing the back side of a preacher bench with upper arms resting on the pad.',
          'Grip the EZ-bar securely with an underhand grip.',
          'Curl the bar upward while maintaining strict upper arm contact with the pad.',
          'Lower under control to full extension.'
        ],
        el: [
          'Σταθείτε μπροστά από την κεκλιμένη πλευρά του πάγκου με τα μπράτσα ακουμπισμένα.',
          'Πιάστε την EZ-μπάρα με ανάποδη λαβή.',
          'Ανεβάστε τη μπάρα διατηρώντας τα μπράτσα σταθερά πάνω στο μαξιλάρι.',
          'Κατεβάστε με έλεγχο μέχρι πλήρη έκταση.'
        ]
      }
    },
    {
      id: 'seatedDumbbellPreacherCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Seated Dumbbell Preacher Curl', el: 'Καθιστές Κάμψεις Preacher με Αλτήρες' },
      m: { en: 'Biceps, Brachialis', el: 'Δικέφαλοι, Βραχιόνιος' },
      media: {
        male: 'exercises/biceps/preacher-curls/seated-dumbbell-preacher-curl-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 80, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 20, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Position your arms flat against the preacher bench holding dumbbells.',
          'Curl one or both dumbbells upward, supinating your wrists.',
          'Squeeze hard at the top contraction.',
          'Lower slowly to full arm extension.'
        ],
        el: [
          'Τοποθετήστε τα μπράτσα σας στον πάγκο κρατώντας αλτήρες.',
          'Ανεβάστε τους αλτήρες προς τα πάνω περιστρέφοντας τους καρπούς.',
          'Σφίξτε δυνατά στην κορυφή της σύσπασης.',
          'Κατεβάστε αργά μέχρι την πλήρη έκταση του χεριού.'
        ]
      }
    },
    {
      id: 'standingDumbbellPreacherCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Standing Dumbbell Preacher Curl', el: 'Όρθιες Κάμψεις Preacher με Αλτήρα' },
      m: { en: 'Biceps, Forearms', el: 'Δικέφαλοι, Πήχεις' },
      media: {
        male: 'exercises/biceps/preacher-curls/standing-dumbbell-preacher-curl-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 75, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 25, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Stand behind the preacher bench with your arms braced against the pad.',
          'Hold the dumbbells with an underhand grip.',
          'Curl the weight up towards your shoulders.',
          'Lower smoothly back to starting position.'
        ],
        el: [
          'Σταθείτε πίσω από τον πάγκο με τα μπράτσα στηριγμένα στο μαξιλάρι.',
          'Κρατήστε τους αλτήρες με ανάποδη λαβή.',
          'Ανεβάστε το βάρος προς τους ώμους.',
          'Κατεβάστε ομαλά στην αρχική θέση.'
        ]
      }
    },
    {
      id: 'standingInnerBicepsDumbbellCurls',
      s: '3 sets · 10-12 reps',
      n: { en: 'Standing Inner Biceps Dumbbell Curl', el: 'Όρθιες Κάμψεις Εσωτερικών Δικεφάλων' },
      m: { en: 'Biceps, Forearms', el: 'Δικέφαλοι, Πήχεις' },
      media: {
        male: 'exercises/biceps/standing-inner-biceps-dumbbell-curls/standing-inner-biceps-dumbbell-curls-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 75, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 25, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Stand upright holding dumbbells at your sides.',
          'Keep elbows pinned close to your torso.',
          'Curl upward while rotating your wrists outward to emphasize the inner bicep.',
          'Lower with control.'
        ],
        el: [
          'Σταθείτε όρθιοι κρατώντας αλτήρες στα πλάγια.',
          'Κρατήστε τους αγκώνες κολλημένους κοντά στον κορμό.',
          'Ανεβάστε περιστρέφοντας τους καρπούς προς τα έξω για έμφαση στον εσωτερικό δικέφαλο.',
          'Κατεβάστε με έλεγχο.'
        ]
      }
    },
    {
      id: 'concentrationCurls',
      s: '3 sets · 10-12 reps',
      n: { en: 'Concentration Curl', el: 'Κάμψεις Συγκέντρωσης' },
      m: { en: 'Biceps Peak, Brachialis', el: 'Κορυφή Δικεφάλων, Βραχιόνιος' },
      media: {
        male: 'exercises/biceps/concentration-curls/concentration-curls-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 85, en: 'Biceps Brachii (Peak)', el: 'Δικέφαλος Βραχιόνιος (Κορυφή)' },
        { k: 'groupBiceps', p: 15, en: 'Brachialis', el: 'Βραχιόνιος' }
      ],
      t: {
        en: [
          'Sit on a flat bench with legs spread and elbow braced against your inner thigh.',
          'Curl the weight upward toward your chest in a smooth arc.',
          'Squeeze hard at the peak contraction for one second.',
          'Lower the dumbbell slowly to full arm extension.'
        ],
        el: [
          'Καθίστε σε ίσιο πάγκο με τα πόδια ανοιχτά και τον αγκώνα στηριγμένο στο εσωτερικό του μηρού.',
          'Ανεβάστε το βάρος προς το στήθος με ομαλή κίνηση.',
          'Σφίξτε δυνατά στην κορυφή της σύσπασης για ένα δευτερόλεπτο.',
          'Κατεβάστε τον αλτήρα αργά μέχρι πλήρη έκταση του χεριού.'
        ]
      }
    },
    {
      id: 'seatedEzBarConcentrationCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Seated EZ-Bar Concentration Curl', el: 'Κάμψεις Δικεφάλων με EZ-Bar Καθιστός' },
      m: { en: 'Biceps, Forearms', el: 'Δικέφαλοι, Πήχεις' },
      media: {
        male: 'exercises/biceps/concentration-curls/seated-EZ-bar-concentration-curl-male.webm',
        female: ''
      },
      targets: [
        { k: 'groupBiceps', p: 80, en: 'Biceps Brachii', el: 'Δικέφαλος Βραχιόνιος' },
        { k: 'groupBiceps', p: 20, en: 'Brachioradialis', el: 'Βραχιoκερκιδικός' }
      ],
      t: {
        en: [
          'Sit upright on a flat bench holding an EZ-curl bar with an underhand grip.',
          'Keep your upper arms stationary and close to your torso.',
          'Curl the bar upward toward your shoulders, emphasizing the bicep squeeze.',
          'Lower the bar under control back to the starting position.'
        ],
        el: [
          'Καθίστε όρθια σε ίσιο πάγκο κρατώντας μια μπάρα EZ με ανάποδη λαβή.',
          'Κρατήστε τα μπράτσα σας σταθερά και κοντά στον κορμό.',
          'Ανεβάστε τη μπάρα προς τους ώμους, δίνοντας έμφαση στη σύσπαση.',
          'Κατεβάστε τη μπάρα με έλεγχο πίσω στην αρχική θέση.'
        ]
      }
    }
  ]
};