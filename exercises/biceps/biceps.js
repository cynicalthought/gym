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
      id: 'dumbbellCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Dumbbell Bicep Curl', el: 'Κάμψεις Δικεφάλων με Αλτήρες' },
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
      id: 'seatedConcentrationCurl',
      s: '3 sets · 10-12 reps',
      n: { en: 'Seated Concentration Curl', el: 'Κάμψεις Συγκέντρωσης Καθιστός' },
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