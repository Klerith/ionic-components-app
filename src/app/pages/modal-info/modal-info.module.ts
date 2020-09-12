import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPageRoutingModule } from './modal-info-routing.module';

import { ModalInfoPage } from './modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
