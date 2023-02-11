import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
 

const routes: Routes = [
  {path:"", component:LandingComponent,
  children:[
    {path:"",component:DashboardComponent,pathMatch:"full"},
    {path:"dashboard",component:DashboardComponent},
    {path:"posts",component:PostsComponent},
    {path:"**", component:PageNotFoundComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
