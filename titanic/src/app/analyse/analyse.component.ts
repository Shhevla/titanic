import { Component, OnInit } from '@angular/core';
import { Passenger } from '../model';
import { PassengersService } from '../passengers.service';
import { Survivor } from '../model';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  Survivor : Passenger[] = [];
  modelSearch: Survivor = new Survivor("", "","");
  constructor(private pS : PassengersService, private Router: Router) { }

   async ngOnInit() {
    await this.pS.getPassenger().then(data => {this.Survivor = data})
  }

  onSubmit(form: NgForm): void {
    this.Router.navigate(['/graph', this.modelSearch.sex, this.modelSearch.age, this.modelSearch.classe])
  }

  

}
