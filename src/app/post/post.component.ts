import { Component, OnInit } from '@angular/core';

//imports by bk for Observable
import { PostService } from "../post.service";
import { Post } from "../post";
import { Comment } from "../comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  lstcomments: Comment[];

  constructor(private _p:PostService) { }

  ngOnInit(): void {
    this._p.getcomment().subscribe (data => this.lstcomments=data);
  }

}
