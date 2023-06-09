import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });    
  }

  onCreatePost() {
    const postData = this.postForm.value;
    this.http.post('https://fakestoreapi.com/products', postData).subscribe((response) => {
      console.log(response);
    });
  }

}
