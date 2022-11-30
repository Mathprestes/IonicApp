import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntebracoPage } from './antebraco.page';

const routes: Routes = [
  {
    path: '',
    component: AntebracoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntebracoPageRoutingModule {}
