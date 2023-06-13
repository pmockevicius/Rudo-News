export interface NewsArticle {
    imgUrl: string;
    locationName: string;
    dateOfArticle: string;
    articleDescription: string;
    category: string;
    isFavorite: boolean;
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
    isFavorite: boolean;
    comments: any;
  };

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

  export interface Perfil {
    id: number;
    departamentos: string[];
    nombre: string;
    mail: string;
    contrasena: string;
  }