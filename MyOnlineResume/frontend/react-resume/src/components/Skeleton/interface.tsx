import { ThemeState } from "src/redux/theme/interface";

export interface SkeletonProps {
  id?: string;
  testId?: string;
  duration?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  theme?: ThemeState["currentTheme"];
}

export interface SkeletonStyle {
  duration?: string;
  width?: string;
  height?: string;
  $borderRadius?: string;
  theme?: ThemeState["currentTheme"];
}