import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  control = false ;
  message = '';
  constructor(private formBuilder: FormBuilder, private addpostService: PostService, private router: Router) { }

  ngOnInit() {

    this.resetInputs();
  }
  resetInputs(){
    this.addPostForm = this.formBuilder.group({
      title: '',
      body: ''
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    };
  }

  addPost() {
    this.control = false;
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      console.log('add post is ' + data);
      this.control = true;
      this.message = 'Kayıt işlemi başarılı.';
      this.resetInputs();
      //this.router.navigateByUrl('/');
    }, error => {
      this.control = true;
      this.message = 'Kayıt işlemi başarısız. Lütfen daha sonra tekrar deneyiniz.';
      console.log('Failure Response');
    })
  }
}
