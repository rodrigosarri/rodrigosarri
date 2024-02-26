import React, { useState, useEffect } from "react";
import { TechnologyExperience } from "src/components/Skills/interface";
import { Job } from "src/components/Experience/interface";
import { ProfileContacts } from "src/components/Profile/interface";

import { AboutWrapper } from "src/pages/About/styled";

import photo from "src/assets/images/rodrigo_sarri.jpeg";

import {
  Profile,
  Identity,
  Experience
} from "src/components";

import experiencesJsonData from "src/data/experiences.json";
import skillsJsonData from "src/data/skills.json";
import contactsJsonData from "src/data/contacts.json";

export const About = () => {
  const [experienceLoading, setExperienceLoading] = useState<boolean>(true);
  const [skillsLoading, setSkillsLoading] = useState<boolean>(true);

  const [experiencesData, setExperiencesData] = useState<Job[] | undefined>(undefined);
  const [skillData, setSkillData] = useState<TechnologyExperience[] | null>(null);
  const [contactsData, setContactsData] = useState<ProfileContacts[] | undefined>(undefined);

  const getSkills = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    setSkillData(skillsJsonData);

    setSkillsLoading(false);
  };

  const getExperiences = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setExperiencesData(experiencesJsonData);

    setExperienceLoading(false);
  };

  const getContacts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setContactsData(contactsJsonData);
  };

  useEffect(() => {
    getSkills();
    getExperiences();
    getContacts();

  }, []);

  return (
    <>
      <Profile
        photoUrl={photo}
        aboutMe="Eu sou um desenvolvedor Full Stack Sênior de forma balanciada entre Frontend e Backend com foco nos frameworks e linguagens de programação: React, Angular e Vue no FE e Laravel (PHP), Node e Python no BE"
        contacts={contactsData}
        skillsLoading={skillsLoading}
        skills={skillData}
      />
      <AboutWrapper aria-labelledby="about-me">
        <Identity
          name="Rodrigo Sarri"
          title="Desenvolvedor Full Stack Sênior"
        />
        <Experience jobs={experiencesData} isLoading={experienceLoading} />
      </AboutWrapper>
    </>
  );
};
