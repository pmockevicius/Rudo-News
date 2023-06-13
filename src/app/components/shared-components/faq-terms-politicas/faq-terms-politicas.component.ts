import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TermsYCondiciones } from 'src/app/services/interface';

@Component({
  selector: 'app-faq-terms-politicas',
  templateUrl: './faq-terms-politicas.component.html',
  styleUrls: ['./faq-terms-politicas.component.css']
})
export class FAQTermsPoliticasComponent {

  constructor( private router: Router){}

  @Input() Conditions: any



  navigateBack(){
    this.router.navigate(['/perfil'])
  }

}
