export interface Service {
  id: string;
  name: string;
  category: 'cabelo' | 'barba' | 'combo' | 'acabamento';
  description: string;
  price: number;
  formattedPrice: string;
  duration: string;
  popular?: boolean;
  features: string[];
}

export interface Barber {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  experience: string;
  bio: string;
  photo: string;
  specialty: string;
  rating: number;
  instagram: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barbas' | 'degrades' | 'ambiente';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  barber: string;
}

export interface BookingData {
  serviceId: string;
  barberId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}
