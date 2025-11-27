export interface PolicySectionData {
  id: string;
  title: string;
  content: string | string[];
  subsections?: {
    title?: string;
    items: string[];
  }[];
}

export interface ContactInfo {
  email: string;
  name: string;
}
