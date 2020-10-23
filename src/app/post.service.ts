import { Injectable } from '@angular/core';

//imports by bk
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getcomment():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  };

}
