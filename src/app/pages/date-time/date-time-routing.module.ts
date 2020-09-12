import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTimePage } from './date-time.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimePageRoutingModule {}
