import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name:string;
  email:string;
  pwd:string;
  err?:string;
  msg?:string;

  constructor(private userService:UsersService) {
    this.name='';
    this.email='';
    this.pwd='';
  }

  ngOnInit(): void {
  }

  register(){
    this.userService.add({name:this.name,email:this.email,password:this.pwd,role:'USER'}).subscribe(
      user => {
        this.msg="User Registered Successfully with id: "+user.id;
        this.name='';
        this.email='';
        this.pwd='';
        this.err=undefined;
      },
      err => {this.err=err;console.log(this.err);}
    );
  }
}
