import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentPage } from './segment.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentPageRoutingModule {}
