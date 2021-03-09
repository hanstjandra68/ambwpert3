import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Halaman3Page } from './halaman3.page';

const routes: Routes = [
  {
    path: '',
    component: Halaman3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Halaman3PageRoutingModule {}
