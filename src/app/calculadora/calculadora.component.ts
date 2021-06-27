import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultadoSoma = 0;
  resultadoResta = 0;
  resultadoMul = 0;
  resultadoDiv = 0;

  Somar(n1: any, n2: any) {
    this.resultadoSoma = parseInt(n1) + parseInt(n2);
  }

  Restar(n3: any, n4: any) {
    this.resultadoResta = parseInt(n3) - parseInt(n4);
  }

  Multiplicar(n5: any, n6: any) {
    this.resultadoMul = parseInt(n5) * parseInt(n6);
  }

  Dividir(n7: any, n8: any) {
    this.resultadoDiv = parseInt(n7) / parseInt(n8);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
