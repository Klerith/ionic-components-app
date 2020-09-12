import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesPage } from './slides.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesPageRoutingModule {}
