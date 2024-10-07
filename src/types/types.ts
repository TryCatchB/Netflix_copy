export interface Content {
  id: string;
  title: string;
  image: string;
  video: string;
  description: string;
  type?: string;
  metadata: {
    year: string;
    rating: string;
    episodes?: string;
  };
}
