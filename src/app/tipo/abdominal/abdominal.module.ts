import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbdominalPageRoutingModule } from './abdominal-routing.module';

import { AbdominalPage } from './abdominal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbdominalPageRoutingModule
  ],
  declarations: [AbdominalPage]
})
export class AbdominalPageModule {}
