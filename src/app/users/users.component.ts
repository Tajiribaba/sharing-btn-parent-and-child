import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  userName: string = "";
  usersList: string[] = [];

  name: string = '';

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    
  } 

  onUserAdded(value: string) {
    this._userService.setName(value)
    this.usersList.push(value);
  }

  displayName() {
    return this._userService.getName();
  }

}
