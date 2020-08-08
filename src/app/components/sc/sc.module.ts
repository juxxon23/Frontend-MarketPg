import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScRoutingModule } from './sc-routing.module';
import { ScComponent } from './sc.component';


@NgModule({
  declarations: [ScComponent],
  imports: [
    CommonModule,
    ScRoutingModule
  ]
})
export class ScModule { }
