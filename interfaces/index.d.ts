export interface Alert {
  show: boolean;
  title: string;
  description: string;
  width: string;
  onClick?: () => void;
}

export interface Icon {
  name: string;
  className: string;
}
