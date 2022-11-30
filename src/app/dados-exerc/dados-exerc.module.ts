import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { DadosExercPageRoutingModule } from './dados-exerc-routing.module';

import { DadosExercPage } from './dados-exerc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosExercPageRoutingModule,
    SwiperModule
  ],
  declarations: [DadosExercPage]
})
export class DadosExercPageModule {}
