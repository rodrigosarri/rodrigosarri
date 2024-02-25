import React, { FC } from "react";
import { IconProps } from "./interface";

export const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <>
      <span className="material-symbols-rounded">{ icon }</span>
    </>
  );
};
