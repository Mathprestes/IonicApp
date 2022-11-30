import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbdominalPage } from './abdominal.page';

const routes: Routes = [
  {
    path: '',
    component: AbdominalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbdominalPageRoutingModule {}
