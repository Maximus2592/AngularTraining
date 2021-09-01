import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm:FormGroup;

  id:FormControl;
  name:FormControl;
  email:FormControl;
  password:FormControl;

  err?:String;

  constructor(
    private userService:UserService,
    private router:Router
  ) {

    this.id=new FormControl(0);
    this.name=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.email=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.minLength(5)]);

    this.userForm=new FormGroup({
      id:this.id,
      name:this.name,
      email:this.email,
      password:this.password
    });
   }

  ngOnInit(): void {
  }

  formSubmited(){
    this.userService.add(this.userForm.value).subscribe(
      data => this.router.navigateByUrl("/"),
      err=>{console.log(err); this.err="Saving User Details Failed"}
    );
  }
}
