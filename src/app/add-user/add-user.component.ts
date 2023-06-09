import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  @Input() user: string = ''; 
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInput') userInput!: ElementRef;

  @Output() usersList: string[] = [];

  constructor(
    private _userService: UserService
    ) {}

  ngOnInit(): void {
  }

  onUserAdded(input: HTMLInputElement) {
    this._userService.setName(input.value)
    console.log(input.value);

    // console.log(this.userInput.nativeElement.value);
    // this.userAdded.emit(this.userInput.nativeElement.value);

    // this.userAdded.emit(input.value);
    // this.usersList.push(input.value);


  }

  displayName() {
    return this._userService.getName();
  }

}
