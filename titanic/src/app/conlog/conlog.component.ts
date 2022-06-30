import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-conlog',
  templateUrl: './conlog.component.html',
  styleUrls: ['./conlog.component.css']
})
export class ConlogComponent implements OnInit {

  islogin : boolean = this.aS.isLoggin();
  constructor(private aS: AuthService) { }

  ngOnInit(): void {
    this.islogin = this.aS.isLoggin();
  }

  refreshLogin() {
    this.islogin = this.aS.isLoggin();
  }

  clickLogOut() {
    env.isLoggin = false;
  }
}
