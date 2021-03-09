import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Halaman2PageRoutingModule } from './halaman2-routing.module';

import { Halaman2Page } from './halaman2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Halaman2PageRoutingModule
  ],
  declarations: [Halaman2Page]
})
export class Halaman2PageModule {}
