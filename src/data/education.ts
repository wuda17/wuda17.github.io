export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021 - 2026",
    institution: "University of Waterloo",
    degree: "BAsc in Systems Design Engineering", 
    thesis: " 4x Dean's List, President's Scholarship, President's Research Award",
}
];
