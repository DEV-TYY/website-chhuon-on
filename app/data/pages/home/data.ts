// types
// ~/constants/menu.ts

// Type definitions
export interface SubMenuItem {
  name: string
  url: string
}

export interface MenuItem {
  name: string
  url?: string
  children?: MenuItem[]
  subMenu?: SubMenuItem[]
}

// Menu data
export const modules: MenuItem[] = [
  {
    name: 'GOLF COURSE',
    children: [
      { name: 'LAKE COURSE', url: '/golf-course/lake-course' },
      { name: 'NIGHT GOLF', url: '/golf-course/night-golf' },
    ],
  },
  { name: 'RATES', url: '/rates', children: [] },
  { name: 'MEMBERSHIP', url: '/membership', children: [] },
  { name: 'GOLF ACADEMY', url: '/golf-academy', children: [] },
  { name: 'GALLERY', url: '/gallery', children: [] },
  {
    name: 'NEWS & EVENTS',
    children: [
      {
        name: 'NEWS',
        subMenu: [
          { name: 'SOFT OPENING LAKE COURSE 18 HOLES', url: '/news&events/soft-opening-lake-course-18-holes' },
          { name: 'INTERNATIONAL TRAVEL: NEW KID ON<br> THE BLOCK - CHHUN ON', url: '/news&events/international-travel' },
          { name: 'CHHUN ON GOLF RESORT LAUNCHES EXCITING<br> NIGHT GOLF EXPERIENCE UNDER THE STARS', url: '/news&events/chhun-on-golf-resort-launches-exciting-night-golf-experience-under-the-stars' },
        ],
      },
      {
        name: 'EVENTS',
        subMenu: [
          { name: 'THE FIRST LADIES GOLF SOCIAL', url: '/news&events/events/the-first-ladies-golf-social' },
          { name: 'THE 8th SAMDECH HUN SEN TOURNAMENT', url: '/news&events/events/tournament' },
          { name: 'THE CITY GOLF LOYALTY CHAMPIONSHIP', url: '/news&events/events/championship' },
        ],
      },
      { name: 'HOLE IN ONE RECORD', url: '/news&events/hole-in-one-record' },
    ],
  },
  { name: 'ABOUT US', url: '/about-us', children: [] },
  { name: 'BOOK YOUR TEE TIME', url: 'mailto:reservations@chhunon-golfresort.com', children: [] },
]

// ------------------------------
// Welcome Types
export interface WelcomeItem {
  title: string;
  subtitle: string;
  description: string;
  button: string;
}

// Welcome Content
export const welcomeData: WelcomeItem[] = [
  {
    title: 'Welcome to',
    subtitle: 'Chhun On Golf Resort',
    description:
      'We are delighted to welcome you to Chhun On Golf Resort, located only 40 minutes’ drive from the heart of Phnom Penh. Brian Curley, a well-known golf course architect with 35 years of successful worldwide golf course design and construction, created for us two 18-hole golf courses and our iconic 19th hole that will blow your mind. “Our clients have decided to place the golf experience first and foremost to create the best courses in the country,” said Curley. “There is also a strong desire to create two distinctly different layouts, so every effort has been made to optimize this wish.',
    button: 'BOOK NOW',
  },
];

// ------------------------------
// Courses Types
export interface CourseListItem {
  description: string;
}

interface CourseItem {
  title: string
  subtitle: string
  list: { description: string }[]
  image: string[]
  button: string
}

// Courses Content
export const coursesData: CourseItem[] = [
  {
    title: "Brian Curley",
    subtitle: "Course Architect",
    list: [
      { description: "Over 35 years of successful worldwide golf course design & construction experience" },
      { description: "Involved with the design of over 150 golf courses worldwide 2011’s 'Golf Course Architects of the Year' by Golf Magazine" },
      { description: "Voted #1 Golf Course Architects in Asia for 7 years running, by Asian Golf (2011-2017)" },
      { description: "Ranked #4 Most Influential Golf Course Architects by Golf Inc" },
    ],
    image: ['/pages/home/profile.webp'],
    button: "LEARN MORE",
  },
];

// Define a TypeScript type for the course
interface Course {
    image: string[];
}


export const theCourse: Course = {
  image: [
    "/pages/home/lake_course_01.webp",
    "/pages/home/lake_course_02.webp",
    "/pages/home/lake_course_03.webp",
    "/pages/home/lake_course_04.webp"
  ]
}

export interface PackageItem {
  title: string
  subtitle: string
  description: string
  button: string
  image: string
  url: string
}

export const packageContent: PackageItem[] = [
  {
    title: "MEMBERSHIP",
    subtitle: "AND RATES",
    description: `For more information about membership opportunities,<br>please contact (+855) 93 278 333 or email<br> operations@chhunon-golfresort.com`,
    button: "LEARN MORE",
    image: "/pages/home/member-ship-banner.webp",
    url: "mailto:info@chhunon-golfresort.com"
  }
]


// ~/data/partners.ts
export interface Partner {
  title: string
  subtitle?: string
  description: string
  linkTwogolf: string
  golfGenius: string
  iagto: string
}

// Export the partners array
export const partners: Partner[] = [
  {
    title: "OUR PARTNERS",
    subtitle: "",
    description:
      "Through renowned partnerships, Chhun On Golf Resort gives its members and customers the<br> opportunity to live unforgettable experiences on our golf course.",
    linkTwogolf: "/pages/home/link-two-golf.webp",
    golfGenius: "/pages/home/golf-genius.webp",
    iagto: "/pages/home/iagto.webp"
  }
]