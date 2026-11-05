export type Language = 'hi' | 'en';

export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  image: string;
  icon: string;
  highlightsHi: string[];
  highlightsEn: string[];
}

export interface GalleryImage {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'all' | 'stage' | 'ceremony' | 'dining' | 'entrance';
  image: string;
  captionHi: string;
  captionEn: string;
}

export interface Amenity {
  id: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  icon: string;
}
