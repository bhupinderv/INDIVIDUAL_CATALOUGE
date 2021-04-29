import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIndvComponent } from './add-indv/add-indv.component';
import { IndividualDetailsComponent } from './individual-details/individual-details.component';
import { UpdIndvComponent } from './upd-indv/upd-indv.component';

const routes: Routes = [
  {path:'', component: IndividualDetailsComponent},
  {path:'addIndv', component: AddIndvComponent},
  {path:'updIndv/:id', component: UpdIndvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
