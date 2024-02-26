import React, { FC } from "react";
import { PhotoProps } from "./interface";
import {
  PhotoImage,
  PhotoWrapper
} from "./styled";

export const Photo: FC<PhotoProps> = ({ src, alt = "Imagem de perfil" }) => {
  return (
    <>
      <PhotoWrapper>
        <PhotoImage src={src} alt={alt} title={alt} />
      </PhotoWrapper>
    </>
  );
};
