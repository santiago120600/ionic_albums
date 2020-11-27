import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConcertsModalPageModule } from '../modals/concerts-modal/concerts-modal.module';


import { IonicModule } from '@ionic/angular';

import { ConcertsPageRoutingModule } from './concerts-routing.module';

import { ConcertsPage } from './concerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcertsPageRoutingModule,
    ReactiveFormsModule,
    ConcertsModalPageModule
  ],
  declarations: [ConcertsPage]
})
export class ConcertsPageModule {}
