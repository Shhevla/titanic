import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { ConlogComponent } from './conlog/conlog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnalyseComponent,
    GraphComponent,
    IntroComponent,
    ConlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
