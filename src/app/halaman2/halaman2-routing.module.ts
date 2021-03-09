import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Halaman2Page } from './halaman2.page';

const routes: Routes = [
  {
    path: '',
    component: Halaman2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Halaman2PageRoutingModule {}
