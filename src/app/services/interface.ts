export interface NewsArticle {
    imgUrl: string;
    locationName: string;
    dateOfArticle: string;
    articleDescription: string;
    category: string;
  }

  interface Comment {
    id: number;
    userName: string;
    departments: string;
    userImg: string;
    datePosted: string;
    commentBody: string;
  }

  export interface Noticia {
    id: string;
    title: string;
    imgUrl: string;
    locationName: string;
    dateOfArticle: string;
    articleDescription: string;
    articleBody: string;
    category: string;
    comments: any;
  };