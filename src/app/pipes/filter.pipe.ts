import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle, Post } from '../services/interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(noticias: Post[], filterTags: any): Post[] {
    if (!filterTags) {
      return noticias;
    }

    const filterTagsArray = filterTags.split(',');

    return noticias.filter(noticia => filterTagsArray.includes(noticia.category));
  }
}
