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
  lstpost: Post[];
  objPost: Post;
  objPut: Post;

  constructor(private _p:PostService) { }

  ngOnInit(): void {
    this._p.getcomments().subscribe (data => this.lstcomments=data);

    this._p.getposts().subscribe (data => this.lstpost=data);
    
    this._p.put(opost).subscribe (data => { this.objPut=data;});

    var opost = new Post();
    opost.body="Hello World";
    opost.title="LPU";
    opost.userId=5;
    this._p.post(opost).subscribe(data => {this.objPost = data;} )

  }

}
