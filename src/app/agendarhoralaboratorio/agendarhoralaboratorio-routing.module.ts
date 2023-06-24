import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarhoralaboratorioPage } from './agendarhoralaboratorio.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarhoralaboratorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarhoralaboratorioPageRoutingModule {}
