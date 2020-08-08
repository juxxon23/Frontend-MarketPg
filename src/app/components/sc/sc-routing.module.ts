import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScComponent } from './sc.component';

const routes: Routes = [{ path: '', component: ScComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScRoutingModule { }
