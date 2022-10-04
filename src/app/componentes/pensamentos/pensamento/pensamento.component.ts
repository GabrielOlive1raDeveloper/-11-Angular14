import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {

    conteudo: "Estou trabalhando com o Angular",
    autoria: 'João da Silva',
    modelo: 'modelo1'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
