import { TechnologyComponent } from './pages/technology/technology.component';
import { CrewComponent } from './pages/crew/crew.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistenationComponent } from './pages/distenation/distenation.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'distenation',
    component:DistenationComponent
  },
  {
    path:'crew',
    component:CrewComponent
  },
  {
    path:'technology',
    component:TechnologyComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
