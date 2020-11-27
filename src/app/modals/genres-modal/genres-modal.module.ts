import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenresModalPageRoutingModule } from './genres-modal-routing.module';

import { GenresModalPage } from './genres-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenresModalPageRoutingModule
  ],
  declarations: [GenresModalPage]
})
export class GenresModalPageModule {}
