export interface Stanza {
  latin: string;
  portuguese: string;
}

export interface Section {
  label: string;
  stanzas: Stanza[];
}

export interface PaintingImage {
  src: string;
  alt: string;
  attribution: string;
}

export interface Prayer {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  image: PaintingImage;
  stanzas?: Stanza[];
  sections?: Section[];
}
