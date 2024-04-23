import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articulos= [
    {id:'1',ruta:'assets/images/HackingEtico.jpg',titulo:"Hacking Etico",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'2',ruta:'assets/images/seguridad.jpg',titulo:"Legislacion de seguridad en Europa",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'3',ruta:'assets/images/cuenta.jpg',titulo:"Como evitar que te hackeen la cuenta",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'},
    {id:'4',ruta:'assets/images/phishing.jpg',titulo:"Que es phising",descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vel nulla vestibulum dapibus.'}
  ];
}
