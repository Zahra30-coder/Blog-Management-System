// import { Component, inject } from '@angular/core';
// import { ApiService } from '../../services/api.service';

// @Component({
//   selector: 'app-blogs',
//   templateUrl: './blogs.component.html',
//   styleUrl: './blogs.component.css',
// })
// export class BlogsComponent {
//   public allBlogs: any;
//   public apiService = inject(ApiService);

//   ngOnInit() {
//     this.getAllBlogs();
//   }

//   public getAllBlogs() {
//     this.apiService.getPosts().subscribe({
//       next: (successResponse) => {
//         console.log('Received blogs:', successResponse);
//         this.allBlogs = successResponse.posts;
//         console.log('blogs', this.allBlogs)
//       },
//       error: (errorResponse) => {
//         console.log('Error fetching blogs:', errorResponse);
//         console.log(errorResponse);
//       },
//     });
//   }

//   deleteBlog(blogId: string) {
//     this.apiService.deleteBlog(blogId).subscribe({
//       next: (successResponse) => {
//         console.log(successResponse);
//         // this.getAllBlogs();
//         this.allBlogs=this.allBlogs.filter((element:any)=>element._id!==blogId);
//       },
//       error: (errorResponse) => {
//         console.log(errorResponse);
//       },
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  public allBlogs: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllBlogs();
  }

  public getAllBlogs() {
    this.apiService.getPosts().subscribe({
      next: (successResponse) => {
        console.log('Received blogs:', successResponse);
        this.allBlogs = successResponse;
        console.log('blogs', this.allBlogs)
      },
      error: (errorResponse) => {
        console.log('Error fetching blogs:', errorResponse);
        console.log(errorResponse);
      },
    });
  }

  // deleteBlog(id: string) {
  //   this.apiService.deleteBlog(id).subscribe({
  //     next: (successResponse) => {
  //       console.log(successResponse);

  //       console.log('id',id)
  //       // console.log(element._id)
  //       this.allBlogs = this.allBlogs.filter((element: any) => element.id !== id);
  //     },
  //     error: (errorResponse) => {
  //       console.log(errorResponse);
  //     },
  //   });
  // }

  
  deleteBlog(blogId: any) {
    console.log('Deleted Id',blogId);
    this.apiService.deleteBlog(blogId).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}

