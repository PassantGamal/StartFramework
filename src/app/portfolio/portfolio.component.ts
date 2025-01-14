import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
Imgsrc:string='';
setSrc(ele:string):void{
this.Imgsrc=ele;
}
}
