import { Component, OnInit } from '@angular/core';

interface Cursos {
  nro:number;
  titulo : string;
  subtitulo : string;
  descripcion : string;
  estado : boolean;
  imagen : string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ArregloCursos:Cursos[]=[];

  constructor() { }

  ngOnInit(): void {
    // seteo los cursos
    this.ArregloCursos = [
      {nro:1,
        titulo:"Como crear una cuenta en GitHub",
        subtitulo:"Control de versiones",
        descripcion:"En este video verá como crear una cuenta de GitHub desde cero",
        estado:true,
        imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github3_ldzgs9.png"},

        {nro:1,
          titulo:"Como crear un repositorio",
          subtitulo:"Control de versiones",
          descripcion:"En este video verá como crear una cuenta de GitHub desde cero",
          estado:true,
          imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github2_braqwi.png"},

          {nro:1,
            titulo:"Como actualizar un repositorio",
            subtitulo:"Control de versiones",
            descripcion:"En este video verá como crear una cuenta de GitHub desde cero",
            estado:true,
            imagen:"https://res.cloudinary.com/dream-music/image/upload/v1661263073/angular/github1_txnkpt.png"}

    ]
  }

}
