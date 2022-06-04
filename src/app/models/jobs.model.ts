export interface JobsModel {
    id: number;
    company: String;
    logo: String;
    new: boolean;
    featured: boolean;
    position: String;
    role: String;
    level: String;
    postedAt: String;
    contract: String;
    location: String;
    createdAt: string;
    updatedAt: string;
    UserId: number
    Skills: {
      id: number;
      name: string;
      JobSkill: {
        JobId: number;
        SkillId: number; };
    }[];
  }