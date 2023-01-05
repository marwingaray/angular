import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  Angular:String = "Angular"
  items:any = ["Home","Support","Contac"]
}
