import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './features/blogs/blogs.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AddBlogComponent } from './features/add-blog/add-blog.component';
import { UpdateBLogComponent } from './features/update-blog/update-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
  {
    path: 'addBlog',
    component: AddBlogComponent,
  },
  {
    path: 'editBlog/:blogId',
    component: UpdateBLogComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
