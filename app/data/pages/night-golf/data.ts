interface NightGolfItem {
  title: string
  subtitle: string
  list: { description: string }[]
  image: string[]
  button: string
}

// Courses Content
export const NightGolfData: NightGolfItem[] = [
  {
    title: "NIGHT GOLF",
    subtitle: "Golfing under the Stars",
    description: `Chhun On Golf Resort, a top destination for golf lovers, is excited to announce the launch of its night golf experience. Starting now, guests can enjoy playing the back 9 under the beautiful night sky.`,
    button: "READ MORE",
    image: "/banner/golf-night-banner.webp",
    url: "/news&events/chhun-on-golf-resort-launches-exciting-night-golf-experience-under-the-stars"
  }
];

interface Header {
  empty: string
  nineHole: string
  eighteenHole: string
  color: string
}

interface Result {
  name: string
  nineHolePrice: string
  eighteenHolePrice: string
  color: string
  font: string
}

interface RateItem {
  title: string
  color: string
  header: Header[]
  result: Result[]
}

export const leftData: RateItem[] = [
  {
    title: "WEEKDAY (MON - FRI)",
    color: "bg-darkCyan",
    header: [
      {
        empty: "",
        nineHole: "9 HOLES",
        eighteenHole: "18 HOLES",
        color: "bg-darkCyan",
      }
    ],
    result: [
      {
        name: "GREEN FEE<br>SINGLE CADDIE &<br>GOLFER CART",
        nineHolePrice: "USD 80.00",
        eighteenHolePrice: "USD 132.00",
        color: "text-amber",
        font: "font-bold"
      }
    ]
  }
]

export const rightData: RateItem[] = [
  {
    title: "WEEKEND (SAT & SUN) & PUBLIC HOLIDAYS",
    color: "bg-amber",
    header: [
      {
        empty: "",
        nineHole: "9 HOLES",
        eighteenHole: "18 HOLES",
        color: "bg-amber",
      }
    ],
    result: [
      {
        name: "GREEN FEE<br>SINGLE CADDIE &<br>GOLFER CART",
        nineHolePrice: "USD 106.25",
        eighteenHolePrice: "USD 161.50",
        color: "text-amber",
        font: "font-bold"
      }
    ]
  }
]