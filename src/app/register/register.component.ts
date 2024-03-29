import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { User } from '../user'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  role:String= "user"
  uname : string
  email : string
  password : string
  user: User
  successMessage : string
  isRegister : boolean = false;

  OnLogin(){
    console.log(this.email) 
    console.log(this.password) 
  }

  constructor(private _userService : UsersService,private _router : Router) { }


  onCreateUser(){
    this.user = {
      username: this.uname,
      email: this.email,
      password: this.password,
      role:this.role,
    }
    this._userService.saveUser(this.user).subscribe();
    this._router.navigate(['/login']);
    // this._userService.saveUser({name: this.uname,email:this.email,password:this.password}).subscribe(responseData=>{
    //   console.log(responseData.user)
    //   if(responseData.user[0]._id){
    //     this.successMessage = responseData.message;
    //     this.isRegister = true;
        
      // }
    // })
  }

 
  ngOnInit(): void {
  }

}
