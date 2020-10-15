module.exports = {
  siteTitle: 'Shannon Ng | Designer',
  siteDescription:
    'Shannon is a designer based in New York City, specializing in interactive and web design.',
  siteKeywords:
    'Shannon Ng, Shannon, designer, product designer, UIUX designer, interactive designer, web designer, new york city designer',
  siteUrl: 'https://shannonng.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shannon Ng',
  location: 'New York, NY',
  email: 'shannon95ng@gmail.com',
  twitterHandle: '@shannon_95',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shannon95ng',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shannon_187',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shannon_187',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
