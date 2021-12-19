import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostsEditComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
