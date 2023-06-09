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
    imgUrl: "./assets/images/picture.png",
    locationName: "New location1",
    dateOfArticle: "12-31-2005",
    articleDescription: "Use Array.prototype.every() method to check whether all elements in an array pass the test implemented by the provided function;.",
    category: "Comida"
  },
  {
    imgUrl: "./assets/images/picture.png", 
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, ",
    category: "Ocio"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location3",
    dateOfArticle: "12-31-2005",
    articleDescription: "H for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Ocio"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location4",
    dateOfArticle: "12-31-2005",
    articleDescription: " He You can choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Deporte"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location1",
    dateOfArticle: "12-31-2005",
    articleDescription: " Hel You can choose - only  12345real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Comida"
  },
  {
    imgUrl: "./assets/images/picture.png", 
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "Hell You can choose - 123labas only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Ocio"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location3",
    dateOfArticle: "12-31-2005",
    articleDescription: "You Hello can choose 12 laba- only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Ocio"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location4",
    dateOfArticle: "12-31-2005",
    articleDescription: "You can Hello! choose 1 - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Deporte"
  },
]


}
