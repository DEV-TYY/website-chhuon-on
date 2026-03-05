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