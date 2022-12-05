import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DadosService } from './../../services/dados.service';
import { IExerc } from './../../models/IExerc.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peito',
  templateUrl: './peito.page.html',
  styleUrls: ['./peito.page.scss'],
})
export class PEITOPage implements OnInit {

  titulo: string = 'Exercícios';

  constructor(
    public dadosService: DadosService,
    private http:HttpClient,
    public route: Router) {}

    ngOnInit() {
      this.load();
      this.exibirExerc;
    }

    listaExerc: IExerc[] | undefined;

    async load(){
      this.listaExerc = await this.http.get<IExerc[]>(`${environment.uri}/peito`).toPromise()
    }

    exibirExerc(exerc: IExerc){
      this.dadosService.guardarDados('exerc', exerc);
      this.route.navigateByUrl('/dados-exerc');
    }

}


