import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenresModalPage } from './genres-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GenresModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresModalPageRoutingModule {}
