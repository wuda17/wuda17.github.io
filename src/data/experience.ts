export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  companyLogo?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2025 - Present",
    title: "Research Associate",
    company: "Control Learning and Logic (CL2) Lab under <b>Professor Yash Pant</b>",
    description: "I am working on developing fast, parallelized environment built on TORCS, and exploring Adaptive Diffusion Policies for hybrid-control problems.",
    companyLogo: "/uw.png",
    companyUrl: "https://yashpant.github.io/"
    },
  {
    date: "May 2025 - Aug 2025",
    title: "Research Intern",
    company: "dConstruct Robotics",
    description:
      "Boosted 3D reconstruction fidelity by <b>30%</b>, accelerated pre-processing by <b>300%+</b>, and enabled large-scene processing.",
    companyUrl: "https://dconstruct.co",
    companyLogo: "/dconstruct.jpg",
  },
  {
    date: "Jan 2024 - Apr 2024, Sep 2024 - Dec 2024",
    title: "Perception Engineering Intern",
    company: "Clearpath Robotics by Rockwell Automation",
    description:
      "Cut robot localization search times and RAM by <b>10x</b>, and automating 3D pointcloud regression testing from <b>9 hours to 8 minutes</b>.",
    companyUrl: "https://clearpathrobotics.com",
    companyLogo: "/clearpath.png",
  },
  {
    date: "Apr 2024 - Dec 2024",
    title: "Research Associate",
    company: "Vision and Image Processing Lab under <b>Professor Paul Fieguth</b>",
    description: "Led self-supervised learning research for insect classification and engineered a scalable dataset pipeline, processing <b>5M+</b> records.",
    companyLogo: "/uw.png",
    companyUrl: "https://vip.uwaterloo.ca/"
    },
  {
    date: "May 2023 - Aug 2023",
    title: "Software Engineering Intern",
    company: "Genesys",
    description: "Developed an integration microservice, bringing in <b>2 new corporate clients</b>, and reduced API costs by <b>90%</b>.",
    companyUrl: "https://www.genesys.com/",
    companyLogo: "/genesys.png",
  },
  {
    date: "Sep 2022 - Dec 2022",
    title: "Backend Engineering Intern",
    company: "Manorlead",
    companyLogo: "/manorlead.jpeg",
    description:"Architected scalable RESTful APIs, enabling <b>10%</b> weekly userbase growth, and optimized search bar matching efficiency by <b>25%</b>.",
  },
];