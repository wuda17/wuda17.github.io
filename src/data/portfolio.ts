export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Loop",
    description:
      "Developed a hybrid lane-keeping and person-following ROS2 autonomy stack, achieving 100% lap completion and 40% smoother steering in outdoor environments using ZED2 stereo vision.",
    codeUrl: "https://github.com/wuda17/loop",
    projectUrl: "/loop",
    imageUrl: "/loop.png",
    technologies: ["ROS2", "Python", "C++"],
  },
  {
    title: "Sprint",
    description:
      "Used transformer-generated embeddings to inform neural network and clustering-based recommendations on 270,000+ scraped Devpost projects in PyTorch.",
    codeUrl: "https://github.com/TheSprintTeam/techstack-torch",
    projectUrl: "https://github.com/TheSprintTeam",
    technologies: ["PyTorch"],
  },
];