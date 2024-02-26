export interface ProfileContacts {
  title: string;
  value: string;
}

export interface ProfileProps {
  photoUrl: string;
  aboutMe: string;
  contacts?: ProfileContacts[];
}
