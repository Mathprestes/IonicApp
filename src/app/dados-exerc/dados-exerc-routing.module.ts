import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosExercPage } from './dados-exerc.page';

const routes: Routes = [
  {
    path: '',
    component: DadosExercPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosExercPageRoutingModule {}
