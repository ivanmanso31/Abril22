import { Component,Input} from '@angular/core';


@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent{
  
  @Input()
  id:string='';

  inmuebles= [
    {id:'1',ruta:'assets/images/inmueble1.jpg',descripcion:'Bienvenido a esta encantadora casa familiar ubicada en una pintoresca calle arbolada en el corazón de la ciudad. Con una fachada clásica y un encanto atemporal, esta propiedad ofrece el equilibrio perfecto entre comodidad moderna y elegancia tradicional. Al ingresar, serás recibido por una espaciosa sala de estar con abundante luz natural que fluye a través de las amplias ventanas. El diseño de planta abierta te invita a disfrutar de momentos de reunión con familiares y amigos, mientras que la cocina gourmet totalmente equipada es un sueño para los amantes de la cocina, con electrodomésticos de primera línea y una isla central para mayor practicidad. La casa cuenta con tres dormitorios luminosos y acogedores, incluido un dormitorio principal con baño privado y armario vestidor. Además, un espacio adicional puede adaptarse fácilmente como estudio, sala de juegos o área de trabajo en el hogar, brindando flexibilidad para satisfacer todas tus necesidades. Disfruta del aire fresco y del sol en el patio trasero privado, ideal para barbacoas de verano o tardes relajadas al aire libre. Además, un garaje adjunto ofrece conveniencia adicional para el estacionamiento y almacenamiento. Con una ubicación privilegiada cerca de parques, escuelas, tiendas y restaurantes, esta casa ofrece el estilo de vida urbano que has estado buscando. ¡No te pierdas la oportunidad de hacer de esta casa tu nuevo hogar!'},
    {id:'2',ruta:'assets/images/inmueble2.jpg',descripcion:'Descubre el epitome del lujo contemporáneo con esta espectacular casa ubicada en una colina con vistas panorámicas que quitan el aliento. Esta propiedad de diseño vanguardista combina la elegancia con la funcionalidad, ofreciendo un estilo de vida sofisticado en un entorno sereno y privado. Al cruzar el umbral, serás recibido por un impresionante espacio de estar de concepto abierto, con techos altos y ventanas de piso a techo que llenan la casa con luz natural y maximizan las vistas espectaculares del entorno natural circundante. La cocina de diseño gourmet está equipada con electrodomésticos de última generación y una isla central, ideal para entretener a tus invitados con estilo. La casa cuenta con cuatro dormitorios elegantemente decorados, cada uno con su propio baño privado y amplios armarios empotrados. El dormitorio principal es un verdadero oasis de relajación, con una lujosa bañera de hidromasaje y acceso directo a una terraza privada con vistas panorámicas. Disfruta del estilo de vida al aire libre en el amplio patio trasero, que cuenta con una piscina infinita climatizada, una zona de estar al aire libre y exuberantes jardines paisajísticos, todo diseñado para disfrutar al máximo del clima templado durante todo el año. Ubicada en una exclusiva comunidad cerrada, esta casa ofrece privacidad y seguridad, mientras que su conveniente ubicación proporciona fácil acceso a tiendas de lujo, restaurantes de clase mundial y actividades al aire libre. No dejes pasar esta oportunidad única de vivir en el pináculo del lujo y la comodidad. ¡Esta casa está lista para convertirse en tu propio paraíso privado!'}
  ];
}
