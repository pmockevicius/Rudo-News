import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() displayLinks: boolean = false

isLinkActive(link: string): boolean {
  return window.location.pathname === link;
}


}
