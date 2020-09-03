import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
