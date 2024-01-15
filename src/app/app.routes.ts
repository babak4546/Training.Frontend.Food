import { Routes } from '@angular/router';
import { SigninComponent } from './+pages/signin/signin.component';
import { SignupComponent } from './+pages/signup/signup.component';
import { AdminsComponent } from './+pages/admins/admins.component';
import { CustomersComponent } from './+pages/customers/customers.component';
import { RestaurantsComponent } from './+pages/restaurants/restaurants.component';
export const routes: Routes = [
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'admins',component:AdminsComponent},
    {path:'customers',component:CustomersComponent},
    {path:'restaurants',component:RestaurantsComponent},
    {path:'',redirectTo:'/signin',pathMatch:'full'},
    {path:'**',redirectTo:'/signin'}
];
