import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseComponent } from './analyse/analyse.component';
import { GraphComponent } from './graph/graph.component';
const routes: Routes = [
  {
    path: 'analyse',
    component: AnalyseComponent
},
{
    path: '',
    redirectTo: '/analyse',
    pathMatch: 'full'
},
  {
    path:'graph/:sex/:age/:classe',
    component: GraphComponent
  },
  {
    path:'graph',
    component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
