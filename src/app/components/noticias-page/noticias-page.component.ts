import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent {

  searchTerm: string | any

noticias = [
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location1",
    dateOfArticle: "12-31-2005",
    articleDescription: "You can choose - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Comida"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location2",
    dateOfArticle: "12-31-2005",
    articleDescription: "You can choose - labas only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Ocio"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location3",
    dateOfArticle: "12-31-2005",
    articleDescription: "You can choose laba- only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Gaming"
  },
  {
    imgUrl: "./assets/images/picture.png",
    locationName: "New location4",
    dateOfArticle: "12-31-2005",
    articleDescription: "You can choose la - only real convention for name format is to start constructor and classes with a capital (and even then it's your own choice).",
    category: "Deporte"
  },
]


handleInputValue(value: any) {
  this.searchTerm = value
  console.log("value",value)
}

}
