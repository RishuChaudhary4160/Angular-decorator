import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from 'src/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubjectComponent } from './subject/subject.component';
import { ParentComponent } from './parent/parent.component';
import { SubjectOneComponent } from './subject-one/subject-one.component';
import { SubjectTwoComponent } from './subject-two/subject-two.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubjectComponent,
    ParentComponent,
    SubjectOneComponent,
    SubjectTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
