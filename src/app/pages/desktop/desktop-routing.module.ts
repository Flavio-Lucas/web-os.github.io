import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopPage } from './desktop.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
