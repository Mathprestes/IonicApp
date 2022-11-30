import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEITOPage } from './peito.page';

const routes: Routes = [
  {
    path: '',
    component: PEITOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEITOPageRoutingModule {}
