import { VehicleService } from './shared/vehicle.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AboutComponent } from './about/about.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { ThreeCompComponent } from './three-comp/three-comp.component';
import { FourCompComponent } from './four-comp/four-comp.component';
import { FiveCompComponent } from './five-comp/five-comp.component';
import { SixCompComponent } from './six-comp/six-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleListComponent,
    AboutComponent,
    CompOneComponent,
    CompTwoComponent,
    ThreeCompComponent,
    FourCompComponent,
    FiveCompComponent,
    SixCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
