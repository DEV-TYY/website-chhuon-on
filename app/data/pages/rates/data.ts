import { ref } from 'vue'

// TypeScript interfaces
interface Package {
  title: string
  subtitle: string
  description: string
  button: string
  url: string
  image: string
}

interface TableHeader {
  empty: string
  eignteenHole?: string
  twentySevenHole?: string
  thirtySixHole?: string
  nineHole?: string
  color: string
}

interface TableResult {
  name: string
  na: string
  eignteenHolePrice?: string
  twentySevenHolePrice?: string
  thirtySixHolePrice?: string
  nineHolePrice?: string
  color: string
  font: string
}

interface TableData {
  type: string
  title: string
  color: string
  header: TableHeader[]
  result: TableResult[]
}

// Packages
export const packages = ref<Package[]>([
  {
    title: 'GOLF RATES',
    subtitle: '& FEES 2026',
    description:
      'Introducing our exclusive golf rates for 2026 – a limited-time offer that promises an unparalleled golfing experience at an unbeatable price. Make sure to take advantage all along the year of these special rates while you perfect your skills and savor each moment on the course.',
    button: 'BOOK A TEE TIME',
    url: 'mailto:info@chhunon-golfresort.com',
    image: "/banner/golf-rate-banner.webp",
  },
])

// Table Data
export const allData = ref<TableData[]>([
  {
    type: 'weekday',
    title: 'WEEKDAY (MON - FRI)',
    color: 'bg-darkCyan',
    header: [
      { empty: '', eignteenHole: '18 HOLES', twentySevenHole: '27 HOLES', thirtySixHole: '36 HOLES', color: 'bg-darkCyan' },
    ],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        eignteenHolePrice: 'USD 132.00',
        twentySevenHolePrice: 'USD 189.00',
        thirtySixHolePrice: 'USD 243.00',
        color: 'text-darkCyan',
        font: 'font-bold',
      },
    ],
  },
  {
    type: 'weekend',
    title: 'WEEKEND (SAT & SUN) & PUBLIC HOLIDAYS',
    color: 'bg-amber',
    header: [
      { empty: '', eignteenHole: '18 HOLES', twentySevenHole: '27 HOLES', thirtySixHole: '36 HOLES', color: 'bg-amber' },
    ],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        eignteenHolePrice: 'USD 161.50',
        twentySevenHolePrice: 'USD 230.00',
        thirtySixHolePrice: 'USD 296.00',
        color: 'text-amber',
        font: 'font-bold',
      },
    ],
  },
  // Night weekday
  {
    type: 'night_weekday',
    title: 'WEEKDAY (MON - FRI)',
    color: 'bg-darkCyan',
    header: [{ empty: '', nineHole: '9 HOLES', eignteenHole: '18 HOLES', color: 'bg-darkCyan' }],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        nineHolePrice: 'USD 80.00',
        eignteenHolePrice: 'USD 132.00',
        color: 'text-darkCyan',
        font: 'font-bold',
      },
    ],
  },
  // Night weekend
  {
    type: 'night_weekend',
    title: 'WEEKEND (SAT & SUN) & PUBLIC HOLIDAYS',
    color: 'bg-amber',
    header: [{ empty: '', nineHole: '9 HOLES', eignteenHole: '18 HOLES', color: 'bg-amber' }],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        nineHolePrice: 'USD 106.25',
        eignteenHolePrice: 'USD 161.50',
        color: 'text-amber',
        font: 'font-bold',
      },
    ],
  },
  // Junior weekday
  {
    type: 'junior_weekday',
    title: 'WEEKDAY (MON - FRI)',
    color: 'bg-darkCyan',
    header: [{ empty: '', nineHole: '9 HOLES', eignteenHole: '18 HOLES', color: 'bg-darkCyan' }],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        nineHolePrice: 'USD 65.00',
        eignteenHolePrice: 'USD 90.00',
        color: 'text-darkCyan',
        font: 'font-bold',
      },
    ],
  },
  // Junior weekend
  {
    type: 'junior_weekend',
    title: 'WEEKEND (SAT & SUN) & PUBLIC HOLIDAYS',
    color: 'bg-amber',
    header: [{ empty: '', nineHole: '9 HOLES', eignteenHole: '18 HOLES', color: 'bg-amber' }],
    result: [
      {
        name: 'GREEN FEE <br>SINGLE CADDIE &<br> GOLFER CART',
        na: 'N/A',
        nineHolePrice: 'USD 65.00',
        eignteenHolePrice: 'USD 110.00',
        color: 'text-amber',
        font: 'font-bold',
      },
    ],
  },
])