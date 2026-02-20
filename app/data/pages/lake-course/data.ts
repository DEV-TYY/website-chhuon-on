import { ref } from 'vue'


export interface PackageItem {
  title: string
  description: string
  image: string
}

export const packageContent: PackageItem[] = [
  {
    title: "LAKE COURSE",
    description: `The Chhun On Golf Resort Lake Course, is an impressive 7,350-yard golfing masterpiece that boasts a captivating mixture of deep lakes and lush, green landscapes. This challenging yet visually stunning course offers golfers of all skill levels the chance to test their abilities, with five strategically placed tee areas, wide fairways, and generous undulating greens.`,
    image: "/slide/slider_five.webp"
  }
]


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


// ../../data/pages/lake-course/data.ts
export interface ServiceItem {
  discover: string
  title: string
  subtitle: string
  url: string
  description: string
  subdescription: string
  button?: string
  image: string
}

export const service: ServiceItem[] = [
  {
    discover: "",
    title: "GRASS TYPE",
    subtitle: "",
    url: "",
    description: "Zeon Zoysia has become a top choice for many landscaping and golf course professionals due to its vibrant color, soft texture, low maintenance requirements, and resilience, making it an excellent option for creating beautiful, durable, and sustainable turfgrass landscapes.",
    subdescription: "Primo Zoysia putting surfaces provide a balance of playability, visual appeal, and sustainable maintenance characteristics, making them a preferred choice for golf course architects, superintendents, and players seeking high-quality, durable, and visually stunning putting greens.",
    image: "/slide/slider_five.webp"
  },
  {
    discover: "",
    title: "TEA HOUSE",
    subtitle: "",
    url: "#",
    description: "The Two Tea Houses, located on  Hole 5 and Hole 13, offer a refreshing experience for all golfers during their rounds. Both tea houses provide a nice ambiance in Khmer design, comfortable seats, great services, and a variety of beverages and various Asian and Western dishes.",
    subdescription: "",
    image: "/slide/tea_house.webp"
  },
  {
    discover: "",
    title: "THE <span class='2xl:text-4xl text-3xl'>19<sup class='text-lg'>TH</sup></span>  HOLE",
    subtitle: "",
    url: "#",
    description: "With its unique design shaped representing Cambodia map, the 19<sup class='text-lg'>th</sup></span> hole offers a unique experience for all players on the island. After their tee-shot, all golfers have to board in the luxurious solar-powered boat to get to the most scarry green of the golf course.",
    subdescription: "",
    image: "/slide/gallery_5.webp"
  }
]