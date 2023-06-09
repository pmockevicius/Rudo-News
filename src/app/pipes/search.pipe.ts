import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle } from '../services/interface';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(noticias: NewsArticle[], searchTerm: string): NewsArticle[] {
    console.log("im in search pipe doing stuff ")
    if (!searchTerm) {
      return noticias;
    }
    searchTerm = searchTerm.toLowerCase();``
    return noticias.filter(noticia =>
      noticia.articleDescription.toLowerCase().includes(searchTerm)
    )
  }

}
