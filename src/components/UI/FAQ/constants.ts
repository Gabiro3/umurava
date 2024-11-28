type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I create an account with Umurava?',
    answer:
      'Sign up for Umurava by visiting our Talent platform at [https://umurava.africa/talents](https://umurava.africa/talents). Simply fill in your details, create a profile, and start accessing our career-enrichment programs and job opportunities.',
  },
  {
    question: 'How does Umurava ensure the security of my personal data?',
    answer:
      'We take data security seriously. Umurava uses advanced encryption and security protocols to protect your personal information and ensure that your data is only used for the purpose of enhancing your career and skill development.',
  },
  {
    question: 'What types of programs can I access on Umurava?',
    answer:
      'Umurava offers a variety of talent-enrichment programs including Career Ticketing, Talent Xperience events, Skills Challenges, and access to job boards for both local and global opportunities. We provide tools to help you build a strong digital profile and develop in-demand skills.',
  },
  {
    question: 'How can companies use Umurava to find talent?',
    answer:
      'Companies can partner with Umurava to access a curated pool of skilled talents ready for various roles. Our platform enables companies to discover professionals with the right expertise through assessments, verified work experience, and talent profiles. Companies can also benefit from outsourcing through our platform for specialized projects.',
  },
  {
    question: 'How do I improve my chances of getting hired through Umurava?',
    answer:
      'To maximize your chances of getting hired, make sure your talent profile is complete and showcases both your hard and soft skills. Participate in Skill Challenges, attend Talent Xperience events, and complete assessments to enhance your profile. Engaging with these programs will help you gain visibility with top companies.',
  },
  {
    question: 'What makes Umurava different from other talent platforms?',
    answer:
      'Umurava stands out by offering a holistic approach to career growth. We don’t just connect talent to employers; we help talents build a complete digital profile, gain hands-on experience through assessments and projects, and provide access to exclusive job opportunities. Our platform fosters continuous learning and growth.',
  },
];

