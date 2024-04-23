import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input()
  id:string='';

  articulos= [
    {id:'1',ruta:'assets/images/HackingEtico.jpg',titulo:"Hacking Etico",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'2',ruta:'assets/images/seguridad.jpg',titulo:"Legislacion de seguridad en Europa",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'3',ruta:'assets/images/cuenta.jpg',titulo:"Como evitar que te hackeen la cuenta",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'4',ruta:'assets/images/phishing.jpg',titulo:"Que es phising",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'}
  ];
}
