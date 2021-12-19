import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: PostsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}