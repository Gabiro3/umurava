import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Umurava has completely changed my career trajectory. The Talent Xperience events and Career Ticketing program gave me real-world experience and connected me with top employers. I'm now in a role I love, thanks to their support.",
    person: 'Gakire M.',
    avatar: robert_fox,
  },
  {
    testimony:
      "Thanks to Umurava, I gained new digital skills through their Skills Challenges. Their platform helped me build a strong talent profile that landed me multiple job offers in the tech industry. It’s been a game-changer for my career.",
    person: 'Andrew G.',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "As a company, we partnered with Umurava to access highly skilled, vetted freelancers for our projects. Their talent pool has been instrumental in improving our project efficiency, and we’ve seen a significant boost in our output. Highly recommended!",
    person: 'Marie P.',
    company: 'Tech Innovations Ltd.',
    avatar: esther_howard,
  },
  {
    testimony:
      "We outsourced several roles through Umurava’s platform, and it has been seamless. The quality of talent we've sourced has exceeded our expectations. The talent is not only skilled but also affordable and reliable. Umurava has been a true partner in our growth.",
    person: 'Sarah E.',
    company: 'Global Tech Solutions',
    avatar: esther_howard,
  },
  {
    testimony:
      "Our company used Umurava’s services to fill key positions, and the process was incredibly fast. We had access to top-tier talent, and the efficiency of their platform made the recruitment process smoother and faster than traditional methods.",
    person: 'John R.',
    company: 'Innovative Enterprises',
    avatar: esther_howard,
  },
];


export const desktopHeaderPhrase = ['Join over 10,000', 'talents'];
