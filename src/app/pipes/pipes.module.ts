import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    FiltroPipe
  ],
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
