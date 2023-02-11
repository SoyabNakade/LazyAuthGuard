import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    PostsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
   ReactiveFormsModule
  ]
})
export class UsersModule { }
