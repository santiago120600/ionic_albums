import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumsModalPageRoutingModule } from './albums-modal-routing.module';

import { AlbumsModalPage } from './albums-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumsModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlbumsModalPage]
})
export class AlbumsModalPageModule {}
