import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-conlog',
  templateUrl: './conlog.component.html',
  styleUrls: ['./conlog.component.css']
})
export class ConlogComponent implements OnInit {

  islogin = this.aS.isLoggin();
  constructor(private aS: AuthService) { }

  ngOnInit(): void {
  }

  refreshLogin() {
    this.islogin = env.isLoggin;
  }

  clickLogOut() {
    env.isLoggin = false;
  }
}
