import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsModalPage } from './artists-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsModalPageRoutingModule {}
