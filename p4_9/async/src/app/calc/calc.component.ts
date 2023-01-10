import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  number1:string = "";
  number2:string = "";
  operation = "";
  operations = ["sumar","restar", "multi", "div"];
  response: any = "";

  calculo(e:any="sumar"){
    console.log(this.operation);
    console.log(e.value);
    if (this.operation=="sumar" ) {
      this.response = parseFloat(this.number1) +  parseFloat(this.number2);
    }else if (this.operation=="restar" ) {
      this.response = parseFloat(this.number1) -  parseFloat(this.number2);
    }else if (this.operation=="multi" ) {
      this.response = parseFloat(this.number1) *  parseFloat(this.number2);
    }else if (this.operation=="div" ) {
      this.response = parseFloat(this.number1) /  parseFloat(this.number2);
    }else{
      this.response = "Seleccione una operacion"
    }
  }
  calcular(){
    console.log(this.number1);
    
    if (this.operation=="sumar" ) {
      this.response = parseFloat(this.number1) +  parseFloat(this.number2);
    }else if (this.operation=="restar" ) {
      this.response = parseFloat(this.number1) -  parseFloat(this.number2);
    }else if (this.operation=="multi" ) {
      this.response = parseFloat(this.number1) *  parseFloat(this.number2);
    }else if (this.operation=="div" ) {
      this.response = parseFloat(this.number1) /  parseFloat(this.number2);
    }else{
      this.response = "Seleccione una operacion"
    }
  }
}
