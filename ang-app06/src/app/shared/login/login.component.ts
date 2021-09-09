import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pwd:string;
  err?:string;

  constructor(private userService:UsersService,private router:Router) {
    this.email='';
    this.pwd='';
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.email,this.pwd).subscribe(
      user => {
        if(user.role==='ADMIN')
          this.router.navigateByUrl("/admin");
        else
          this.router.navigateByUrl("/txns");
      },
      err => {this.err=err;console.log(this.err);}
    );
  }
}
