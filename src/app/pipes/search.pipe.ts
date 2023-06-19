import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle, Post } from '../services/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(noticias: Post[], searchTerm: string): Post[] {
    if (!searchTerm) {
      return noticias;
    }
    searchTerm = searchTerm.toLowerCase();
    return noticias.filter(noticia =>
      noticia.title.toLowerCase().includes(searchTerm)
    );
  }
}
