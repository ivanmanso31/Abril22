import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { Inmueble } from '../-modelo/inmueble';
import { InmuebleService } from '../_servicio/inmueble.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  inmuebles:Inmueble[]=[];

  constructor(private InmuebleServicio: InmuebleService){}

  ngOnInit(): void {
    this.inmuebles = this.InmuebleServicio.obtenerTodos();
  }


  //inmuebles= [
    //{id:'1',ruta:'assets/images/inmueble1.jpg',descripcion:'Bienvenido a esta encantadora casa familiar ubicada en una pintoresca calle arbolada en el corazón de la ciudad. Con una fachada clásica y un encanto atemporal, esta propiedad ofrece el equilibrio perfecto entre comodidad moderna y elegancia tradicional.'},
    //{id:'2',ruta:'assets/images/inmueble2.jpg',descripcion:'Descubre el epitome del lujo contemporáneo con esta espectacular casa ubicada en una colina con vistas panorámicas que quitan el aliento. Esta propiedad de diseño vanguardista combina la elegancia con la funcionalidad, ofreciendo un estilo de vida sofisticado en un entorno sereno y privado.'}
  //];
}
