import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  users: User[];

  ngOnInit(): void {
    this.users = [
      { name: 'Admin', role: 'Sys admin'},
      { name: 'user01', role: 'Project Admin'},
      { name: 'user02', role: 'Developer'},
      { name: 'user03', role: 'Guest'}
    ];
  }
}