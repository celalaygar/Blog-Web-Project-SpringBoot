import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from '../pages/add-post/post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:8182/api/post/';

  constructor(private httpClient: HttpClient) { }

  addPost(postPayload: PostPayload){
    return this.httpClient.post(this.url + 'add-post/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>(this.url + 'post/all');
  }

  getPost(permaLink: number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.url + 'post/get/' + permaLink);
  }
}
