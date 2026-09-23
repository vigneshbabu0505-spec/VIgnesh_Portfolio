// ============================================================
// All personal, project, skill and content data lives here.
// Edit this file to update the site — no need to touch components.
// ============================================================

export const personalInfo = {
  name: 'Vignesh B',
  role: 'Aspiring Software Developer / Backend Developer',
  college: 'SSN College of Engineering',
  degree: 'B.E. Mechanical Engineering',
  cgpa: '7.416',
  status: 'Final Year',
  email: 'vigneshbabu0505@gmail.com',
  github: 'https://github.com/vigneshbabu0505-spec',
  linkedin: 'https://www.linkedin.com/in/vignesh-b-530789304/',
  leetcode: 'https://leetcode.com/u/vignesh_1245/',
  resumePath: '/resume.pdf', // place your resume file at public/resume.pdf
  profilePhoto: '/profile.jpg', // place your photo at public/profile.jpg
}

export const heroContent = {
  eyebrow: "HELLO, I'M VIGNESH",
  headingPrefix: 'Building the ',
  headingHighlight: 'backend',
  headingSuffix: ' behind useful products.',
  subheading:
    'Final-year Mechanical Engineering student at SSN College of Engineering, transitioning into software development with a focus on backend engineering, Java and data.',
  secondaryLine: 'Currently exploring Java, Spring Boot, PostgreSQL and Data Science.',
}

export const aboutContent = {
  heading: 'From machines to software.',
  paragraphs: [
    "I'm a Mechanical Engineering student who developed a strong interest in software development. I enjoy solving problems using Java, building REST APIs, working with databases and learning how real-world applications are designed.",
    'My current focus is backend development and data-focused roles, where I can combine problem solving with practical software engineering.',
  ],
  stats: [
    { value: '7.416', label: 'CGPA' },
    { value: '2+', label: 'Software Projects' },
    { value: 'Java', label: 'Primary Backend Language' },
    { value: 'SSN', label: 'College' },
  ],
}

// Icon names map to lucide-react components (resolved in Skills.jsx)
export const skillCategories = [
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Java', icon: 'Coffee' },
      { name: 'Spring Boot', icon: 'Leaf' },
      { name: 'REST APIs', icon: 'Share2' },
      { name: 'OOP', icon: 'Boxes' },
      { name: 'Maven', icon: 'Package' },
    ],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'SQL', icon: 'Table2' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'Supabase', icon: 'Zap' },
      { name: 'DBMS', icon: 'HardDrive' },
    ],
  },
  {
    title: 'Programming / Data',
    icon: 'LineChart',
    skills: [
      { name: 'Python', icon: 'Code2' },
      { name: 'Pandas', icon: 'Sheet' },
      { name: 'NumPy', icon: 'Sigma' },
      { name: 'Matplotlib', icon: 'BarChart3' },
      { name: 'Data Analysis', icon: 'LineChart' },
      { name: 'Data Science', icon: 'Brain' },
    ],
  },
  {
    title: 'Frontend / Tools',
    icon: 'Wrench',
    skills: [
      { name: 'React', icon: 'Atom' },
      { name: 'HTML', icon: 'FileCode' },
      { name: 'CSS', icon: 'Palette' },
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
    ],
  },
]

export const projects = [
  {
    id: 'pgpeekin',
    number: '01',
    name: 'PgPeekIn',
    type: 'Full-Stack PG Management System',
    description:
      'A full-stack platform designed to connect tenants with PG owners and simplify PG discovery, booking and management.',
    technicalDescription:
      'Developed backend REST APIs using Spring Boot and integrated PostgreSQL through Supabase. Implemented role-based access so owners can manage PG details while tenants can search, book rooms and submit reviews.',
    features: [
      'Owner registration and login',
      'Tenant registration and login',
      'JWT authentication',
      'PG creation',
      'PG update',
      'PG search',
      'Search by area',
      'Search by city',
      'PG type filtering',
      'Room availability',
      'Booking',
      'Payment',
      'Reviews',
      'Review images',
      'PG image management',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Supabase', 'React', 'JWT', 'REST API'],
    github: '#', // TODO: replace with actual GitHub repo URL
    demo: '#', // TODO: replace with actual live demo URL
    visual: 'pgpeekin', // used by ProjectCard to render the CSS mockup
    architecture:
      'Spring Boot backend exposing modular REST APIs (Auth, Owner, Tenant, Booking, Payment, Review), backed by a PostgreSQL database hosted on Supabase. React frontend consumes the APIs, with JWT-based role authentication separating owner and tenant flows.',
    contribution:
      'Designed the database schema, built the REST API layer end-to-end in Spring Boot, implemented JWT-based role access control, and integrated PostgreSQL via Supabase.',
    futureImprovements: [
      'Add real-time booking notifications',
      'Improve search with geolocation-based filtering',
      'Add an admin dashboard for platform oversight',
    ],
  },
  {
    id: 'student-management-system',
    number: '02',
    name: 'Student Management System',
    type: 'Java Application',
    description:
      'A Java-based student management application built to practice object-oriented programming and CRUD operations.',
    technicalDescription:
      'Implemented the application using Java OOP principles with a Swing-based interface and persistent student data storage.',
    features: [
      'Add student',
      'Update student',
      'Delete student',
      'Search student',
      'View students',
      'Persistent storage',
      'GUI using Java Swing',
    ],
    tech: ['Java', 'OOP', 'Swing', 'CRUD', 'CSV/File persistence'],
    github: '#', // TODO: replace with actual GitHub repo URL
    demo: null,
    visual: 'sms',
    architecture:
      'A desktop Java application structured around OOP principles, with a Swing GUI layer for user interaction and a persistence layer that reads and writes student records to file-based storage.',
    contribution:
      'Designed the class structure, built the Swing UI, and implemented CRUD operations with persistent file-based storage.',
    futureImprovements: [
      'Migrate storage to a proper database (SQL/PostgreSQL)',
      'Add input validation and error handling improvements',
      'Add export-to-CSV / import functionality',
    ],
  },
]

export const education = {
  heading: 'The foundation.',
  items: [
    {
      college: 'SSN College of Engineering',
      degree: 'B.E. Mechanical Engineering',
      cgpa: '7.416',
      status: 'Final Year',
    },
  ],
}

export const achievements = [
  {
    icon: 'Award',
    title: 'Full Merit Scholarship — SSN Trust (Spurs)',
  },
  {
    icon: 'Medal',
    title: 'Government School Topper',
  },
  {
    icon: 'Users',
    title: 'Organized college events: Invente (Technical Event) and Instincts (Non-Technical Event)',
  },
]

export const codingProfile = {
  heading: 'Problem Solving',
  text: 'Practicing Data Structures and Algorithms and improving problem-solving skills through coding practice.',
  buttonText: 'View LeetCode Profile',
  link: personalInfo.leetcode,
}

export const contactContent = {
  heading: "Let's build something.",
  text: "I'm open to software development opportunities, backend projects and conversations around technology.",
  buttonText: 'Send Me an Email',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
