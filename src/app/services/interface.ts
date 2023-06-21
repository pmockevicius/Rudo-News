

  export interface FAQ {
    title: string;
    body: string;
  };

  export interface TermsYCondiciones {
    title: string;
    body: string;
  }

  export interface PoliticasDePrivacidad {
    title: string;
    body: string;
  }


  export interface PostResponse {
    count: number;
    next: string | null;
    page: number;
    pages: number;
    previous: string | null;
    results: Post[];
  }
    
  export interface Category {
    id: number;
    name: string;
  }

  export interface Post {
    id: number;
    creation_date: string;
    category: Category;
    title: string;
    subtitle: string;
    description: string;
    short_description: string;
    image: string;
    video: string | null;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    user: any | null;
    text: string;
  }
  