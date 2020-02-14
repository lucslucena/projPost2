import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html',
  styleUrls: ['./post-secundario.component.css'],
  providers: [PostService]
})
export class PostSecundarioComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(){
    this.posts = this.postService.retornarPostSecundario();
    this.posts.shift();
  }

}
