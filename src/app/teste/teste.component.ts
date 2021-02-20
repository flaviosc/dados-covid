import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Dados } from '../interfaces/dados.interfaces';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  dados: Dados;
  estaCarregando: boolean;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.carregarTela();
  }

  carregarTela() {
    this.estaCarregando = true;

    this.dadosService.getDados()
      .pipe(
        take(1),
        finalize(() => { this.estaCarregando = false })
      )
      .subscribe(
        response => this.onSuccess(response), 
        error => this.onError(error)
      );
  }

  onSuccess(response: Dados) {
    this.dados = response;
  }

  onError(error) {
    console.log(error);
  }
}
