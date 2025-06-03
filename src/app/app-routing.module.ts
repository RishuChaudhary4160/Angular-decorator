import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceApiComponent } from './service-api/service-api.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';

const routes: Routes = [
  {path:"Subject",component:SubjectComponent},
  {path:"Decorator",component:ParentComponent},
  {path:'service',component:ServiceApiComponent},
  {path:'pipe',component:PurePipeComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
