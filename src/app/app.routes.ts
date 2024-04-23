import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './articulo/articulo.component';

export const routes: Routes = [
    {path: "inicio", title:"App Inicio", component:InicioComponent},
    {path: "detalle/:id", title: "Detalle", component:DetalleComponent},
    {path: "blog", title:"App Blog", component:BlogComponent},
    {path: "articulo/:id", title: "Articulo", component:ArticuloComponent},
    {path: '', redirectTo: "/inicio", pathMatch: "full"}
    
];
