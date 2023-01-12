import { Component } from '@angular/core';

@Component({
  selector: 'app-reto2',
  templateUrl: './reto2.component.html',
  styleUrls: ['./reto2.component.css']
})
export class Reto2Component {
  monedas = ['EUR','PEN', 'USD', 'BOV'];
  monto = "";
  response = "";
  tipo = "";
  lista = new Array;
  add(){
    this.lista.push({'Monto':this.monto, 'Moneda':this.tipo})
  }
}
