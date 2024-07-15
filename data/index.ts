export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "FullStack Software Engineer",
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
    title: "Currently building an online ticketing web application",
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
    title: "Passwave - Event Ticketing Application",
    des: "Co-developed an event ticketing platform with friends for buying and selling tickets online. Built with React, TypeScript, and GraphQL for a seamless and secure user experience.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/graphql.svg"],
    link: "https://www.passwave.ng/",
  },
  {
    id: 2,
    title: "Social Media App",
    des: "A social Media app built with ReactJs, Chakra UI, Firbase, and other JavaScript libraries such as React-Hook-Form, etc.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "firebase.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "GitHub Finder",
    des: "This app makes it easy for you to search and view Github users profile.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://jamils-github-finder.netlify.app/",
  },
  {
    id: 4,
    title: "QR Code generator",
    des: "We all desire a fast and seamless ways to share links, this application creates a QR code for links",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
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
    img: "/twit.svg",
    link: "https://x.com/Amasa_tech",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jamil-amasa",
  },
];
