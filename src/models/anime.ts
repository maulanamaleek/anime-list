/* eslint-disable no-use-before-define */
export interface Anime {
  id?: number;
  title: Title;
  coverImage: CoverImage;
  bannerImage: string;
  startDate: EndDateClass;
  endDate: EndDateClass;
  description: string;
  season: string;
  seasonYear: number;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  genres: string[];
  synonyms: string[];
  source: string;
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  favourites: number;
  hashtag: string;
  countryOfOrigin: string;
  isLicensed: boolean;
  characterPreview: CharacterPreview;
  studios: Studios;
  externalLinks: ExternalLink[];
  trailer: Trailer;
}

export interface CharacterPreview {
  edges: CharacterPreviewEdge[];
}

export interface CharacterPreviewEdge {
  id: number;
  role: string;
  name: null;
  voiceActors: VoiceActorClass[];
  node: VoiceActorClass;
}

export interface VoiceActorClass {
  id: number;
  name: Name;
  image: Image;
  language?: string;
}

export interface Image {
  large: string;
}

export interface Name {
  userPreferred: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  color: string;
}

export interface EndDateClass {
  year: number;
  month: number;
  day: number;
}

export interface ExternalLink {
  id: number;
  site: string;
  url: string;
  type: string;
  language: null | string;
  color: null | string;
  icon: null | string;
}

export interface Studios {
  edges: StudiosEdge[];
}

export interface StudiosEdge {
  isMain: boolean;
  node: PurpleNode;
}

export interface PurpleNode {
  id: number;
  name: string;
}

export interface Title {
  userPreferred: string;
}

export interface Trailer {
  id: string;
  site: string;
}
