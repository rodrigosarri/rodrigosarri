export interface Job {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
}

export interface ExperienceProps {
  isLoading: boolean;
  jobs?: Job[];
}
