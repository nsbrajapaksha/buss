import { SixCompComponent } from './six-comp/six-comp.component';
import { FiveCompComponent } from './five-comp/five-comp.component';
import { ThreeCompComponent } from './three-comp/three-comp.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { AboutComponent } from './about/about.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FourCompComponent } from './four-comp/four-comp.component';

const routes: Routes = [
  {
      path: '',
      component: CompTwoComponent
  },
  {
    path: 'vehicles',
    component: VehicleListComponent
  },
  {
    path: 'register',
    component: VehicleComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'comp1',
    component: CompOneComponent
  },
  {
    path: 'comp2',
    component: CompTwoComponent
  },
  {
    path: 'comp3',
    component: ThreeCompComponent
  },
  {
    path: 'comp4',
    component: FourCompComponent
  },
  {
    path: 'comp5',
    component: FiveCompComponent
  },
  {
    path: 'comp6',
    component: SixCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
