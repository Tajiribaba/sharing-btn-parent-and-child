import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gets',
  templateUrl: './gets.component.html',
  styleUrls: ['./gets.component.css']
})
export class GetsComponent {
    public listOfItems = {
      id: '',
      title: '',
      price: '',
      category: '',
      description: '',
      image: '',
      rating: ''
    }

  constructor(private http: HttpClient) {this.displayData();}

  displayData() {
    this.http.get('https://fakestoreapi.com/products').subscribe((response) => {
      console.log(response);
      // this.listOfItems = response;
    });
    return this.listOfItems;
  }

}
