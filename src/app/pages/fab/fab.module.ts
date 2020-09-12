import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabPageRoutingModule } from './fab-routing.module';

import { FabPage } from './fab.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FabPage]
})
export class FabPageModule {}
