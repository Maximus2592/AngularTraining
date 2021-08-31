import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?:User[];
  err?:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.users=data,
      err => {console.log(err);this.err="Sorry! Data loading failed!";}
    );
  }

}
