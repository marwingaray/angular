import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reto1Component } from './reto1/reto1.component';
import { Reto2Component } from './reto2/reto2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Reto1Component,
    Reto2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Reto2Component
  ]

})
export class RetosModule { }
