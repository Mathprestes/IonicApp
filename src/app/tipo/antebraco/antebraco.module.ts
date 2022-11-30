import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntebracoPageRoutingModule } from './antebraco-routing.module';

import { AntebracoPage } from './antebraco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntebracoPageRoutingModule
  ],
  declarations: [AntebracoPage]
})
export class AntebracoPageModule {}
