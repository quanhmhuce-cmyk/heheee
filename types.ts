export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  size: 'small' | 'medium' | 'large';
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum RsvpStatus {
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
  MAYBE = 'MAYBE'
}

export interface RsvpFormData {
  name: string;
  phone: string;
  guests: number;
  status: RsvpStatus;
  message: string;
}