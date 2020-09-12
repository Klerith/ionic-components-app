import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastPageRoutingModule } from './toast-routing.module';

import { ToastPage } from './toast.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToastPage]
})
export class ToastPageModule {}
