import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css',
})
export class UpdateBLogComponent implements OnInit {
  public blogs = {
    title: '',
    body: '',
  };

  public currentParamsId: string = '';
  public apiService = inject(ApiService);
  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (paramsResponse: any) => {
        this.currentParamsId = paramsResponse.blogId;
        console.log('Edited Blog Id',this.currentParamsId)
        this.initBlogForm(this.currentParamsId);
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }


  public initBlogForm(paramsId:any){
    this.apiService.getSingleBlog(this.currentParamsId).subscribe({
      next: (successResponse) => {
        this.blogs.title=successResponse.title;
        this.blogs.body=successResponse.body;
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }

  editBlog() {
    this.apiService.editPosts(this.currentParamsId, this.blogs).subscribe({
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
