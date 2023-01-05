import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { BotonesComponent } from './botones/botones.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CredencialesmalasComponent } from './credencialesmalas/credencialesmalas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
    BotonesComponent,
    BienvenidaComponent,
    CredencialesmalasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BotonesComponent,
    FormularioComponent,
    BienvenidaComponent,
    CredencialesmalasComponent,
  ]
})
export class LoginModule { }
