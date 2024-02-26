export interface IconButtonProps {
  id?: string;
  testId?: string;
  icon: string;
  disabled?: boolean,
  clicked?: boolean,
  onClick: () => void;
}

export interface IconButtonStyle {
  $clicked?: boolean,
}