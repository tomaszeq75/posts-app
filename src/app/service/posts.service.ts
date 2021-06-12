import {Injectable} from '@angular/core';
import {Post} from "../model/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable({
  providedIn: 'root'
})

export class PostsService {


  private posts: Post[] = [];

  constructor(private http: HttpClient) {

  }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BASE_URL)
  }

  public readPost(id: string): Observable<Post> {
    return this.http.get<Post>(BASE_URL + id);
  }

}
