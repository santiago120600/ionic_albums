import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtistsModalPageModule } from '../modals/artists-modal/artists-modal.module';


import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsPageRoutingModule,
    ReactiveFormsModule,
    ArtistsModalPageModule
  ],
  declarations: [ArtistsPage]
})
export class ArtistsPageModule {}
