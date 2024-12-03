import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';



@NgModule({
  declarations: [
    ImgComponent,
    TimeAgoPipe,
  ],
  exports: [
    ImgComponent,
    TimeAgoPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
