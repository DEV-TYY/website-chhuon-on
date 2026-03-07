export interface HeroBanner {
  title: string
  subTitle: string
  button: string
  url: string
  image: string
}

export const bannerData: HeroBanner[] = [
  {
    title: "The First Ladies Golf Social",
    subTitle: "May <span>17<sup class='text-lg'>th</sup></span>, 2026",
    button: "Contact Us For More",
    url: "mailto:operations@chhunon-golfresort.com",
    image: "/banner/main-picture.webp"
  }
]


interface ServiceItem {
  title: string
  url: string
  image: string[]
}

// Sample service data (you can import this from a data file)
export const service = ref<ServiceItem[]>([
  {
    title: "REGISTRATION",
    url: "#",
    image: [
      "/slide/registration-01.webp",
      "/slide/registration-02.webp",
    ],
  },
  {
    title: "ON COURSE ACTIVITIES",
    url: "#",
    image: [
      "/slide/on-course-activities-02.webp",
      "/slide/on-course-activities-01.webp",
      "/slide/on-course-activities-03.webp",
      "/slide/on-course-activities-04.webp",
    ],
  },
  {
    title: "AWARD CEREMONY",
    url: "#",
    image: [
      "/slide/awards-ceremony-01.webp",
      "/slide/awards-ceremony-02.webp",
      "/slide/awards-ceremony-03.webp",
      "/slide/awards-ceremony-04.webp",
    ],
  },
])
export interface TournamentBanner {
  title: string
  subTitle: string
  button: string
  url: string
  image: string
}

export const tournamentData: TournamentBanner[] = [
  {
    title:"The <span>8<sup class='text-2xl lg:text-4xl'>th</sup></span> Samdech Hun Sen Tournament",
    subTitle: "December <span>27<sup class='text-xl'>th</sup></span> - <span>28<sup class='text-xl'>th</sup></span>, 2024",
    button: "Watch Full Video",
    url: "https://www.youtube.com/watch?v=IfoICwzp7Pk",
    image: "/banner/samdach-hun-sen.webp"
  }
]

// Define the TypeScript interface for a content item
interface ContentItem {
  description: string
  subDescription?: string
  subSubDescription?: string
  image: string
  button?: string
}

// Use the interface to type your ref array
export const tournamentContent = ref<ContentItem[]>([
  {
    description: `
      We are extremely honorable to be hosting "The 8th Samdech Techo Hun Sen Tournament" this year on
      December 27-28, 2024, at the Chhun On Golf
      Resort. This tournament is being led by H.E.
      Santebindith Neth Savorun, Deputy Prime Minister,
      in collaboration with the Sport Council of the
      Ministry of the Interior, the Cambodian Golf
      Federation, and Chhun On Golf Resort.
    `,
    subDescription: `
      The event aims to commemorate the conclusion of
      the Cambodian civil war, which was achieved
      through Prime Minister Hun Sen's win-win policy
      on December 29, 1998, and has endured for 26
      years to date.
    `,
    subSubDescription: `
      The golf tournament for the Samdech Techo Award
      not only celebrates the enduring peace in our nation
      but also serves as a testament to the values
    `,
    image: '/banner/tournament-banner.webp'
  }
])
interface Card1 {
  title: string
  url: string
  image: string
}

interface Schedule1 {
  date: string
  cards: Card1[]
}

export const schedule1: Schedule1 = {
  date: "Day 1 | 27 December 2024",
  cards: [
    {
      title: "REGISTRATION",
      url: "#",
      image: "/banner/tournament-card-one.webp"
    },
    {
      title: "GROUP PHOTO",
      url: "#",
      image: "/banner/tournament-card-two.webp"
    },
    {
      title: "ON COURSE ACTIVITIES",
      url: "#",
      image: "/banner/tournament-card-three.webp"
    }
  ]
}


interface Card2 {
  title: string
  url: string
  image: string
}

interface Schedule2 {
  date: string
  cards: Card2[]
}

export const schedule2: Schedule2 = {
  date: "Day 2 | 28 December 2024",
  cards: [
    {
      title: "REGISTRATION",
      url: "#",
      image: "/banner/tournament-card-four.webp"
    },
    {
      title: "ON COURSE ACTIVITIES",
      url: "#",
      image: "/banner/tournament-card-five.webp"
    },
    {
      title: "AWARD CEREMONY",
      url: "#",
      image: "/banner/tournament-card-six.webp"
    }
  ]
}



/*
  The City Golf Loyalty Championship Data
*/
export interface ChampionshipBanner {
  title: string
  subTitle: string
  button: string
  url: string
  image: string
}

export const championshipData: ChampionshipBanner[] = [
  {
    title:"The City Golf Loyalty Championship",
    subTitle: "Saturday, August 10th, 2024",
    button: "Learn More",
    url: "#",
    image: "/banner/city-golf-loyalty.webp"
  }
]


interface ChampionshipItem {
  description: string
  subDescription?: string
  subSubDescription?: string
  image: string
  button?: string
}

// Use the interface to type your ref array
export const championshipContent = ref<ChampionshipItem[]>([
  {
    description: `
      The City Golf Loyalty Championship took place on
      August 10th, 2024, featuring an impressive lineup
      of 108 golfers. This exciting event was organized
      collaboratively by Chhun On Golf Resort and City
      Golf Course, home to Phnom Penh’s first par-3 golf
      course and the only venue where golfers can enjoy
      their favorite short game at night.
    `,
    subDescription: `
      The championship not only showcased the skills of
      seasoned players but also provided a vital platform
      for emerging talents to shine and compete with the
      best. Beyond the competition, the City Golf Loyalty
      Championship is about building a vibrant community united by a shared passion for golf, fostering relationships that extend well beyond the 18th hole. It
      serves as a wonderful opportunity for golf enthusiasts to come together, share experiences, and create
      lasting memories.
    `,
    subSubDescription: ``,
    button: "READ MORE",
    image: '/banner/loyalty-banner.webp'
  }
])


interface RegistrationItem {
  title: string
  url: string
  image: string[]
}

// Sample service data (you can import this from a data file)
export const registrationData = ref<RegistrationItem[]>([
  {
    title: "REGISTRATION",
    url: "#",
    image: [
      "/registration/registration-image-one.webp",
      "/registration/registration-image-two.webp",
      "/registration/registration-image-three.webp",
      "/registration/registration-image-four.webp",
      "/registration/registration-image-five.webp",
      "/registration/registration-image-six.webp"
    ],
  },
  {
    title: "ON COURSE ACTIVITIES",
    url: "#",
    image: [
      "/activities-on-course/activities-on-course-image-one.webp",
      "/activities-on-course/activities-on-course-image-two.webp",
      "/activities-on-course/activities-on-course-image-three.webp",
      "/activities-on-course/activities-on-course-image-four.webp",
      "/activities-on-course/activities-on-course-image-five.webp",
      "/activities-on-course/activities-on-course-image-six.webp"
    ],
  },
  {
    title: "AWARD CEREMONY",
    url: "#",
    image: [
      "/awards-ceremony/image-four.webp",
      "/awards-ceremony/image-one.webp",
      "/awards-ceremony/image-two.webp",
      "/awards-ceremony/image-three.webp",
      "/awards-ceremony/image-five.webp"
    ],
  },
])



// Define a TypeScript interface for an Event
interface EventItem {
  label: string
  title: string
  dob: string
  explore?: string
  url?: string
  description: string
  image: string
}

// Use the interface in the ref
// typescript
export interface EventItem {
  label: string;
  title: string;
  dob: string;
  explore?: string;
  url?: string;
  description: string;
  image: string;
}

// Use the interface in the ref
import { ref } from 'vue'

export const eventsCarousel = ref<EventItem[]>([
  {
    label: "corporate events", // converted to lowercase
    title: "THE <span>5<sup>th</sup></span> RED HORNET CHAIRMAN'S CUP 2024",
    dob: "November <span>29<sup>th</sup></span> 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "The <span>5<sup>th</sup></span> Red Hornet Chairman’s Cup was scheduled to take place on Friday, November 29, 2024, at the Chhun On Golf Resort in Phnom Penh. This year’s tournament marks a significant shift for the event, with a new venue that aligns with its mission of uniting key players from government, diplomatic, and business sectors to support charitable causes—the Cambodia Kantha Bopha Foundation—through sport.",
    image: "/assets/images/event/previous_events07.webp",
  },
  {
    label: "corporate events",
    title: "IBC Golf Day",
    dob: "November <span>22<sup>nd</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "The International Business Chamber (IBC) Cambodia is hosting their annual golf tournament, the IBC Golf Day 2024, on November 22, 2024, at the Chhun On Golf Resort. This event is a perfect opportunity to enjoy a day on the Green, networking with fellow business professionals, and supporting the worthy cause—Sunrise Cambodia, a charity that helps vulnerable children with healthcare, education, and material aid.",
    image: "/assets/images/event/previous_events01.webp",
  },
  {
    label: "international events",
    title: "<span>2<sup>nd</sup></span> ASIAN SENIOR MASTERS",
    dob: "November <span>18<sup>th</sup></span> - <span>21<sup>st</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "We are pleased to announce that Chhun On Golf Resort has the esteemed honor of hosting the 2nd Asian Senior Masters 2024 in Cambodia from November 18th to 21st. This four-day international tournament presents a unique opportunity to witness world-class golf and to contribute to the success of this prestigious event.",
    image: "/assets/images/event/previous_events02.webp",
  },
  {
    label: "corporate events",
    title: "RUIZHONG INSURANCE<br> ELITE GOLF GROUP",
    dob: "November <span>08<sup>th</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "We are incredibly thankful to RUIZHONG INSURANCE ELITE GOLF GROUP, led by Jieseng Tour, for hosting such a fantastic event with us! Thank you for selecting Chhun On Golf Resort as the setting for a wonderful round of golf. We appreciate the confidence you give us and look forward to many more enjoyable events together.",
    image: "/assets/images/event/previous_events03.webp",
  },
  {
    label: "corporate events",
    title: "THE <span>23<sup>rd</sup></span> VGC<br>CHAMPIONSHIP",
    dob: "October <span>13<sup>st</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "We're immensely grateful to The <span>23<sup>rd</sup></span> VGC Championship for celebrating Happy Vietnamese Entrepreneurs’ Day at the stunning Chhun On Golf Resort. We are grateful for the opportunity to host such a prestigious event and honor the spirit of entrepreneurship that drives progress.",
    image: "/assets/images/event/previous_events04.webp",
  },
  {
    label: "corporate events",
    title: "SAMBA ASIA-GROUP GOLF<br>TOURNAMENT 2024",
    dob: "September <span>22<sup>nd</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "We would like to express our profound appreciation to SAMBA ASIA-GROUP for allowing Chhun On Golf Resort to host the 2024 golf event. We had the honour of hosting 115 enthusiastic golfers on our course. Without your dedication and passion, this event would not have been possible.",
    image: "/assets/images/event/previous_events05.webp",
  },
  {
    label: "corporate events",
    title: "ROYAL SALUTE MIAMI<br>POLO EDITION",
    dob: "August <span>16<sup>th</sup></span>, 2024",
    explore: "EXPLORE MORE",
    url: "https://www.facebook.com/chhunongolfresort/",
    description: "Chhun On Golf Resort would like to extend our heartfelt gratitude to Pernod Ricard for hosting an exclusive event at their cocktail launch, the Royal Salute Polo Miami, for their esteemed invited golfers. This renowned gathering was a celebration of sportsmanship and elegance, demonstrating the resort's dedication to providing excellent experiences.",
    image: "/assets/images/event/previous_events06.webp",
  }
])