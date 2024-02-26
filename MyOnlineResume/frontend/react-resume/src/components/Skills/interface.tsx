export interface TechnologyExperience {
  technology: string;
  experience: number;
}

export interface SkillsProps {
  isLoading: boolean;
  skills: TechnologyExperience[] | null;
}
