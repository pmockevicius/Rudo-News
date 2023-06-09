import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle } from '../services/interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(noticias: NewsArticle[], filterTags: string): NewsArticle[] {
    if (!filterTags) {
      return noticias;
    }

    const filterTagsArray = filterTags.split(',');

    return noticias.filter(noticia => filterTagsArray.includes(noticia.category));
  }
}
