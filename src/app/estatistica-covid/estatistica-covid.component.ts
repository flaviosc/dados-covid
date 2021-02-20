import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { finalize, take } from 'rxjs/operators';

import { EstatisticaCovid } from './estatistica-covid.interfaces';
import { EstatisticaCovidService } from './estatistica-covid.service';

@Component({
  selector: 'app-estatistica-covid',
  templateUrl: './estatistica-covid.component.html',
  styleUrls: ['./estatistica-covid.component.scss']
})
export class EstatisticaCovidComponent implements OnInit {
  
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[];


  dados: EstatisticaCovid;
  estaCarregando: boolean;

  constructor(
    private estatisticaCovidService: EstatisticaCovidService
    ) { }

  ngOnInit(): void {
    this.carregarTela();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  carregarTela() {
    this.estaCarregando = true;

    this.estatisticaCovidService.getDados()
      .pipe(
        take(1),
        finalize(() => { this.estaCarregando = false })
      )
      .subscribe(
        response => this.onSuccess(response), 
        error => this.onError(error)
      );
  }

  onSuccess(response: EstatisticaCovid) {
    // this.barChartLabels = response.infectedByRegion.map((item) => {
    //   return item.state;
    // });

    this.barChartData = response.infectedByRegion.map((item) => {
        return { data: [item.count], label: item.state };
    });
  }

  onError(error) {
    console.log(error);
  }
}

