import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users = [
    { name: "juan", lastName: "perez", age: 30, mayor:"Es mayor" }
  ];
  agregar(nombres: string, apellidos: string, edad: any) {
    let mayorVal = (edad>=18?'Es mayor':'Es menor');
    let user = { name: nombres, lastName: apellidos, age: edad, mayor: mayorVal }
    this.users.push(user);
  }
}
