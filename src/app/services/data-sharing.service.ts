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
    id: "noticia-2",
    title: "title 2",
    imgUrl: "./assets/images/screen.png", 
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "Use Array.prototype.every() method to check whether all elements in an array pass the test implemented by the provided function;.",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Ocio",
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
    articleDescription: "H for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Ocio",
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
    articleDescription: " He You can choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
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
    articleDescription: " Hel You can choose - only  12345real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Comida",
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
    articleDescription: "Hell You can choose - 123labas only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Gaming",
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
    articleDescription: "You Hello can choose 12 laba- only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Gaming",
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
    articleDescription: "You can Hello! choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
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
    articleDescription: "You can Hello! choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
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
    articleDescription: "You can Hello! choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    articleBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium porttitor orci, ut sed proin id morbi. Ac tincidunt donec imperdiet venenatis aliquet ipsum. Facilisi iaculis scelerisque sit vitae lectus dis turpis ac cum.",
    category: "Deporte",
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


}
