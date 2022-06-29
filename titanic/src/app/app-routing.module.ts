import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseComponent } from './analyse/analyse.component';
import { GraphComponent } from './graph/graph.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'analyse',
    component: AnalyseComponent
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
