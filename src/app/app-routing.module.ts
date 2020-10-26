import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsAppComponent } from './customer-details-app/customer-details-app.component';

const routes: Routes = [
  {path:'',component:CustomerDetailsAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
