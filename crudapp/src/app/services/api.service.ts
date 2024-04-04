// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   // public readonly API_URL = 'http://localhost:8000/api';
//   public readonly API_URL = ' http://localhost:3000/posts';
 
//   public PostsUrl = '/getPosts';
//   public addPostsUrl = '/addPost';
//   public getSinglePostsUrl = '/getPost';
//   public editPostsUrl = '/updatePost';
//   public deletePostURl = '/deletePost';

//   public http = inject(HttpClient);

//   //method for getting the posts
//   public getPosts(): Observable<any> {
//     return this.http.get(this.API_URL + this.PostsUrl);
//   }

//   //method for adding the blog
//   public addPosts(blog: any): Observable<any> {
//     return this.http.post(this.API_URL + this.addPostsUrl, blog);
//   }

//   //method for getting single blog
//   public getSingleBlog(blogId: string): Observable<any> {
//     // localhost:8000/api/deleteBlog/123456789
//     return this.http.get(this.API_URL + this.getSinglePostsUrl + '/' + blogId);
//   }

//   //method for editing the blog
//   public editPosts(blogId: string, blog: any): Observable<any> {
//     // localhost:8000/api/editBlog/123456789
//     return this.http.put(this.API_URL + this.editPostsUrl + '/' + blogId, blog);
//   }

//   //method for deleting the blog
//   public deleteBlog(blogId: string): Observable<any> {
//     // localhost:8000/api/deleteBlog/123456789
//     return this.http.delete(this.API_URL + this.deletePostURl + '/' + blogId);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly API_URL = 'http://localhost:3000'; // Assuming JSON Server is running on port 3000

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get(`${this.API_URL}/posts`);
  }

  public addPosts(blog: any): Observable<any> {
    return this.http.post(`${this.API_URL}/posts`, blog);
  }

  public getSingleBlog(blogId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/posts/${blogId}`);
  }

  public editPosts(blogId: string, blog: any): Observable<any> {
    return this.http.put(`${this.API_URL}/posts/${blogId}`, blog);
  }

  public deleteBlog(blogId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/posts/${blogId}`);
  }
}
