import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { User, UserRegistration } from '../model';
import { PassengersService } from '../passengers.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pS : PassengersService, private route : Router) { }
  userConnect: UserRegistration = new UserRegistration("", "");
  
   ngOnInit()  {
    
  }

  async onSubmit(form: NgForm){
    let userMaybe : User | null = null;

    await this.pS.getUserSpecificMdp(this.userConnect.name, this.userConnect.password).then(data => {userMaybe = data})
    console.log(userMaybe);
    if (userMaybe != null) {
      this.pS.modifyLogin(userMaybe);
      this.route.navigate(['/analyse']);
    }
  }

}
