export interface TechStackItem {
  skill: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  imgUrl: string;
  difficulty: string;
  techStack: TechStackItem[];
  shortInformation: string;
  detailedInformation: string;
}
