import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { ApiService } from './services/api.service';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddBlogComponent } from './features/add-blog/add-blog.component';
import { UpdateBLogComponent } from './features/update-blog/update-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    NotFoundComponent,
    AddBlogComponent,
    UpdateBLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
