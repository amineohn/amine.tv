export interface Alert {
  show: boolean;
  title: string;
  description: string;
  width?: string;
  onClick?: () => void;
  disableProgress: boolean;
}

export interface Icon {
  name: string;
  className: string;
}

export interface Games {
  id: string;
  name: string;
  box_art_url: string;
}
