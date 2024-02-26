import { TechnologyExperience } from "../Skills/interface";

export interface ProfileContacts {
  title: string;
  value: string;
}

export interface ProfileProps {
  photoUrl: string;
  aboutMe: string;
  contacts?: ProfileContacts[];
  skills: TechnologyExperience[] | null;
  skillsLoading: boolean;
}
