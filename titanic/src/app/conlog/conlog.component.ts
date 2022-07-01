import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conlog',
  templateUrl: './conlog.component.html',
  styleUrls: ['./conlog.component.css']
})
export class ConlogComponent implements OnInit {

  islogin : boolean = false;
  constructor(private aS: AuthService, private route: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      const user = JSON.parse(localStorage.getItem('currentUser')!);
      this.islogin = user.isAuth;
    } else {
      this.islogin = false;
    }
  }

  refreshLogin() {
    this.islogin = this.aS.isLoggin();
  }

  clickLogOut() {
    localStorage.removeItem('currentUser');
    this.ngOnInit();
    this.route.navigate(['/intro']);
  }
}
