import React, { FC } from "react";
import { IconButtonProps } from "./interface";
import { IconButtonWrapper } from "./styled";

import { Icon } from "src/components";

export const IconButton: FC<IconButtonProps> = ({
  id,
  testId,
  icon,
  disabled = false,
  clicked = false,
  onClick,
}) => {
  return (
    <>
      <IconButtonWrapper
        id={id}
        onClick={onClick}
        disabled={disabled}
        $clicked={clicked}
        data-testid={testId}
      >
        <Icon icon={icon} />
      </IconButtonWrapper>
    </>
  );
};
