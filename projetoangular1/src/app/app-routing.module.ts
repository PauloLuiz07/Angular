import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './cliente/add/add.component';
import {MainComponent} from './page/main/main.component';

const routes: Routes = [
  {
    path:"cadastro", component: AddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
