import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger, Survivor } from '../model';
import { PassengersService } from '../passengers.service';
import { Chart, ChartItem, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import * as math from 'mathjs';


Chart.register(...registerables);
Chart.register(annotationPlugin);

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
    this.myChart1();
    this.myChart2();
  }

  myChart1(): void {
    const nb1 = this.Survivor.filter(data => data.Survived == 1).length;
    const nb2 = this.Survivor.filter(data => data.Survived == 0).length
    var myChart = new Chart("myChart", {type: 'bar',
    data: {
        labels: ['Survivant', 'Mort'],
        datasets: [{
            label: '#survivor',
            data: [nb1,nb2],
            backgroundColor: [
                'rgba(127, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
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
                beginAtZero: true,
                
            }
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                borderColor: 'red',
                borderDash: [6, 6],
                borderDashOffset: 0,
                borderWidth: 3,
                scaleID: 'y',
                value: (nb1+nb2)/2
              },
              line2: {
                type: 'line',
                borderColor: 'purple',
                borderDash: [6, 6],
                borderDashOffset: 0,
                borderWidth: 3,
                scaleID: 'y',
                value: math.std(nb1, nb2)
              }
            }
          }
        }
    }});
  }
  myChart2(): void {
    const nb1 = this.Survivor.filter(data => data.Embarked == "S").length;
    const nb2 = this.Survivor.filter(data => data.Embarked == "C").length;
    const nb3 = this.Survivor.filter(data => data.Embarked == "Q").length;
    var myChart = new Chart("myChart2", {type: 'bar',
    data: {
        labels: ['S', 'C','Q'],
        datasets: [{
            label: '#Embarked',
            data: [nb1, nb2 , nb3],
            backgroundColor: [
                'rgba(127, 255, 0, 1)',
                'rgba(127, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                borderColor: 'red',
                borderDash: [6, 6],
                borderDashOffset: 0,
                borderWidth: 3,
                scaleID: 'y',
                value: (nb1+nb2+nb3)/2
              },
              line2: {
                type: 'line',
                borderColor: 'purple',
                borderDash: [6, 6],
                borderDashOffset: 0,
                borderWidth: 3,
                scaleID: 'y',
                value: math.std(nb1, nb2, nb3)
              }
            }
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

  click(): void {
    this.Router.navigate(['/analyse'])
  }
}
