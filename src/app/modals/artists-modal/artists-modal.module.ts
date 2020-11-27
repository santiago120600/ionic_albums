import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsModalPageRoutingModule } from './artists-modal-routing.module';

import { ArtistsModalPage } from './artists-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsModalPageRoutingModule
  ],
  declarations: [ArtistsModalPage]
})
export class ArtistsModalPageModule {}
