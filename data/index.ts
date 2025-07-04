export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Frontend Software Developer",
    description: "I am a",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I prioritize transparency, fostering open communication",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building an AI-powered buffet recommender for 5-star hotels using Next.js and FastAPI.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title:
      "Learn more about my professional experience, skills, and education.",
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
    title: "BuffetBuddy – AI Meal Recommender",
    des: "AI-powered buffet recommendation system currently being piloted in a 5-star hotel. Combines FastAPI, OpenAI, and Next.js to deliver personalized, health-conscious meal suggestions.",
    img: "/p5.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.webp"],
    link: "https://buffet-wellness-guide.vercel.app/",
  },
  {
    id: 2,
    title: "Passwave - Event Ticketing Application",
    des: "Led frontend architecture and co-developed a modern ticketing platform enabling secure, real-time ticket sales and validation. Engineered with React, TypeScript, and GraphQL to ensure scalability, performance, and seamless UX for thousands of users.",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.webp", "/graphql.svg"],
    link: "https://www.passwave.ng/",
  },

  {
    id: 3,
    title: "Social Media App",
    des: "A social Media app built with ReactJs, Chakra UI, Firbase, and other JavaScript libraries such as React-Hook-Form, etc.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.webp", "firebase.svg"],
    link: "https://socialmedia-2a0c7.web.app/login/",
  },
  {
    id: 4,
    title: "QRGen – Instant QR Code Generator",
    des: "Designed and built to solve a personal need for quickly sharing links—this tool generates clean, responsive QR codes on the fly. Developed with HTML, TypeScript, and CSS for a fast, intuitive user experience.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.webp"],
    link: "https://jamils-qrcode-generator.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Jamil on a ticketing app project. He exhibited outstanding technical skills and professionalism, contributing significantly to the project's success. Highly recommended.",
    name: "Oluwanifemi Akeju",
    title: "Fullstack Software Engineer at Passwave",
  },
  {
    quote:
      "Collaborating with Jamil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jamil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jamil is the ideal partner.",
    name: "Folorunsho Fareed",
    title: "FrontEnd Developer at Barrel",
  },
  {
    quote:
      "Working with Jamil has been an absolute pleasure. He exemplifies integrity, honesty, and transparency in every aspect of his work. His technical prowess is matched only by his dedication to delivering exceptional results. Collaborating with him has not only been productive but also a learning experience. I highly recommend Jamil for his outstanding skills and admirable work ethic.",
    name: "Raphael Onunkwor",
    title: "Senior Frontend Developer at Passwave",
  },
  {
    quote:
      "Working with Jamil on Power Apps projects at CWG PLC has been fantastic. Jamil is highly skilled, creative, and a real team player. He consistently brings fresh ideas and solutions to the table, making our collaboration both productive and enjoyable. If you're looking for someone who excels in Power Apps and works well with others, Jamil is the person you need.",
    name: "Kenechukwu Christopher Duru",
    title: "Lead Product Designer at ",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - Konectgate",
    desc: "Led the development of a financial application’s frontend, focusing on UI design, payment integration, and data visualization while ensuring adherence to confidentiality agreements.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer - Ijidola Digital Agency",
    desc: "Spearheaded the redesign of the Finpadi User fintech app, increasing user engagement by 35% through innovative UI/UX enhancements.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Microsofft Power Apps Developer - CWG PLC",
    desc: "Developed 3+ in-house solutions including an attendance application, service desk application and an e- commerce application using Microsoft Power Apps and Sharepoint, reducing the company expenses by 15%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer - Passwave Ng",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jamilamasa",
  },
  {
    id: 2,
    img: "/twit.webp",
    link: "https://x.com/Amasa_tech",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jamil-amasa",
  },
];
