import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esto es Interpolacion!!';

  //Tipo de Datos en TS
  //Numerico
  precio:number=6.20;
  nuevo_precio:number=this.precio+23;
  //String
  color:string="blue";
  nombre:string="Angular";
  session:string='Sesion01' +this.nombre;
  //Boolean
  estado:boolean=false;
  //variables cuyo tipo desconocemos
  result:any = "la compilacion fue correcta"
  //Array
  list:number[]=[1,2,3]
  //Objetos
  valor1:any={curso:'Angular',version:'Type 14'}
  //Trabajar con Array de Imagenes
  img ="https://cdn2.thecatapi.com/images/8c.gif"
  img_array ="https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page="
  



}
