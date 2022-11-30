import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepsPage } from './triceps.page';

const routes: Routes = [
  {
    path: '',
    component: TricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepsPageRoutingModule {}
