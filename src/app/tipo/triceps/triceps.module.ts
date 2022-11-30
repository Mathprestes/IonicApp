import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepsPageRoutingModule } from './triceps-routing.module';

import { TricepsPage } from './triceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepsPageRoutingModule
  ],
  declarations: [TricepsPage]
})
export class TricepsPageModule {}
