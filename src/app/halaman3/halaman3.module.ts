import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Halaman3PageRoutingModule } from './halaman3-routing.module';

import { Halaman3Page } from './halaman3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Halaman3PageRoutingModule
  ],
  declarations: [Halaman3Page]
})
export class Halaman3PageModule {}
