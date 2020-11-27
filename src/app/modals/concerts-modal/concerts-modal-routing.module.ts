import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertsModalPage } from './concerts-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConcertsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertsModalPageRoutingModule {}
