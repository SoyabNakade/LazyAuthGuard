import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
 

const routes: Routes = [
  {path:"", component:LandingComponent,
  children:[
      {path:"",component:DashboardComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"user",component:UserComponent},
      {path:"**",component:PageNotFoundComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
