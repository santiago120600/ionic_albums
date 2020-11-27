import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GenresModalPageModule } from '../modals/genres-modal/genres-modal.module';


import { IonicModule } from '@ionic/angular';

import { GenresPageRoutingModule } from './genres-routing.module';

import { GenresPage } from './genres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenresPageRoutingModule,
    ReactiveFormsModule,
    GenresModalPageModule
  ],
  declarations: [GenresPage]
})
export class GenresPageModule {}
