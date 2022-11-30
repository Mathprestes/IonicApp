import { ITipo } from './../models/ITipo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo: string = 'Tipos';

  constructor () {}

  listaTipo: ITipo[] = [
    {
      title: 'COSTAS',
      img: 'vfddfdf',
      pagina: '/costas'
    },
    {
      title: 'PEITO',
      img: 'vfddfdf',
      pagina: '/peito'
    },
    {
      title: 'ABDOMINAIS',
      img: 'vfddfdf',
      pagina: '/abdominal'
    },
    {
      title: 'ANTEBRAÇO',
      img: 'vfddfdf',
      pagina: '/antebraco'
    },
    {
      title: 'BÍCEPS',
      img: 'vfddfdf',
      pagina: '/biceps'
    },
    {
      title: 'OMBROS',
      img: 'vfddfdf',
      pagina: '/ombros'
    },
    {
      title: 'PANTURRILHA',
      img: 'vfddfdf',
      pagina: '/panturrilha'
    },
    {
      title: 'PERNAS',
      img: 'vfddfdf',
      pagina: '/pernas'
    },
    {
      title: 'TRÍCEPS',
      img: 'vfddfdf',
      pagina: '/triceps'
    }

  ];

}
