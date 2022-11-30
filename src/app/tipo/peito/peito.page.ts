import { Router } from '@angular/router';
import { DadosService } from './../../services/dados.service';
import { IExerc } from './../../models/IExerc.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peito',
  templateUrl: './peito.page.html',
  styleUrls: ['./peito.page.scss'],
})
export class PEITOPage {

  titulo: string = 'Exercícios';

  constructor
  (
    public dadosService: DadosService,
    public route: Router) {}

    exibirExerc(exerc: IExerc){
      this.dadosService.guardarDados('exerc', exerc);
      this.route.navigateByUrl('/dados-exerc');
    }

  listaExerc: IExerc[] = [
    {
      title: 'SUPINO',
      descricao: 'Enquanto está deitado em decúbito dorsal, de preferência sobre um "banco" específico, o praticante abaixa uma barra com pesos até perto do peito [90º graus], e então a empurra para cima até que seus cotovelos estejam estendidos (ou próximos a isso).',
      img1: 'https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIds4-8QergE_TjEIQhvYmNQahuc5hzrxRA&usqp=CAU',
      img3: 'https://i.pinimg.com/originals/ae/33/67/ae33673b1e9c577ad97cf1ff6291861e.jpg',
      img4: 'https://i.pinimg.com/originals/8c/4b/c0/8c4bc0d8b44dd487d1d52a1574b36320.jpg',
      img5: 'https://www.musculacao.net/wp-content/uploads/2012/09/supino_barra.jpg',
      video: 'https://www.youtube.com/watch?v=djSe9kMX0ao'
    },
    {
      title: 'SUPINO INCLINADO',
      descricao: 'Cotovelos, ombros e peitoral devem estar alinhados. Controle o movimento dos ombros; uma vez que a escápula deve estar contraída, nada de soltar os ombros quando o peso estiver afastado do tronco.',
      img1: 'string',
      img2: 'string',
      img3: 'string',
      img4: 'string',
      img5: 'string',
      video: 'string'
    }

  ];

}


