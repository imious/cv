export const asset = (p: string) => `${import.meta.env.BASE_URL}assets/${p}`

export const CV_PDF = asset('Iman-Barekatain-CV.pdf')

export const CONTACT = {
  location: 'Bergamo, Italy',
  emails: ['iman.barekatain@gmail.com', 'iman.barekatain@student.kuleuven.be'],
  phones: ['+39 345 837 8961', '+32 495 76 87 93'],
}

export const EXPERIENCE = [
  {
    period: '2025',
    role: 'Materials Development Intern',
    org: 'Toyota Motor Europe',
    place: 'Zaventem, Belgium',
    logo: asset('toyota.svg'),
    wide: true,
    text: "Three months at Toyota's main European R&D hub, developing a new 3D-printed material. Research, experiment planning and execution, design and testing — details under NDA.",
  },
  {
    period: '2018 — 2022',
    role: 'Web Developer & UI Designer',
    org: 'Libratech IT Solutions',
    place: 'Isfahan, Iran',
    logo: asset('libratech.png'),
    wide: false,
    text: 'Four years of part-time work building websites and web applications with HTML, CSS, JavaScript and Vue.js, plus WordPress — and designing interfaces in Adobe XD.',
  },
  {
    period: '2022',
    role: 'R&D Intern',
    org: 'Tamkar Industrial Group',
    place: 'Isfahan, Iran',
    logo: asset('tamkar.png'),
    wide: true,
    text: 'Research, supervision, translation and communication with foreign partners in an industrial manufacturing setting.',
  },
]

export const EDUCATION = [
  {
    period: '2023 — 2026',
    title: 'SUMA Double Degree in Sustainable Materials',
    lines: [
      { school: 'KU Leuven', degree: 'M.Sc. Materials Engineering', note: '#1 in Belgium · #48 globally', logo: asset('ku-leuven.svg') },
      { school: 'University of Milan-Bicocca', degree: 'M.Sc. Materials Science & Nanotechnology', note: '#10 in Italy · #299 globally', logo: asset('milano-bicocca.svg') },
    ],
    status: 'Final semester',
  },
  {
    period: '2018 — 2023',
    title: 'B.Sc. Metallurgy & Materials Engineering',
    lines: [
      { school: 'Isfahan University of Technology', degree: '', note: '#4 in Iran · #338 globally for Materials Science', logo: asset('iut.png') },
    ],
    status: '',
  },
]

export const RESEARCH = [
  {
    kind: "Master's thesis",
    title: 'Effect of laser beam shaping on Mn, N-stabilized stainless steels manufactured using L-PBF',
    text: 'How laser distribution profiles — Gaussian vs. ring — affect microstructure and vaporization behavior in austenitic stainless steels stabilized with manganese and nitrogen. A joint simulation-and-experiment approach.',
    meta: 'Promoter: Prof. Kim Vanmeensel — KU Leuven',
  },
  {
    kind: "Bachelor's thesis",
    title: 'Artificial intelligence in materials science and engineering',
    text: 'A report on recent advances and applications of machine learning in solid-state materials science.',
    meta: 'Advisor: Prof. Mahmood Meratian — IUT',
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Materials & Lab',
    items: [
      { head: 'Characterization', body: 'XRD · SEM · OM · EPMA · EBSD' },
      { head: 'Mechanical testing', body: 'Hardness · Toughness · Wear · Tensile' },
      { head: 'Academic software', body: 'COMSOL Multiphysics · Thermo-Calc · ImageJ · Key to Steel' },
    ],
  },
  {
    title: 'Code & Design',
    items: [
      { head: 'Programming', body: 'JavaScript (Vue.js) · HTML · CSS · Python (basic)' },
      { head: 'Design tools', body: 'Adobe XD · Photoshop · Illustrator' },
      { head: 'Also', body: 'WordPress · MS Office · AI-assisted software development' },
    ],
  },
]

export const LANGUAGES = [
  { name: 'English', level: 'Advanced', detail: 'IELTS 8.0 — Reading 9 · Listening 8.5 · Speaking 7 · Writing 7' },
  { name: 'Persian', level: 'Native', detail: '' },
  { name: 'Italian', level: 'Beginner', detail: 'Learning' },
]

export const VOLUNTARY = [
  {
    period: '2018 — 2023',
    org: 'Saleh NGO',
    text: 'Charity providing facilities for orphaned children and holding celebrations for them.',
  },
  {
    period: '2018 — 2020',
    org: 'Aria Cultural Center, IUT',
    text: 'Organized celebrations, tours and environmental games — including Yaldā Night 2018 with 1000+ guests, a mobile music stage built on a tractor-trailer, and the Karino breakfast contest (2018, 2019).',
  },
  {
    period: '2018 — 2020',
    org: 'Theater Cultural Center, IUT',
    text: "Council member in 2019. Ticketing, arrangement and conduction of the play 'All thieves are not thieves'.",
  },
]

export const REFERENCES = [
  {
    name: 'Prof. Kim Vanmeensel',
    role: 'Associate Professor, Faculty of Engineering Science — KU Leuven',
    email: 'kim.vanmeensel@kuleuven.be',
  },
  {
    name: 'Prof. Mahmood Meratian',
    role: 'Associate Professor, Materials Science & Engineering — Isfahan University of Technology',
    email: 'meratian@cc.iut.ac.ir',
  },
  {
    name: 'Aurelie Serre',
    role: 'Manager, Organic & Chemical Management, Material Engineering — Toyota Motor Europe',
    email: 'aurelie.serre@toyota-europe.com',
  },
]
