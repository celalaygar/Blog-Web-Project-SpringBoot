import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../add-post/post-payload';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = 'asdcqwecasdcqwecasdcqw  ecasdcqwecasdcqwecasdcqwecasdcqwec  asdcqwecas dcqwecasd cqweca sdcqwecasdcq';
  posts: Observable<Array<PostPayload>>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    
  }

}
