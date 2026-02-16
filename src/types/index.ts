export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
}

export interface ServiceFeature {
  iconName: string;
  titleKey: string;
  descriptionKey: string;
}

export interface Step {
  number: number;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  nameKey: string;
  roleKey: string;
  contentKey: string;
  rating: number;
}

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}

export type Language = 'it' | 'en' | 'fr';
