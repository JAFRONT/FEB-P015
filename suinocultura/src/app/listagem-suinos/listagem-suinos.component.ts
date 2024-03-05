import { Component, OnInit } from '@angular/core';
import { Suino } from '../suino.model';


@Component({
  selector: 'app-listagem-suinos',
  templateUrl: './listagem-suinos.component.html',
  styleUrls: ['./listagem-suinos.component.css']
})
export class ListagemSuinosComponent implements OnInit {
  suinos: Suino[] = [];

  constructor() { }

  ngOnInit(): void {

    this.suinos = [
      { brincoPai: '123', brincoMae: '456', dataNascimento: new Date('2023-01-15'), dataSaida: new Date('2024-02-28'), sexo: 'M', status: 'ativo' },
      { brincoPai: '789', brincoMae: '012', dataNascimento: new Date('2023-05-20'), dataSaida: new Date('2024-03-01'), sexo: 'F', status: 'vendido' },

    ];
  }


  filtrarSuinos() {

  }

  editarSuino(suino: Suino) {

  }

   deletarSuino(suino: Suino) {

  }
}
