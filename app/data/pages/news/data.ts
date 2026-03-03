interface InformationItem {
  description: string
  descriptionOne: string
  descriptionTwo: string
  descriptionTwos: string
  descriptionThree: string
  descriptionThree1: string
  descriptionThree2: string
  descriptionThree3: string
  image: string
  imageOne: string
}

export const information: InformationItem[] = [
  {
    description: `Phnom Penh, Cambodia, May 27<sup>th</sup>, 2024 – Chhun On Golf Resort has opened on the outskirts of the city, offering a challenging and scenic experience for golf enthusiasts. The course, designed by renowned architect Brian Curley of Schmidt-Curley Design, features two 18-hole courses, Lake Course and Palm Course, plus a 19th hole in between these two courses. The 19th hole is Par 3 Island, which is very special because it allows golfers to challenge themselves on the green in the shape of a Cambodia map. In order to reach there, after their tee shot, all golfers need to take a luxury boat equipped with an electric engine powered by solar panel.`,

    descriptionOne: `“We’re aiming to make the two courses as different as possible,” said Curley. “The Lake Course offers a much more traditional take on design with formal bunkering while The Palm Course will be more rugged and natural.”`,

    descriptionTwo: `Lake Course weaves through a landscape dominated by large lakes that set up wide and expansive views. Although the lakes are a dominant feature, there was a strong effort to not create too many water shots in play off the tee, as the intention was to create a “find your ball" experience with generous landing areas while still demanding the execution of proper shots, especially into the greens. Furthermore, there are two signature tea houses located at holes 5 and 13 that were created to serve as visual icons within the landscape, offering players a unique moment of relaxation during their rounds.`,

    descriptionTwos: `While Palm course which is scheduled to open in 2026.`,

    descriptionThree: `Both golf courses, have a putting green and chipping green, to make sure players will be able to get a proper warm up on short game.  The driving range area is so versatile that it can be used by all level of golfers from the beginner to the PGA tour player, to learn and, more importantly, enjoy playing a variety of shots, offering a different dimension to range practice that each level of players needed.`,

    descriptionThree1: `Besides the facilities, there is also a Leadbetter Academy in front of a state-of-the-art club house in the shape of a Romdoul flower, which represents the Khmer symbol and features various targets, bunkers, slopes, and greens that simulate different course conditions and challenges. The range will be equipped with new technology and equipment, such as launch monitors, video analysis systems, and feedback systems, that will help golfers measure and optimize their performance. A specific golf fitness area will complete this world class training area.`,

    descriptionThree2: `Chhun On Golf Resort offers you a unique and enjoyable way to play golf in a natural setting. We are open from dawn to dusk, seven days a week, and reservations are recommended. For more information, visit<a href='http://www.chhunon-golfresort.com/' class='underline text-blue-700'> www.chhunon-golfresort.com</a> , email <a class='underline text-blue-700' href='mailto:info@chhunon-golfresort.com'>info@chhunon-golfresort.com</a> , or call +855 69 683 888.`,

    descriptionThree3: `We look forward to welcoming you at Chhun On Golf Resort, the ultimate golf destination with the best hospitality.`,

    image: "/banner/home-slider.webp",
    imageOne: "/slide/gallery_5.webp",
  }
]


interface ArticleItem {
  description: string
  descriptionOne: string
  descriptionTwo: string
  descriptionThree: string
  descriptionThree2: string
  descriptionThree3: string
  image?: string
  imageOne?: string
}


export const article: ArticleItem[] = [
  {
    description: "Chhun On Golf Resort, a top destination for golf lovers, is excited to announce the launch of its night golf experience. Starting now, guests can enjoy playing the back 9 under the beautiful night sky.",
    descriptionOne: "The resort has invested in a cutting-edge lighting system that not only highlights the course's natural beauty but also ensures a safe and enjoyable atmosphere for nighttime golfing. This innovative approach allows players to experience the game like they are playing at day time.",
    descriptionTwo: `"We're thrilled to give our guests the opportunity to play golf anytime, especially during those warm summer evenings," said <span class="text-amber"> Mr. Fabrice HO, General Manager of Chhun On Golf Resort</span>. "Our night golf option offers a unique experience that appeals to everyone, whether you’re an early riser or a night owl."`,
    descriptionThree: "Night Golf is open to both members and non-members, with tee times available from 3:00 PM to 7:30 PM. For our newly established facility, we additionally offer special prices of 15% discount on weekdays, weekends and public holidays until at the end of the year.",
    descriptionThree2: "Chhun On Golf Resort offers you a unique and enjoyable way to play golf in a natural setting. We are open from dawn to dusk, seven days a week, and reservations are recommended. For more information, visit<a href='http://www.chhunon-golfresort.com/' class='underline text-blue-700'> www.chhunon-golfresort.com</a> , email <a class='underline text-blue-700' href='mailto:info@chhunon-golfresort.com'>info@chhunon-golfresort.com</a> , or call +855 69 683 888.",
    descriptionThree3: "We look forward to welcoming you at Chhun On Golf Resort, the ultimate golf destination with the best hospitality.",
    image: '/gallery/night-golf/night-golf-06.webp',
    imageOne: '/banner/golf-night2.webp',
  }
]