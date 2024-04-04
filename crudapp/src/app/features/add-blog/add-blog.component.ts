import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent {
  public blogs = {
    title: '',
    body: '',
  };

  public apiService = inject(ApiService);
  public router = inject(Router);

  addBlog() {
    this.apiService.addPosts(this.blogs).subscribe({
      next: (successResponse) => {
        this.blogs = {
          title: '',
          body: '',
        };
        this.router.navigate(['']);
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }
}
