export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  duration: string;
  priceEstimate: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  clientName: string;
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}
