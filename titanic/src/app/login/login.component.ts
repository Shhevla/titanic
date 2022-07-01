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
  usercheck : number = 0;
  constructor(private pS : PassengersService, private route : Router) { }
  userConnect: UserRegistration = new UserRegistration("", "");
  
   ngOnInit()  {
    
  }

  async onSubmit(form: NgForm){
    let userMaybe : User | null = null;

    await this.pS.getUserSpecificMdp(this.userConnect.name, this.userConnect.password).then(data => {userMaybe = data})
    if (userMaybe != null) {
      await this.pS.modifyLogin(userMaybe);
      
      await this.route.navigate(['/analyse']);
      window.location.reload();
      
      this.usercheck = 0;
    } else {
      this.usercheck = 1;
    }
  }

}
