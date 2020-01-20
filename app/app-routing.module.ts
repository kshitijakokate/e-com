import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'checkout', component: CheckoutComponent},
  {path:'admin', component: AdminHomeComponent},
  {path:'user' , component: UserHomeComponent },
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserHomeComponent,AdminHomeComponent]