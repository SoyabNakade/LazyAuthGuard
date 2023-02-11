import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';
import { UsersGuard } from './shared/users.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", loadChildren:()=>import('./login/login.module').then(
    m=>m.LoginModule
  )},
  {path:"admin", canActivate:[AdminGuard], loadChildren:()=>import('./admin/admin.module').then(
    m=>m.AdminModule
  )},
  {path:"users", canActivate:[UsersGuard], loadChildren:()=>import('./users/users.module').then(
    m=>m.UsersModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
