import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { COSTASPageRoutingModule } from './costas-routing.module';

import { COSTASPage } from './costas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    COSTASPageRoutingModule
  ],
  declarations: [COSTASPage]
})
export class COSTASPageModule {}
