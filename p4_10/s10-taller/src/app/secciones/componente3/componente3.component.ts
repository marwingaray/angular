import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  //crear el array de datos -> Almacena información
  datos = new Array;
  disable:boolean = true;
  //los datos para el array
  tarea = "";
  txttarea = "";

  //Metodo para añadir valores al Array
  AgregarTarea() {
    this.datos.push({ 'Tarea': this.tarea, 'TxtTarea': this.txttarea });
    this.tarea = "";
    this.txttarea = "";
    this.disable = true
  }
  change() {
    if (this.tarea != "" && this.txttarea != "") {
      this.disable = false
    } else {
      this.disable = true
    }
  }
    constructor() { }

    ngOnInit(): void {
      this.disable = true;
    }

    // ngOnChanges (changes: SimpleChanges){
    //   console.log("asdasdads")
    //   if (this.tarea == "" || this.txttarea == "") {
    //     this.disable = true
    //   }else{
    //     this.disable = false
    //   }
    // }

  }
