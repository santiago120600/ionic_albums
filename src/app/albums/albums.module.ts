import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumsModalPageModule } from '../modals/albums-modal/albums-modal.module';

import { IonicModule } from '@ionic/angular';

import { AlbumsPageRoutingModule } from './albums-routing.module';

import { AlbumsPage } from './albums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumsPageRoutingModule,
    ReactiveFormsModule,
    AlbumsModalPageModule
  ],
  declarations: [AlbumsPage]
})
export class AlbumsPageModule {}
