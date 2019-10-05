import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostPayload } from './post-payload';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');
  control = false ;
  message = '';
  constructor(private addpostService: PostService, private router: Router) { }

  ngOnInit() {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    };
    this.control = false;
  }
  addPost() {
    this.control = false;
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      console.log('add post is ' + data);
      this.control = true;
      this.message = 'Kayıt işlemi başarılı.';
      //this.router.navigateByUrl('/');
    }, error => {
      this.control = true;
      this.message = 'Kayıt işlemi başarısız. Lütfen daha sonra tekrar deneyiniz.';
      console.log('Failure Response');
    })
  }
}
