import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger, Survivor } from '../model';
import { PassengersService } from '../passengers.service';
import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  data : Survivor = new Survivor("", "", "");
  Survivor : Passenger[] = [];
  chartDesign: any;
  constructor(private Router: Router, private pS : PassengersService) { 
  }

  async ngOnInit() {  
    
    let urlSplit = this.Router.url.split('/');
    await this.pS.getPassenger().then(data => {this.Survivor = data})
    this.data.sex = urlSplit[2];
    this.data.age = urlSplit[3];
    this.data.classe = urlSplit[4];
    this.Survivor = this.filterSearch();
    var myChart = new Chart("myChart", {type: 'bar',
    data: {
        labels: ['Survivant', 'Mort'],
        datasets: [{
            label: '#survivor',
            data: [this.Survivor.filter(data => data.Survived == 1).length,this.Survivor.filter(data => data.Survived == 0).length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }});
  }

  filterSearch(): Passenger[] {
    let saveArray : Passenger[] = this.Survivor;
    if (this.data.sex == "male" || this.data.sex == "female")
        saveArray = saveArray.filter(data => data.Sex == this.data.sex);
    if (this.data.age != "")
        saveArray = saveArray.filter(data => data.Age == +this.data.age);
    if (this.data.classe != "")
      saveArray = saveArray.filter(data => data.Pclass == +this.data.classe);
      console.log(saveArray);
    return(saveArray);
  }

}
