import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PernasPageRoutingModule } from './pernas-routing.module';

import { PernasPage } from './pernas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PernasPageRoutingModule
  ],
  declarations: [PernasPage]
})
export class PernasPageModule {}
