import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmbrosPage } from './ombros.page';

const routes: Routes = [
  {
    path: '',
    component: OmbrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmbrosPageRoutingModule {}
