import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherPage } from './refresher.page';

const routes: Routes = [
  {
    path: '',
    component: RefresherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherPageRoutingModule {}
