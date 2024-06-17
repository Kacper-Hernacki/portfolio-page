import DaudAvatarImage from "@/public/testimonials/Daud-testimonial.webp";
import ArturAvatarImage from "@/public/testimonials/Artur-testimonial.webp";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full p-",
    titleClassName: "justify-end",
    img: "/me.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for developing epic solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Next.js 14 micro SaaS boilerplate which sells.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QuickBucks - Micro SaaS boilerplate which sells",
    des: "Set up you micro SaaS in minutes, instead of hours. Save time on Stripe, webhooks and more...",
    img: "/portfolio/p2.png",
    iconLists: ["/tech/next.svg", "/tech/tail.svg", "/tech/ts.svg", "/tech/stripe.png", "/tech/fm.svg"],
    link: "https://www.quickbucks.site",
  },
  {
    id: 2,
    title: "NotionFlow - Notion as CMS template",
    des: "Do you want to manage your app from Notion? Use this template to achieve that.",
    img: "/portfolio/p1.png",
    iconLists: ["/tech/next.svg", "/tech/tail.svg", "/tech/ts.svg", "/tech/notion.svg"],
    link: "https://www.notionflow.site/",
  },
  {
    id: 3,
    title: "Personal API for AI Assistant",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/portfolio/p3.png",
    iconLists: ["/tech/nodejs.png", "/tech/chatgpt.png", "/tech/ts.svg", "/tech/postgresql.png", "/tech/prisma.svg", "/tech/postman.png"],
    link: "/private-repo",
  },
  {
    id: 4,
    title: "Moderndev platform",
    des: "Next.js 14 + firebase and next auth. It displays content from my youtube tutorials and useful code snippets.",
    img: "/portfolio/p4.png",
    iconLists: ["/tech/next.svg", "/tech/firebase.png", "/tech/tail.svg", "/tech/ts.svg", "/tech/notion.svg", "/tech/stripe.png"],
    link: "https://www.moderndev.io",
  },
  {
    id: 5,
    title: "100 days of web3 challenge",
    des: "Released 100 medium articles and twitter threads about web3.",
    img: "/portfolio/p5.png",
    iconLists: ["/tech/github.svg"],
    link: "https://github.com/Kacper-Hernacki/100-days-of-web3-challenge-blockchain-free-materials",
  },
  {
    id: 6,
    title: "Talking Notes AI",
    des: "Next.js 14 app with chatGPT API and qdrant vector database. App allows to talk with your notion notes.",
    img: "/portfolio/p6.png",
    iconLists: ["/tech/next.svg", "/tech/dock.svg", "/tech/notion.svg", "/tech/qdrant.png", "/tech/chatgpt.png"],
    link: "/private-repo",
  },
  {
    id: 7,
    title: "Automations with make.com",
    des: "Free blueprints of automations scenarios made in make.com.",
    img: "/portfolio/p7.png",
    iconLists: ["/tech/make.png"],
    link: "https://github.com/Kacper-Hernacki/automations",
  },
  {
    id: 8,
    title: "Moderndev Newsletter",
    des: "Newsletter send weekly with modern development tips. Made in ghost.io",
    img: "/portfolio/p8.png",
    iconLists: ["/tech/ghost.png"],
    link: "https://newsletter.moderndev.io",
  },
  {
    id: 9,
    title: "Blockchain with TypeScript",
    des: "The protptype of bitcoin blockchain made with node.js and typescript.",
    img: "/portfolio/p9.png",
    iconLists: ["/tech/nodejs.png", "/tech/ts.svg"],
    link: "https://github.com/Kacper-Hernacki/blockchain-typescript-api",
  },
  {
    id: 10,
    title: "FireLaunch 🔥",
    des: "SaaS Next.js 14 boilerplate with Firebase as a database. Soon will be launched!",
    img: "/portfolio/p10.png",
    iconLists: ["/tech/firebase.png", "/tech/next.svg", "/tech/tail.svg", "/tech/ts.svg", "/tech/stripe.png"],
    link: "/private-repo",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Kasper as a front-end developer for our startup, and I can confidently say that he's been a driving force behind our success. Kasper not only takes ownership of his work but also consistently delivers results that exceed our expectations. He's not just a coder; he's a smart solution solver who has played a pivotal role in moving our project forward. If you're looking for a front-end developer who can take your project to the next level, Kasper is the one to hire. His expertise will undoubtedly contribute to your project's success.",
    name: "Daud Zulfacar",
    title: "CEO of License.rocks GmbH",
    image: DaudAvatarImage,
  },
  {
    quote:
      "Kacper is an amazing full-stack (React + Node.js) developer to work with. Eye for detail, always helpful with technical documentation, following trends, and suggesting smart solutions. Any team would be lucky to have him. He's not just a great developer, but a positive guy to have around. What impressed me most was his proactive approach, seamless communication, and ability to manage time productively.",
    name: "Artur Chmaro",
    title: "CTO of License.rocks GmbH",
    image: ArturAvatarImage,
  },
];

export const workExperience = [
  {
    id: 1,
    date:"Sep 2019 - Jun 2024",
    title: "Radar Engineer in Polish Army",
    desc: "Maintained and integrated radar system according to the specified requirements necessary for operational use in Airspace. As a graduation work, created automotive radar.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/experience/e5.png",
  },
  {
    id: 2,
    date:"Aug 2019 - Aug 2021",
    title: "Frontend Freelancer",
    desc: "Developed simple landing pages, e-commerces and blogs suited for clients needs. Got familiar with the professional approach to the client.",
    className: "md:col-span-2",
    thumbnail: "/experience/e4.png",
  },
  {
    id: 6,
    date:"Jan 2021 - today",
    title: "Programming Master",
    desc: "Built nearly 20k audience in different social medias posting coding tips & tricks (youtube videos, medium articles, github free repos, instagram & linkedIn infographics and twitter threads)",
    className: "md:col-span-2",
    thumbnail: "/experience/e2.png",
  },
  {
    id: 3,
    date:"Sep 2021 - Nov 2023",
    title: "Full Stack Developer in LicenseRocks GmBH",
    desc: "Managed and added different features in the backend and frontend of a product, including databases, auth, AI services and more).\n" +
      "Moreover, developed and maintained UI of the startup products, including frontend libraries, storefronts and multiple instances of the software.\n",
    className: "md:col-span-2",
    thumbnail: "/experience/e1.png",
  },
  {
    id: 5,
    date:"Dec 2023 - Today",
    title: "Solopreneur",
    desc: "Constantly seeking solutions for complex problems to ship them as a product. Extending skills to build successful SaaS, including programmatic SEO, performance optimization, AI features, clean code principles, and much more.",
    className: "md:col-span-2",
    thumbnail: "/experience/e3.png",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/socials/git.svg",
    link: "https://github.com/Kacper-Hernacki",
  },
  {
    id: 2,
    img: "/socials/twit.svg",
    link: "https://twitter.com/KacperHernacki",
  },
  {
    id: 3,
    img: "/socials/link.svg",
    link: "https://twitter.com/KacperHernacki",
  },
  {
    id: 4,
    img: "/socials/youtube.svg",
    link: "https://www.youtube.com/channel/UCTi-LX8VSgD_It9jDf8lpDQ",
  },
  {
    id: 5,
    img: "/socials/instagram.svg",
    link: "https://www.instagram.com/kacper.hernacki/",
  },
  {
    id: 5,
    img: "/socials/medium.svg",
    link: "https://medium.com/@hernackikacper",
  },
];
