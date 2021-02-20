// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { finalize, take } from 'rxjs/operators';

import { EstatisticaCovid } from './estatistica-covid.interfaces';
import { EstatisticaCovidService } from './estatistica-covid.service';

@Component({
  selector: 'app-estatistica-covid',
  templateUrl: './estatistica-covid.component.html',
  styleUrls: ['./estatistica-covid.component.scss']
})
export class EstatisticaCovidComponent implements OnInit {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';


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
    this.dados = response;
  }

  onError(error) {
    console.log(error);
  }
}

