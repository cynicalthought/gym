const TARGET_COLORS = ['#37c9a5', '#7799ff', '#ffc857', '#c584f2', '#ff786e'];

const CATEGORY_ICONS = {
  glutes: '<path d="M12 4c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7zm0 3a4 4 0 100 8 4 4 0 000-8z"/>',
  hamstrings: '<path d="M10 3h4v14h-4zM8 7h8v2H8z"/>',
  quads: '<path d="M9 3h6v14H9zM7 8h10v2H7z"/>',
  erectors: '<path d="M11 2h2v16h-2zM9 6h6v2H9z"/>',
  traps: '<path d="M6 5l6-3 6 3v4H6V5z"/>',
  lats: '<path d="M5 4h14l-2 12H7L5 4z"/>',
  rhomboids: '<path d="M8 5h8v8H8z"/>',
  biceps: '<path d="M9 4a3 3 0 016 0v8a3 3 0 01-6 0V4z"/>',
  brachialis: '<path d="M10 4h4v10h-4z"/>',
  forearms: '<path d="M10 3h4v12h-4z"/>',
  chest: '<path d="M4 6h16v6H4z"/>',
  upperchest: '<path d="M5 5h14v4H5z"/>',
  triceps: '<path d="M9 3h6v12H9z"/>',
  frontdelts: '<path d="M8 4h8v6H8z"/>',
  sidedelts: '<path d="M6 6h12v4H6z"/>',
  reardelts: '<path d="M7 5h10v5H7z"/>',
  calves: '<path d="M10 3h4v12h-4z"/>',
  core: '<path d="M6 5h12v10H6z"/>',
  rotator: '<path d="M8 6h8v6H8z"/>',
  anconeus: '<path d="M9 5h6v6H9z"/>'
};

const CATEGORY_FOLDER = {
  groupCore: 'core',
  groupCalves: 'calves',
  groupBiceps: 'biceps',
  groupChest: 'chest',
  groupGlutes: 'glutes',
  groupHamstrings: 'hamstrings',
  groupMidBack: 'mid-back',
  groupQuads: 'quads',
  groupShoulders: 'shoulders',
  groupTriceps: 'triceps'
};

const CATEGORY_TARGETS = {
  groupCore: ['core'],
  groupCalves: ['calves'],
  groupMidBack: ['lats', 'rhomboids', 'erectors', 'traps'],
  groupBiceps: ['biceps', 'brachialis'],
  groupChest: ['chest', 'upperchest'],
  groupTriceps: ['triceps'],
  groupGlutes: ['glutes'],
  groupQuads: ['quads'],
  groupHamstrings: ['hamstrings'],
  groupShoulders: ['frontdelts', 'sidedelts', 'reardelts', 'rotator']
};

const I18 = {
  en: {
    timer: 'Rest', d1: 'Back & Biceps', d2: 'Chest & Triceps', d3: 'Legs', d4: 'Shoulders',
    schedule: 'Schedule', library: 'Exercise library', libraryTitle: 'All exercises', libraryDescription: 'Browse every exercise in your plan and watch its demonstration.',
    panelTargets: 'Target muscles', demo: 'Demonstration', groupMidBack: 'Mid-back', groupCore: 'Core', groupCalves: 'Calves', groupBiceps: 'Biceps', groupChest: 'Chest', groupTriceps: 'Triceps', groupGlutes: 'Glutes', groupQuads: 'Quads', groupHamstrings: 'Hamstrings', groupShoulders: 'Shoulders', searchExercises: 'Search exercises or muscles', resultCount: 'exercises', libraryPrompt: 'Choose a muscle group above or search for an exercise.',
    footer: 'Form first · Consistency always', rt: 'Rest Timer', rs: 'Between sets',
    start: 'Start', close: 'Close', reset: 'Reset', tips: 'Form cues', male: '♂ Male', female: '♀ Female', targetLabel: 'Muscle target', weightLabel: 'Share', targetDistribution: 'Muscle target distribution', targetTotal: 'TOTAL'
  },
  el: {
    timer: 'Διάλειμμα', d1: 'Πλάτη & Δικέφαλοι', d2: 'Στήθος & Τρικέφαλοι', d3: 'Πόδια', d4: 'Ώμοι',
    schedule: 'Πρόγραμμα', library: 'Ασκήσεις', libraryTitle: 'Όλες οι ασκήσεις', libraryDescription: 'Δες όλες τις ασκήσεις του προγράμματος και τις επιδείξεις τους.',
    panelTargets: 'Μυϊκοι στόχοι', demo: 'Επίδειξη', groupMidBack: 'Μέση πλάτη', groupCore: 'Κορμός', groupCalves: 'Γάμπες', groupBiceps: 'Δικέφαλοι', groupChest: 'Στήθος', groupTriceps: 'Τρικέφαλοι', groupGlutes: 'Γλουτοί', groupQuads: 'Τετρακέφαλοι', groupHamstrings: 'Οπίσθιοι μηριαίοι', groupShoulders: 'Ώμοι', searchExercises: 'Αναζήτηση ασκήσεων ή μυών', resultCount: 'ασκήσεις', libraryPrompt: 'Επίλεξε μυϊκή ομάδα ή αναζήτησε μια άσκηση.',
    footer: 'Τεχνική πρώτα · Συνέπεια πάντα', rt: 'Χρονόμετρο', rs: 'Μεταξύ σετ',
    start: 'Έναρξη', close: 'Κλείσιμο', reset: 'Επαναφορά', tips: 'Σημεία τεχνικής', male: '♂ Άνδρας', female: '♀ Γυναίκα', targetLabel: 'Μυϊκή ομάδα', weightLabel: 'Συμμετοχή', targetDistribution: 'Κατανομή μυϊκών στόχων', targetTotal: 'ΣΥΝΟΛΟ'
  }
};

const D = {
  1: [
    {id:'d1e1',n:{en:'Deadlift',el:'Άρση Θανάτου'},s:'3×8-10',m:{en:'Posterior chain',el:'Οπίσθια αλυσίδα'},
     targets:[{en:'Glutes',el:'Γλουτοί',p:30,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:25,k:'hamstrings'},{en:'Erectors',el:'Ορθωτήρες',p:20,k:'erectors'},{en:'Quads',el:'Τετρακέφαλοι',p:15,k:'quads'},{en:'Traps / Lats',el:'Τραπεζ. / Πλατείς',p:10,k:'traps'}],
     t:{en:['Bar close to the body.','Hinge at the hips, neutral spine.','Drive through mid-foot.','Own the pattern before load.'],el:['Μπάρα κοντά στο σώμα.','Κίνηση από γοφούς, ουδέτερη σπονδυλική.','Σπρώξε από μέσο ποδιού.','Μάθε την κίνηση πριν το φορτίο.']},
     mediaKey:'deadlift'},
    {id:'d1e2',n:{en:'Seated Cable Row',el:'Κωπηλατική'},s:'3×10-12',m:{en:'Lats · Mid-back',el:'Πλατείς · Μέση πλάτη'},
     targets:[{en:'Lats',el:'Πλατείς',p:40,k:'lats'},{en:'Rhomboids',el:'Ρομβοειδείς',p:30,k:'rhomboids'},{en:'Biceps',el:'Δικέφαλοι',p:20,k:'biceps'},{en:'Rear delts',el:'Οπίσθιοι δελτ.',p:10,k:'reardelts'}],
     t:{en:['Sit tall, chest proud.','Pull elbows back and down.','Squeeze the shoulder blades.','Control the return.'],el:['Κάθισε ίσια, στήθος ψηλά.','Τράβα αγκώνες πίσω-κάτω.','Σφίξε ωμοπλάτες.','Έλεγξε την επιστροφή.']},
     mediaKey:'seatedCableRow'},
    {id:'d1e3',n:{en:'Dumbbell Curl',el:'Κάμψη Δικεφάλων'},s:'3×12-15',m:{en:'Biceps',el:'Δικέφαλοι'},
     targets:[{en:'Biceps',el:'Δικέφαλοι',p:70,k:'biceps'},{en:'Brachialis',el:'Βραχιόνιος',p:20,k:'brachialis'},{en:'Forearms',el:'Πήχεις',p:10,k:'forearms'}],
     t:{en:['Elbows pinned to sides.','No swinging.','Squeeze at the top.','Lower in 2–3 seconds.'],el:['Αγκώνες κολλημένοι.','Χωρίς ταλάντευση.','Σφίξε στην κορυφή.','Κατέβασε σε 2–3 δευτ.']},
     mediaKey:'dumbbellCurl'},
    {id:'d1e4',n:{en:'Preacher Curl',el:'Preacher Curl'},s:'3×12-15',m:{en:'Biceps isolation',el:'Απομόνωση δικεφάλων'},
     targets:[{en:'Biceps',el:'Δικέφαλοι',p:80,k:'biceps'},{en:'Brachialis',el:'Βραχιόνιος',p:15,k:'brachialis'},{en:'Forearms',el:'Πήχεις',p:5,k:'forearms'}],
     t:{en:['Upper arm fully on the pad.','Full range of motion.','No bounce at the bottom.','Strict form only.'],el:['Μπράτσο ολόκληρο στο μαξιλάρι.','Πλήρες εύρος.','Χωρίς αναπήδηση.','Αυστηρή τεχνική.']},
     mediaKey:'preacherCurl'}
  ],
  2: [
    {id:'d2e1',n:{en:'Bench Press',el:'Πιέσεις Πάγκου'},s:'3×8-10',m:{en:'Chest · Triceps · Delts',el:'Στήθος · Τρικέφαλοι · Δελτοειδείς'},
     targets:[{en:'Chest',el:'Στήθος',p:55,k:'chest'},{en:'Triceps',el:'Τρικέφαλοι',p:25,k:'triceps'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:20,k:'frontdelts'}],
     t:{en:['Feet flat, slight arch, scapulae set.','Slightly diagonal bar path.','Lower under control.','Wrists stacked over elbows.'],el:['Πόδια σταθερά, ελαφριά καμάρα.','Ελαφρώς διαγώνια πορεία.','Κατέβασε με έλεγχο.','Καρποί πάνω από αγκώνες.']},
     mediaKey:'benchPress'},
    {id:'d2e2',n:{en:'Incline Dumbbell Press',el:'Κεκλιμένες Πιέσεις'},s:'3×10-12',m:{en:'Upper chest',el:'Άνω στήθος'},
     targets:[{en:'Upper chest',el:'Άνω στήθος',p:50,k:'upperchest'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:30,k:'frontdelts'},{en:'Triceps',el:'Τρικέφαλοι',p:20,k:'triceps'}],
     t:{en:['Bench at 30–45°.','Lower to outer chest.','Press up and slightly in.','Soft elbows at the top.'],el:['Πάγκος 30–45°.','Κατέβασε έξω από στήθος.','Πίεσε πάνω και μέσα.','Ελαφριά κάμψη αγκώνων.']},
     mediaKey:'inclinePress'},
    {id:'d2e3',n:{en:'Tricep Pushdown',el:'Pushdown Τρικεφάλων'},s:'3×12-15',m:{en:'Triceps',el:'Τρικέφαλοι'},
     targets:[{en:'Triceps',el:'Τρικέφαλοι',p:90,k:'triceps'},{en:'Anconeus',el:'Αγκωνιαίος',p:10,k:'anconeus'}],
     t:{en:['Elbows glued to sides.','Full extension.','No torso swing.','Squeeze at the bottom.'],el:['Αγκώνες κολλημένοι.','Πλήρης έκταση.','Χωρίς ταλάντευση.','Σφίξε στο κάτω σημείο.']},
     mediaKey:'pushdown'},
    {id:'d2e4',n:{en:'Overhead Extension',el:'Εκτάσεις πάνω από κεφάλι'},s:'3×12-15',m:{en:'Triceps long head',el:'Μακρά κεφαλή τρικεφάλου'},
     targets:[{en:'Triceps (long)',el:'Τρικέφαλοι (μακρά)',p:70,k:'triceps'},{en:'Triceps (other)',el:'Τρικέφαλοι (λοιπές)',p:30,k:'triceps'}],
     t:{en:['Upper arms close to head.','Lower until a stretch.','Brace the core.','Great long-head emphasis.'],el:['Μπράτσα κοντά στο κεφάλι.','Κατέβασε μέχρι διάταση.','Σταθεροποίησε κορμό.','Έμφαση στη μακρά κεφαλή.']},
     mediaKey:'overheadExtension'}
  ],
  3: [
    {id:'d3e1',n:{en:'Barbell Squat',el:'Καθίσματα'},s:'3×8-10',m:{en:'Quads · Glutes · Core',el:'Τετρακέφαλοι · Γλουτοί · Κορμός'},
     targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:30,k:'glutes'},{en:'Core',el:'Κορμός',p:15,k:'core'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'}],
     t:{en:['Bar on upper traps or rear delts.','Break hips and knees together.','Knees track over toes.','At least parallel depth.'],el:['Μπάρα στους τραπεζοειδείς.','Γοφοί και γόνατα μαζί.','Γόνατα πάνω από δάχτυλα.','Τουλάχιστον παράλληλα.']},
     mediaKey:'squat'},
    {id:'d3e2',n:{en:'Leg Press',el:'Πιέσεις Ποδιών'},s:'3×10-12',m:{en:'Quads · Glutes',el:'Τετρακέφαλοι · Γλουτοί'},
     targets:[{en:'Quads',el:'Τετρακέφαλοι',p:50,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'}],
     t:{en:['Feet mid-platform.','About 90° without hips lifting.','No hard lockout.','Control the eccentric.'],el:['Πόδια στη μέση.','~90° χωρίς να σηκωθούν γοφοί.','Χωρίς απότομο κλείδωμα.','Έλεγξε την έκκεντρη.']},
     mediaKey:'legPress'},
    {id:'d3e3',n:{en:'Romanian Deadlift',el:'Ρουμάνικη Άρση'},s:'3×10-12',m:{en:'Hamstrings · Glutes',el:'Οπίσθιοι · Γλουτοί'},
     targets:[{en:'Hamstrings',el:'Οπίσθιοι',p:45,k:'hamstrings'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Erectors',el:'Ορθωτήρες',p:20,k:'erectors'}],
     t:{en:['Soft knees, hinge the hips.','Bar close to the legs.','Feel the stretch.','Spine stays neutral.'],el:['Ελαφριά κάμψη γονάτων.','Μπάρα κοντά στα πόδια.','Νιώσε τη διάταση.','Ουδέτερη σπονδυλική.']},
     mediaKey:'rdl'},
    {id:'d3e4',n:{en:'Walking Lunges',el:'Βηματισμοί'},s:'3×12-15',m:{en:'Quads · Glutes · Balance',el:'Τετρακέφαλοι · Γλουτοί · Ισορροπία'},
     targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:40,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'},{en:'Core',el:'Κορμός',p:10,k:'core'}],
     t:{en:['Long enough step.','Front knee over mid-foot.','Torso upright.','Alternate continuously.'],el:['Αρκετά μεγάλο βήμα.','Γόνατο πάνω από μέσο πόδι.','Κορμός ίσιος.','Εναλλαγή συνεχώς.']},
     mediaKey:'lunges'}
  ],
  4: [
    {id:'d4e1',n:{en:'Overhead Press',el:'Πιέσεις Ώμων'},s:'3×8-10',m:{en:'Shoulders · Triceps',el:'Ώμοι · Τρικέφαλοι'},
     targets:[{en:'Front delts',el:'Πρόσθιοι δελτ.',p:40,k:'frontdelts'},{en:'Triceps',el:'Τρικέφαλοι',p:25,k:'triceps'},{en:'Side delts',el:'Πλάγιοι δελτ.',p:20,k:'sidedelts'},{en:'Upper chest',el:'Άνω στήθος',p:15,k:'upperchest'}],
     t:{en:['Bar at upper chest.','Brace the core hard.','Slight arc path.','Lock out overhead.'],el:['Μπάρα στο άνω στήθος.','Σταθεροποίησε κορμό.','Ελαφριά καμπύλη.','Κλείδωσε πάνω από κεφάλι.']},
     mediaKey:'overheadPress'},
    {id:'d4e2',n:{en:'Seated Dumbbell Press',el:'Πιέσεις με Αλτήρες'},s:'3×10-12',m:{en:'All deltoid heads',el:'Όλες οι κεφαλές δελτοειδών'},
     targets:[{en:'Front delts',el:'Πρόσθιοι δελτ.',p:40,k:'frontdelts'},{en:'Side delts',el:'Πλάγιοι δελτ.',p:25,k:'sidedelts'},{en:'Triceps',el:'Τρικέφαλοι',p:25,k:'triceps'},{en:'Upper chest',el:'Άνω στήθος',p:10,k:'upperchest'}],
     t:{en:['Use back support if available.','Start at ear level.','Press without hard lockout.','Lower under control.'],el:['Υποστήριξη πλάτης αν υπάρχει.','Ξεκίνα στο ύψος αυτιών.','Χωρίς απότομο κλείδωμα.','Κατέβασε με έλεγχο.']},
     mediaKey:'seatedPress'},
    {id:'d4e3',n:{en:'Lateral Raises',el:'Πλάγιες Ανυψώσεις'},s:'3×12-15',m:{en:'Side delts',el:'Πλάγιοι δελτοειδείς'},
     targets:[{en:'Side delts',el:'Πλάγιοι δελτ.',p:80,k:'sidedelts'},{en:'Front delts',el:'Πρόσθιοι',p:10,k:'frontdelts'},{en:'Rear delts',el:'Οπίσθιοι',p:10,k:'reardelts'}],
     t:{en:['Slight elbow bend.','Raise just above parallel.','Lead with the elbows.','No momentum.'],el:['Ελαφριά κάμψη αγκώνων.','Λίγο πάνω από παράλληλο.','Οδήγησε με αγκώνες.','Χωρίς ορμή.']},
     mediaKey:'lateralRaises'},
    {id:'d4e4',n:{en:'Face Pulls',el:'Face Pulls'},s:'3×12-15',m:{en:'Rear delts · Upper back',el:'Οπίσθιοι δελτ. · Άνω πλάτη'},
     targets:[{en:'Rear delts',el:'Οπίσθιοι δελτ.',p:40,k:'reardelts'},{en:'Rhomboids',el:'Ρομβοειδείς',p:30,k:'rhomboids'},{en:'Rotator cuff',el:'Περιστροφικός',p:20,k:'rotator'},{en:'Traps',el:'Τραπεζοειδείς',p:10,k:'traps'}],
     t:{en:['Pull toward face / forehead.','Externally rotate at the end.','Squeeze rear delts.','Great for shoulder health.'],el:['Τράβα προς πρόσωπο.','Έξω στροφή στο τέλος.','Σφίξε οπίσθιους.','Εξαιρετικό για υγεία ώμων.']},
     mediaKey:'facePulls'}
  ]
};

const LIBRARY_EXTRAS = [
  {id:'libGluteKickback',n:{en:'Glute Kickback',el:'Εκτάσεις Γλουτών'},s:'3×12-15',m:{en:'Glutes',el:'Γλουτοί'},targets:[{en:'Glutes',el:'Γλουτοί',p:80,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'},{en:'Core',el:'Κορμός',p:10,k:'core'}],t:{en:['Keep the hips square.','Brace the core and avoid arching the back.','Drive the heel back with control.','Pause briefly at the top.'],el:['Κράτησε τους γοφούς σταθερούς.','Σφίξε τον κορμό χωρίς υπερέκταση στη μέση.','Πίεσε τη φτέρνα προς τα πίσω με έλεγχο.','Κάνε μικρή παύση στην κορυφή.']},mediaKey:'gluteKickback'},
  {id:'libPowerClean',n:{en:'Barbell Power Clean',el:'Επολέ Ζετέ με Μπάρα'},s:'3×3-5',m:{en:'Glutes · Quads · Traps',el:'Γλουτοί · Τετρακέφαλοι · Τραπεζοειδείς'},targets:[{en:'Glutes',el:'Γλουτοί',p:30,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:20,k:'hamstrings'},{en:'Quads',el:'Τετρακέφαλοι',p:20,k:'quads'},{en:'Traps',el:'Τραπεζοειδείς',p:15,k:'traps'},{en:'Erectors',el:'Ορθωτήρες',p:15,k:'erectors'}],t:{en:['Start with the bar close to the shins.','Drive through the floor, then extend powerfully.','Keep the bar close as you pull under.','Receive the bar on the shoulders with a stable trunk.'],el:['Ξεκίνα με τη μπάρα κοντά στις κνήμες.','Πίεσε το έδαφος και έκτεινε δυναμικά.','Κράτησε τη μπάρα κοντά καθώς περνάς από κάτω.','Υποδέξου τη μπάρα στους ώμους με σταθερό κορμό.']},mediaKey:'powerClean'},
  {id:'libSquatVariation2',n:{en:'Barbell Squat · Variation 2',el:'Καθίσματα με Μπάρα · Παραλλαγή 2'},s:'3×8-10',m:{en:'Quads · Glutes · Core',el:'Τετρακέφαλοι · Γλουτοί · Κορμός'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:30,k:'glutes'},{en:'Core',el:'Κορμός',p:15,k:'core'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'}],t:{en:['Set the bar securely across the upper back.','Brace before each repetition.','Keep knees tracking over the feet.','Lower and stand with control.'],el:['Τοποθέτησε σταθερά τη μπάρα στην άνω πλάτη.','Σφίξε τον κορμό πριν από κάθε επανάληψη.','Κράτησε τα γόνατα στην κατεύθυνση των πελμάτων.','Κατέβα και ανέβα με έλεγχο.']},mediaKey:'squatVariation2'},
  {id:'libSquatVariation3',n:{en:'Barbell Squat · Variation 3',el:'Καθίσματα με Μπάρα · Παραλλαγή 3'},s:'3×8-10',m:{en:'Quads · Glutes · Core',el:'Τετρακέφαλοι · Γλουτοί · Κορμός'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:30,k:'glutes'},{en:'Core',el:'Κορμός',p:15,k:'core'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'}],t:{en:['Set the bar securely across the upper back.','Brace before each repetition.','Keep knees tracking over the feet.','Lower and stand with control.'],el:['Τοποθέτησε σταθερά τη μπάρα στην άνω πλάτη.','Σφίξε τον κορμό πριν από κάθε επανάληψη.','Κράτησε τα γόνατα στην κατεύθυνση των πελμάτων.','Κατέβα και ανέβα με έλεγχο.']},mediaKey:'squatVariation3'},
  {id:'libGobletSquat',n:{en:'Goblet Squat',el:'Goblet Καθίσματα'},s:'3×10-12',m:{en:'Quads · Glutes · Core',el:'Τετρακέφαλοι · Γλουτοί · Κορμός'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Core',el:'Κορμός',p:15,k:'core'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'}],t:{en:['Hold the dumbbell close to the chest.','Keep the torso upright and brace.','Let the knees track over the toes.','Descend as far as control allows.'],el:['Κράτησε τον αλτήρα κοντά στο στήθος.','Κράτησε τον κορμό όρθιο και σταθερό.','Άφησε τα γόνατα να ακολουθούν τα δάχτυλα.','Κατέβα όσο διατηρείς τον έλεγχο.']},mediaKey:'gobletSquat'},
  {id:'libSumoSquat',n:{en:'Upright Torso Sumo Squat',el:'Sumo Καθίσματα με Όρθιο Κορμό'},s:'3×10-12',m:{en:'Quads · Glutes',el:'Τετρακέφαλοι · Γλουτοί'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:35,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'},{en:'Core',el:'Κορμός',p:15,k:'core'}],t:{en:['Use a comfortable wide stance.','Keep the chest lifted and spine neutral.','Track the knees over the toes.','Lower under control and drive through the floor.'],el:['Πάρε άνετη, ανοιχτή στάση.','Κράτησε το στήθος ψηλά και τη μέση ουδέτερη.','Οδήγησε τα γόνατα πάνω από τα δάχτυλα.','Κατέβα με έλεγχο και πίεσε το έδαφος.']},mediaKey:'sumoSquat'},
  {id:'libInPlaceLunge',n:{en:'In-Place Step Lunge',el:'Στατικοί Προβολές'},s:'3×10-12',m:{en:'Quads · Glutes · Balance',el:'Τετρακέφαλοι · Γλουτοί · Ισορροπία'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:45,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'},{en:'Core',el:'Κορμός',p:10,k:'core'}],t:{en:['Take a stable split stance.','Lower the back knee toward the floor.','Keep the front knee tracking over the foot.','Push through the front foot to return.'],el:['Πάρε σταθερή θέση προβολής.','Κατέβασε το πίσω γόνατο προς το έδαφος.','Κράτησε το μπροστινό γόνατο στην κατεύθυνση του πέλματος.','Πίεσε το μπροστινό πέλμα για να επιστρέψεις.']},mediaKey:'inPlaceLunge'},
  {id:'libArnoldPress',n:{en:'Seated Arnold Press',el:'Καθιστές Πιέσεις Arnold'},s:'3×10-12',m:{en:'Front · Side delts · Triceps',el:'Πρόσθιοι · Πλάγιοι δελτοειδείς · Τρικέφαλοι'},targets:[{en:'Front delts',el:'Πρόσθιοι δελτ.',p:40,k:'frontdelts'},{en:'Side delts',el:'Πλάγιοι δελτ.',p:25,k:'sidedelts'},{en:'Triceps',el:'Τρικέφαλοι',p:20,k:'triceps'},{en:'Upper chest',el:'Άνω στήθος',p:15,k:'upperchest'}],t:{en:['Begin with palms facing you at shoulder height.','Rotate the palms outward as you press.','Keep ribs down and avoid arching.','Reverse the rotation on the way down.'],el:['Ξεκίνα με τις παλάμες προς εσένα στο ύψος των ώμων.','Στρέψε τις παλάμες προς τα έξω καθώς πιέζεις.','Κράτησε τα πλευρά κάτω χωρίς υπερέκταση.','Αντίστρεψε την περιστροφή στην κάθοδο.']},mediaKey:'arnoldPress'},
  {id:'libHipThrust',n:{en:'Barbell Hip Thrust',el:'Άρσεις Γοφών με Μπάρα'},s:'3×8-12',m:{en:'Glutes',el:'Γλουτοί'},targets:[{en:'Glutes',el:'Γλουτοί',p:80,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'},{en:'Core',el:'Κορμός',p:10,k:'core'}],t:{en:['Set the bar over the hips with padding.','Keep the chin tucked and ribs down.','Drive through the feet and squeeze the glutes.','Finish without arching the lower back.'],el:['Τοποθέτησε τη μπάρα στους γοφούς με προστατευτικό.','Κράτησε το πηγούνι μέσα και τα πλευρά κάτω.','Πίεσε από τα πέλματα και σφίξε τους γλουτούς.','Ολοκλήρωσε χωρίς υπερέκταση στη μέση.']},mediaKey:'hipThrust'},
  {id:'libBurpee',n:{en:'Burpee',el:'Burpee'},s:'3×8-12',m:{en:'Full body · Conditioning',el:'Όλο το σώμα · Φυσική κατάσταση'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:20,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:20,k:'glutes'},{en:'Core',el:'Κορμός',p:20,k:'core'},{en:'Chest',el:'Στήθος',p:15,k:'chest'},{en:'Triceps',el:'Τρικέφαλοι',p:10,k:'triceps'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:10,k:'frontdelts'},{en:'Hamstrings',el:'Οπίσθιοι',p:5,k:'hamstrings'}],t:{en:['Squat down and place hands under the shoulders.','Step or jump back to a stable plank.','Return feet under the hips.','Stand tall; add a jump only if comfortable.'],el:['Κάθισε χαμηλά και βάλε τα χέρια κάτω από τους ώμους.','Πήγαινε πίσω σε σταθερή σανίδα.','Φέρε τα πόδια κάτω από τους γοφούς.','Σήκω όρθιος· πρόσθεσε άλμα αν είναι άνετο.']},mediaKey:'burpee'},
  {id:'libBentOverLateralRaise',n:{en:'Bent-Over Dumbbell Lateral Raise',el:'Σκυφτές Πλάγιες Εκτάσεις με Αλτήρες'},s:'3×12-15',m:{en:'Rear delts · Upper back',el:'Οπίσθιοι δελτοειδείς · Άνω πλάτη'},targets:[{en:'Rear delts',el:'Οπίσθιοι δελτ.',p:70,k:'reardelts'},{en:'Side delts',el:'Πλάγιοι δελτ.',p:20,k:'sidedelts'},{en:'Rhomboids',el:'Ρομβοειδείς',p:10,k:'rhomboids'}],t:{en:['Hinge forward with a neutral back.','Keep a soft bend in the elbows.','Raise the weights out to the sides.','Avoid swinging; lower under control.'],el:['Γείρε μπροστά με ουδέτερη πλάτη.','Κράτησε ελαφριά κάμψη στους αγκώνες.','Σήκωσε τα βάρη προς τα πλάγια.','Απόφυγε την αιώρηση και κατέβασε με έλεγχο.']},mediaKey:'bentOverLateralRaise'},
  {id:'libReverseCrunch',n:{en:'Reverse Crunch',el:'Ανάστροφοι Κοιλιακοί'},s:'3×12-15',m:{en:'Core',el:'Κορμός'},targets:[{en:'Core',el:'Κορμός',p:80,k:'core'},{en:'Glutes',el:'Γλουτοί',p:10,k:'glutes'},{en:'Quads',el:'Τετρακέφαλοι',p:10,k:'quads'}],t:{en:['Lie on your back and brace the trunk.','Bring the knees toward the chest by curling the pelvis.','Avoid swinging the legs.','Lower slowly without arching the back.'],el:['Ξάπλωσε ανάσκελα και σταθεροποίησε τον κορμό.','Φέρε τα γόνατα προς το στήθος κάνοντας κάμψη της λεκάνης.','Απόφυγε την αιώρηση των ποδιών.','Κατέβασε αργά χωρίς να καμπυλώσεις τη μέση.']},mediaKey:'reverseCrunch'},
  {id:'libCrunch',n:{en:'Ab Crunch',el:'Κοιλιακοί Ροκανίσματα'},s:'3×12-15',m:{en:'Core',el:'Κορμός'},targets:[{en:'Core',el:'Κορμός',p:80,k:'core'},{en:'Quads',el:'Τετρακέφαλοι',p:10,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:10,k:'glutes'}],t:{en:['Lie back with knees bent and feet planted.','Curl the shoulders toward the hips.','Keep the lower back settled.','Lower slowly without pulling on the neck.'],el:['Ξάπλωσε με λυγισμένα γόνατα και πέλματα στο έδαφος.','Σήκωσε τους ώμους προς τους γοφούς.','Κράτησε τη μέση σταθερή.','Κατέβασε αργά χωρίς να τραβάς τον αυχένα.']},mediaKey:'crunch'},
  {id:'libMachineRowing',n:{en:'Seated Rowing Machine',el:'Κωπηλατικό Μηχάνημα'},s:'3×8-12',m:{en:'Quads · Glutes · Back',el:'Τετρακέφαλοι · Γλουτοί · Πλάτη'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:35,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:20,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'},{en:'Lats',el:'Πλατείς',p:10,k:'lats'},{en:'Rhomboids',el:'Ρομβοειδείς',p:10,k:'rhomboids'},{en:'Biceps',el:'Δικέφαλοι',p:5,k:'biceps'},{en:'Core',el:'Κορμός',p:5,k:'core'}],t:{en:['Sit tall and set the feet securely.','Push through the legs before drawing the handle in.','Finish with the handle near the lower ribs.','Return smoothly: arms, torso, then knees.'],el:['Κάθισε όρθιος και σταθεροποίησε τα πέλματα.','Πίεσε με τα πόδια πριν τραβήξεις τη λαβή.','Φέρε τη λαβή κοντά στα κάτω πλευρά.','Επέστρεψε ομαλά: χέρια, κορμός και μετά γόνατα.']},mediaKey:'machineRowing'},
  {id:'libConcentrationCurl',n:{en:'Concentration Curl',el:'Κάμψεις Συγκέντρωσης'},s:'3×10-12',m:{en:'Biceps',el:'Δικέφαλοι'},targets:[{en:'Biceps',el:'Δικέφαλοι',p:80,k:'biceps'},{en:'Brachialis',el:'Βραχιόνιος',p:10,k:'brachialis'},{en:'Forearms',el:'Πήχεις',p:10,k:'forearms'}],t:{en:['Brace the upper arm against the inner thigh.','Keep the shoulder still.','Curl without swinging the torso.','Lower fully under control.'],el:['Στήριξε το μπράτσο στο εσωτερικό του μηρού.','Κράτησε τον ώμο ακίνητο.','Κάνε κάμψη χωρίς αιώρηση του κορμού.','Κατέβασε πλήρως με έλεγχο.']},mediaKey:'concentrationCurl'},
  {id:'libStandingCalfRaise',n:{en:'Standing Dumbbell Calf Raise',el:'Όρθιες Άρσεις Γαμπών με Αλτήρες'},s:'3×12-20',m:{en:'Calves',el:'Γάμπες'},targets:[{en:'Calves',el:'Γάμπες',p:85,k:'calves'},{en:'Quads',el:'Τετρακέφαλοι',p:5,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:5,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:5,k:'hamstrings'}],t:{en:['Stand tall and hold the dumbbells steadily.','Lower the heels into a comfortable stretch.','Rise onto the balls of the feet.','Pause at the top and lower slowly.'],el:['Στάσου όρθιος και κράτησε σταθερά τους αλτήρες.','Κατέβασε τις φτέρνες σε άνετη διάταση.','Ανέβα στις μύτες των ποδιών.','Κάνε παύση στην κορυφή και κατέβασε αργά.']},mediaKey:'standingCalfRaise'},
  {id:'libFrontPlank',n:{en:'Long-Lever Front Plank',el:'Σανίδα Μακράς Μοίρας'},s:'3×20-40s',m:{en:'Core · Shoulders',el:'Κορμός · Ώμοι'},targets:[{en:'Core',el:'Κορμός',p:65,k:'core'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:15,k:'frontdelts'},{en:'Glutes',el:'Γλουτοί',p:10,k:'glutes'},{en:'Quads',el:'Τετρακέφαλοι',p:10,k:'quads'}],t:{en:['Set elbows slightly ahead of the shoulders.','Keep a straight line from head to heels.','Brace the abdomen and squeeze the glutes.','Breathe steadily; stop before the hips sag.'],el:['Τοποθέτησε τους αγκώνες λίγο μπροστά από τους ώμους.','Κράτησε ευθεία γραμμή από το κεφάλι ως τις φτέρνες.','Σφίξε κοιλιακούς και γλουτούς.','Ανάπνεε σταθερά και σταμάτα πριν πέσουν οι γοφοί.']},mediaKey:'frontPlank'},
  {id:'libBulgarianSplitSquat',n:{en:'Barbell Bulgarian Split Squat',el:'Βουλγαρικά Καθίσματα με Μπάρα'},s:'3×8-10',m:{en:'Quads · Glutes',el:'Τετρακέφαλοι · Γλουτοί'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:45,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'},{en:'Core',el:'Κορμός',p:10,k:'core'}],t:{en:['Set the rear foot on a stable bench.','Brace before lowering.','Keep the front knee tracking over the foot.','Drive through the whole front foot to stand.'],el:['Στήριξε το πίσω πόδι σε σταθερό πάγκο.','Σφίξε τον κορμό πριν κατέβεις.','Κράτησε το μπροστινό γόνατο πάνω από το πέλμα.','Πίεσε όλο το μπροστινό πέλμα για να σηκωθείς.']},mediaKey:'bulgarianSplitSquat'},
  {id:'libBenchDips',n:{en:'Bench Dips',el:'Βυθίσεις σε Πάγκο'},s:'3×8-12',m:{en:'Triceps · Chest',el:'Τρικέφαλοι · Στήθος'},targets:[{en:'Triceps',el:'Τρικέφαλοι',p:75,k:'triceps'},{en:'Chest',el:'Στήθος',p:15,k:'chest'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:10,k:'frontdelts'}],t:{en:['Place hands on the bench edge.','Keep the shoulders down and close to the bench.','Lower only through a comfortable range.','Press through the palms to return.'],el:['Τοποθέτησε τα χέρια στην άκρη του πάγκου.','Κράτησε τους ώμους κάτω και κοντά στον πάγκο.','Κατέβασε μόνο σε άνετο εύρος κίνησης.','Πίεσε από τις παλάμες για να ανέβεις.']},mediaKey:'benchDips'},
  {id:'libForearmPushUp',n:{en:'Forearm Push-Up',el:'Κάμψεις στους Πήχεις'},s:'3×8-12',m:{en:'Triceps · Chest · Core',el:'Τρικέφαλοι · Στήθος · Κορμός'},targets:[{en:'Triceps',el:'Τρικέφαλοι',p:60,k:'triceps'},{en:'Chest',el:'Στήθος',p:20,k:'chest'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:10,k:'frontdelts'},{en:'Core',el:'Κορμός',p:10,k:'core'}],t:{en:['Keep the elbows under the shoulders.','Brace the body in a straight line.','Press through the forearms and hands.','Lower under control without sagging the hips.'],el:['Κράτησε τους αγκώνες κάτω από τους ώμους.','Σταθεροποίησε το σώμα σε ευθεία γραμμή.','Πίεσε από τους πήχεις και τις παλάμες.','Κατέβασε με έλεγχο χωρίς να πέσουν οι γοφοί.']},mediaKey:'forearmPushUp'},
  {id:'libStabilityBallSingleLegSquat',n:{en:'Stability-Ball Single-Leg Squat',el:'Μονόποδα Καθίσματα με Μπάλα Ισορροπίας'},s:'3×8-10',m:{en:'Quads · Glutes · Balance',el:'Τετρακέφαλοι · Γλουτοί · Ισορροπία'},targets:[{en:'Quads',el:'Τετρακέφαλοι',p:40,k:'quads'},{en:'Glutes',el:'Γλουτοί',p:35,k:'glutes'},{en:'Core',el:'Κορμός',p:15,k:'core'},{en:'Hamstrings',el:'Οπίσθιοι',p:10,k:'hamstrings'}],t:{en:['Place the stability ball against the wall behind you.','Balance on one leg and brace the trunk.','Lower into a comfortable single-leg squat.','Press through the working foot to stand.'],el:['Τοποθέτησε τη μπάλα στον τοίχο πίσω σου.','Ισορρόπησε στο ένα πόδι και σταθεροποίησε τον κορμό.','Κατέβα σε άνετο μονόποδο κάθισμα.','Πίεσε από το πόδι στήριξης για να σηκωθείς.']},mediaKey:'stabilityBallSingleLegSquat'},
  {id:'libPushUps',n:{en:'Push-Ups',el:'Κάμψεις'},s:'3×8-15',m:{en:'Chest · Triceps · Shoulders',el:'Στήθος · Τρικέφαλοι · Ώμοι'},targets:[{en:'Chest',el:'Στήθος',p:55,k:'chest'},{en:'Triceps',el:'Τρικέφαλοι',p:25,k:'triceps'},{en:'Front delts',el:'Πρόσθιοι δελτ.',p:15,k:'frontdelts'},{en:'Core',el:'Κορμός',p:5,k:'core'}],t:{en:['Set hands just wider than shoulder width.','Brace the body in a straight line.','Lower the chest with elbows at a comfortable angle.','Press the floor away to return.'],el:['Τοποθέτησε τα χέρια λίγο πιο ανοιχτά από τους ώμους.','Σταθεροποίησε το σώμα σε ευθεία γραμμή.','Κατέβασε το στήθος με άνετη θέση αγκώνων.','Πίεσε το έδαφος για να επιστρέψεις.']},mediaKey:'pushUps'},
  {id:'libQuadrupedHipExtension',n:{en:'Quadruped Hip Extension',el:'Εκτάσεις Ισχίου σε Τετραποδική Θέση'},s:'3×12-15',m:{en:'Glutes · Hamstrings',el:'Γλουτοί · Οπίσθιοι μηριαίοι'},targets:[{en:'Glutes',el:'Γλουτοί',p:80,k:'glutes'},{en:'Hamstrings',el:'Οπίσθιοι',p:15,k:'hamstrings'},{en:'Core',el:'Κορμός',p:5,k:'core'}],t:{en:['Set up on hands and knees with a neutral back.','Brace the trunk without shifting the hips.','Drive one heel upward by extending the hip.','Return slowly without arching the lower back.'],el:['Ξεκίνα σε τετραποδική θέση με ουδέτερη πλάτη.','Σταθεροποίησε τον κορμό χωρίς να μετακινούνται οι γοφοί.','Σήκωσε τη φτέρνα εκτείνοντας το ισχίο.','Επέστρεψε αργά χωρίς υπερέκταση στη μέση.']},mediaKey:'quadrupedHipExtension'},
  {id:'libBentOverRow',n:{en:'Bent-Over Barbell Row',el:'Κωπηλατική με Μπάρα'},s:'3×8-12',m:{en:'Lats · Mid-back',el:'Πλατείς · Μέση πλάτη'},targets:[{en:'Lats',el:'Πλατείς',p:40,k:'lats'},{en:'Rhomboids',el:'Ρομβοειδείς',p:30,k:'rhomboids'},{en:'Erectors',el:'Ορθωτήρες',p:15,k:'erectors'},{en:'Biceps',el:'Δικέφαλοι',p:15,k:'biceps'}],t:{en:['Hinge at the hips and keep the spine neutral.','Brace before each pull.','Row the bar toward the lower ribs.','Lower the bar under control.'],el:['Κάνε κάμψη από τους γοφούς με ουδέτερη σπονδυλική.','Σταθεροποίησε τον κορμό πριν από την έλξη.','Τράβα τη μπάρα προς τα κάτω πλευρά.','Κατέβασε τη μπάρα με έλεγχο.']},mediaKey:'bentOverRow'},
  {id:'libPullUps',n:{en:'Pull-Ups',el:'Έλξεις'},s:'3×6-10',m:{en:'Lats · Biceps',el:'Πλατείς · Δικέφαλοι'},targets:[{en:'Lats',el:'Πλατείς',p:45,k:'lats'},{en:'Biceps',el:'Δικέφαλοι',p:25,k:'biceps'},{en:'Rhomboids',el:'Ρομβοειδείς',p:20,k:'rhomboids'},{en:'Forearms',el:'Πήχεις',p:10,k:'forearms'}],t:{en:['Start from a controlled dead hang.','Set the shoulders before pulling.','Drive the elbows down toward the ribs.','Lower smoothly to full extension.'],el:['Ξεκίνα από ελεγχόμενη κρεμάση.','Σταθεροποίησε τους ώμους πριν τραβήξεις.','Οδήγησε τους αγκώνες προς τα κάτω κοντά στα πλευρά.','Κατέβα ομαλά μέχρι πλήρη έκταση.']},mediaKey:'pullUps'}
];