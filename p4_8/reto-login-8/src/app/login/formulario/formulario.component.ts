import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BienvenidaComponent } from "../bienvenida/bienvenida.component";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
//validacion de usuario
  user:string | null | undefined = "Angular";
  password:string | null | undefined = "123456"
  //array para la iteracion de links
  items:any = ["Home","Support","Contac"]
  resultado:any; 
  mensaje = "";
  // validar(user:string,password:string){
  //   if(user == this.user && password == this.password){
  //     this.resultado = true;
  //     this.mensaje = "Usuario Correcto";
  //   }else{
  //     this.resultado = false;
  //     this.mensaje = "Usuario Incorrecto";
  //   }
  // }
  checkoutForm = this.formBuilder.group({
    user: '',
    password: ''
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    let usuario:string | null | undefined = this.checkoutForm.value.user
    let password:string | null | undefined = this.checkoutForm.value.password
    if(usuario == this.user && password == this.password){
      this.resultado = true;
      this.mensaje = "Usuario Correcto";
    }else{
      this.resultado = false;
      this.mensaje = "Credenciales incorrectos, Intentalo de nuevo";
    }
  }

}
