export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "David Wu",
  title: "Systems Design Engineering",
  institution: "University of Waterloo",
  description:
    "I'm a final-year Systems Design Engineering student at the <a href='https://uwaterloo.ca'>University of Waterloo</a>. Most recently, as a Researcher at <a href='https://www.dconstruct.co/'>dConstruct Robotics</a>, I focused on large-scale 3D scene reconstruction.<br/><br/>My experience is focused on perception and robotics at <a href='https://clearpathrobotics.com/'>Clearpath Robotics</a> and the <a href='https://vip.uwaterloo.ca/'>VIP Lab at UW</a> (under <a href='https://uwaterloo.ca/systems-design-engineering/profile/pfieguth'>Prof. Paul Fieguth</a>), and backend and cloud infrastructure roles at <a href='https://www.genesys.com/'>Genesys</a> and <a href='https://www.manorlead.com/'>Manorlead</a>.<br/><br/><b>I am actively seeking full-time opportunities starting May 2026. See my <a href='/cv'>resume</a>.</b>",
  email: "david.wu1@uwaterloo.ca",
  imageUrl: "/pfp.jpg",
  githubUsername: "wuda17",
  linkedinUsername: "wudaa",
  cvUrl: "/cv",
  secretDescription: "I like cooking.",
};
