import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

public selectedDepartments: string = ''

// Mock Noticias

noticias = [
  {
    id: "noticia-1",
    title: "title 1",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location1",
    dateOfArticle: "05-31-2023",
    articleDescription: "Article Description",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Comida",
    isFavorite: true,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 11 2023 15:41:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-2",
    title: "title 2",
    imgUrl: "./assets/images/screen.png", 
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Ocio",
    isFavorite: true,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-3",
    title: "title 3",
    imgUrl: "./assets/images/screen2.png",
    locationName: "New location3",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",    
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Ocio",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-4",
    title: "title 4",
    imgUrl: "./assets/images/office.png",
    locationName: "New location4",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",    
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-5",
    title: "title 5",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location1",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",    
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Comida",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-6",
    title: "title 6",
    imgUrl: "./assets/images/picture.png", 
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",    
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Gaming",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-7",
    title: "title 7",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location3",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",     
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Gaming",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-8",
    title: "title 8",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location4",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",     
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-9",
    title: "title 9",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location43",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",     
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
  {
    id: "noticia-10",
    title: "title 10",
    imgUrl: "./assets/images/picture.png",
    locationName: "New location12",
    dateOfArticle: "12-31-2005",
    articleDescription: "Article Description",     
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
    isFavorite: false,
    comments:[
      {
        id: 1,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 10 2023 10:51:35",
        commentBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      },
      {
        id: 2,
        userName: "Arturo Salacedo",
        departments: "Diseño, Ventas, Ionic",
        userImg: "./assets/images/user-photo.png",
        datePosted: "Sat Jun 1 2023 09:51:35",
        commentBody: " Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum."
      }
    ]
  },
]


FAQ = [
  {
    title: "FAQ1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum."
  },
  {
   title: "FAQ2",
   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum."
  }
];


TerminosYCondiciones = [
  {
    title: "Terminos 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum."
  },
  {
    title: "Terminos 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum."
  },
]




politicasDePrivacidad = [
  {
    title: "Politicas 1",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum.
    At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.`
  },
  {
    title: "Politicas 2",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum.
    At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.`
  }
]


perfils = [{
  id: 1,
  departamentos: ['Back', 'Android', 'Proyectos'],
  nombre: 'Paulius Mockevicius',
  mail: 'paulius@rudo.es',
  contrasena: '12345'
},
{
  id: 2,
  departamentos: ['Back', 'Android', 'Proyectos'],
  nombre: 'Test Mockevicius',
  mail: 'test@rudo.es',
  contrasena: '12345'
}
]

}
