// Structure for welcome section content
export interface WelcomeItem {
  title: string;
  subtitle: string;
  description: string;
  button: string;
}

// Static welcome content data (can be replaced by API later)
export const welcomeData: WelcomeItem[] = [
  {
    title: 'Welcome to',
    subtitle: 'Chhun On Golf Resort',
    description:
      'We are delighted to welcome you to Chhun On Golf Resort, located only 40 minutes’ drive from the heart of Phnom Penh. Brian Curley, a well-known golf course architect with 35 years of successful worldwide golf course design and construction, created for us two 18-hole golf courses and our iconic 19th hole that will blow your mind. “Our clients have decided to place the golf experience first and foremost to create the best courses in the country,” said Curley. “There is also a strong desire to create two distinctly different layouts, so every effort has been made to optimize this wish.',
    button: 'BOOK NOW', // Primary action for users
  },
];