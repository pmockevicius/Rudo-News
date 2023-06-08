import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs-navigation',
  templateUrl: './breadcrumbs-navigation.component.html',
  styleUrls: ['./breadcrumbs-navigation.component.css']
})
export class BreadcrumbsNavigationComponent {

  @Input() currentPage: any;

}
