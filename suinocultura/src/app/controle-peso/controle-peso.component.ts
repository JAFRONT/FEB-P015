import { Component, OnInit } from '@angular/core';


import { ChartDataset, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-peso-animal',
  templateUrl: './peso-animal.component.html',
  styleUrls: ['./peso-animal.component.css']
})
export class PesoAnimalComponent implements OnInit {
  // Dados do gráfico
  public lineChartData: ChartDataset[] = [
    { data: [], label: 'Peso do Animal' }
  ];
  
  public lineChartLabels: Label[] = [];
  
  // Opções do gráfico
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        title: {
          display: true,
          text: 'Data da Pesagem'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Peso (kg)'
        }
      }
    }
  };
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    // Aqui você iria buscar os dados do peso do animal
    // e preencher lineChartData e lineChartLabels
    // Exemplo:
    this.lineChartData[0].data = [65, 59, 80, 81, 56, 55, 40];
    this.lineChartLabels = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07'];
  }
}
