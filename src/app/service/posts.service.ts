import { Injectable } from '@angular/core';
import {Post} from "../model/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      userId: 123,
      id: 1,
      title: 'tytuł',
      body: 'body',
    },
    {
      userId: 12,
      id: 2,
      title: 'tytuł 2',
      body: 'body 2',
    },
    {
      userId: 23,
      id: 3,
      title: 'tytuł 3',
      body: 'body 3',
    }
  ];

  constructor(private http: HttpClient) {

  }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
