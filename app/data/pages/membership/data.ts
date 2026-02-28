export interface MembershipItem {
  title: string
  subtitle: string
  description: string
  button: string
  image: string
  url: string,
  reverse?: boolean
}

export const membershipData: MembershipItem[] = [
  {
    title: "MEMBERSHIP",
    subtitle: "& RATES",
    description: `If you are interested in becoming a member at Chhun On Golf Resort, we would be delighted to hear from you. Contact us for further membership package information or to make an appointment with our membership team.`,
    button: "CONTACT US",
    image: "/banner/member-ship-card.webp",
    url: "mailto:operations@chhunon-golfresort.com",
    reverse: true
  }
]

export interface IndividualItem {
  title: string
  subtitle: string
  description: string
  button: string
  image: string
  url: string,
  reverse?: boolean
}

export const individualData: IndividualItem[] = [
  {
    title: "INDIVIDUAL",
    subtitle: "MEMBERSHIP",
    description: `Our individual membership type offers golf enthusiasts the opportunity to enjoy exclusive access to our prestigious golf course year-round. As an individual member, you will have unlimited play on our meticulously maintained fairways and greens, as well as access to many benefits.`,
    button: "CONTACT US",
    image: "/banner/individual_banner.webp",
    url: "mailto:operations@chhunon-golfresort.com",
    reverse: true
  }
]


export interface FamilyItem {
  title: string
  subtitle: string
  description: string
  button: string
  image: string
  url: string,
  reverse?: boolean
}

export const familyData: FamilyItem[] = [
  {
    title: "FAMILY",
    subtitle: "MEMBERSHIP",
    description: `Our family membership type offers a perfect opportunity for golf-loving families to bond and create lasting memories on the course. With our family membership, you and your loved ones can enjoy unlimited access to our top-tier golf course, allowing you to share the joy of golfing together in a beautiful setting.`,
    button: "CONTACT US",
    image: "/banner/family_banner.webp",
    url: "mailto:operations@chhunon-golfresort.com",
    reverse: true
  }
]


export interface CorporateItem {
  title: string
  subtitle: string
  description: string
  button: string
  image: string
  url: string,
  reverse?: boolean
}

export const corporateData: CorporateItem[] = [
  {
    title: "CORPORATE",
    subtitle: "MEMBERSHIP",
    description: `Our corporate membership type offers businesses the perfect opportunity to treat their employees, clients, and partners to a premier golfing experience. With our corporate membership, your company can enhance your business relationships and create lasting memories on the course at our prestigious golf club.`,
    button: "CONTACT US",
    image: "/banner/corporate_banner.webp",
    url: "mailto:operations@chhunon-golfresort.com",
    reverse: true
  }
]