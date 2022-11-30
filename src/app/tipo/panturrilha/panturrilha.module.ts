import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanturrilhaPageRoutingModule } from './panturrilha-routing.module';

import { PanturrilhaPage } from './panturrilha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanturrilhaPageRoutingModule
  ],
  declarations: [PanturrilhaPage]
})
export class PanturrilhaPageModule {}
