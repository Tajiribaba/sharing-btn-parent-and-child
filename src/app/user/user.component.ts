import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles: [
    `
    .offline {
      color: white;
    }
    
    `
  ]
})

export class UserComponent implements OnInit {
  @Input() user: string = ''; 
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInput') userInput!: ElementRef;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  onUserAdded() {
    // console.log(this.userInput.nativeElement.value);
    this.userAdded.emit(this.userInput.nativeElement.value);
    this.user = this.userInput.nativeElement.value;
  }

}
