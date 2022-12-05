import { IExerc } from './../models/IExerc.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-dados-exerc',
  templateUrl: './dados-exerc.page.html',
  styleUrls: ['./dados-exerc.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DadosExercPage implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent | undefined;

  exerc: IExerc | undefined;
  isModalOpen = false;

  constructor(public dadosService: DadosService) { }

  ngAfterContentChecked() {
    if (this.swiper) {
        this.swiper.updateSwiper({});
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
    this.exerc = this.dadosService.pegarDados('exerc');
    console.log('exerc Enviado', this.exerc);
  }

}
