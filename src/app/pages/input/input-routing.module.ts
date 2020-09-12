import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPage } from './input.page';

const routes: Routes = [
  {
    path: '',
    component: InputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPageRoutingModule {}
