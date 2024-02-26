import React, { FC } from "react";
import { ProfileProps } from "./interface";
import {
  ProfileAbout,
  ProfileContact,
  ProfileContacts,
  ProfileTitleAbout,
  ProfileWrapper,
} from "./styled";

import {
  Photo,
  Skills,
} from "src/components";

export const Profile: FC<ProfileProps> = ({
  photoUrl,
  aboutMe,
  contacts,
  skillsLoading,
  skills,
}) => {
  return (
    <>
      <ProfileWrapper>
        <Photo src={photoUrl} />
        <ProfileTitleAbout>Sobre mim</ProfileTitleAbout>
        <ProfileAbout>{aboutMe}</ProfileAbout>
        {contacts && (
          <ProfileContacts>
            {contacts.map(({ title, value }, index) => (
              <ProfileContact key={index}>
                {title}: {value}
              </ProfileContact>
            ))}
          </ProfileContacts>
        )}
        <Skills skills={skills} isLoading={skillsLoading} />
      </ProfileWrapper>
    </>
  );
};
