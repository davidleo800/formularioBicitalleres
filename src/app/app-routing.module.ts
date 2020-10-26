import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{BicitalleresComponent} from './pages/bicitalleres/bicitalleres.component';
import{BicitallerComponent} from './pages/bicitaller/bicitaller.component';
const routes: Routes =[
  {path:'bicitalleres', component:BicitalleresComponent},
  {path:'bicitaller/:id', component:BicitallerComponent},
  {path: '**', pathMatch: 'full', redirectTo:'bicitalleres'}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
