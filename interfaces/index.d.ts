export interface Alert {
  show: boolean;
  title: string;
  description: string;
  backgroundColor: string;
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

export interface Comments {
  username: string;
  comment: string;
  createdAt: string;
}
export interface User {
  broadcaster_type: string;
  created_at: string;
  description: string;
  display_name: string;
  id: string;
  login: string;
  offline_image_url: string;
  profile_image_url: string;
  type: string;
  view_count: number;
}
