import React, { FC } from "react";
import { SkeletonProps } from "./interface";
import { SkeletonPulse } from "./styled";

export const Skeleton: FC<SkeletonProps> = ({
  id,
  testId,
  duration,
  width,
  height,
  borderRadius
}) => {
  return (
    <SkeletonPulse
      id={id}
      data-testid={testId}
      duration={duration}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};
