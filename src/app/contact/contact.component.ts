
import { Component } from '@angular/core';
import{FormsModule}from'@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nameValue: string = '';
  ageValue: string = '';
  emailValue:string='';
  passwordValue:string=''
}
