import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReorderPage } from './list-reorder.page';

const routes: Routes = [
  {
    path: '',
    component: ListReorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReorderPageRoutingModule {}
