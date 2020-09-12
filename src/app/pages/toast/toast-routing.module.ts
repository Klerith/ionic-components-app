import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastPage } from './toast.page';

const routes: Routes = [
  {
    path: '',
    component: ToastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastPageRoutingModule {}
