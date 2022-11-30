import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmbrosPageRoutingModule } from './ombros-routing.module';

import { OmbrosPage } from './ombros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmbrosPageRoutingModule
  ],
  declarations: [OmbrosPage]
})
export class OmbrosPageModule {}
