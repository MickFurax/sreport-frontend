export interface Props {
  title?: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
