import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-six-comp',
  templateUrl: './six-comp.component.html',
  styleUrls: ['./six-comp.component.css'],
  providers: [ToastrService]
})
export class SixCompComponent implements OnInit {

  costA5 = '';
  costB5 = '';
  costC5 = '';
  distanceA5 = '';
  distanceB5 = '';
  distanceC5 = '';
  travelTimeA5 = '';
  travelTimeB5 = '';
  travelTimeC5 = '';
  fascilityA5 = '';
  fascilityB5 = '';
  fascilityC5 = '';

  distanceAarray = [5, 10, 20];
  distanceBarray = [5, 10, 20];
  distanceCarray = [5, 10, 20];
  costAarray = [15, 25, 40];
  costBarray = [20, 25, 30];
  costCarray = [40, 60, 100];
  travelTimeAarray = [30, 45, 90];
  travelTimeBarray = [30, 45, 60];
  travelTimeCarray = [20, 30, 60];
  wifiACarray = ['Yes', 'No'];

  set5option1 = '';
  set5option2 = '';
  set5option3 = '';

  vehicletype = 'bus';
  ac = 'AC';
  seats: string;
  vehicleNo: string = null;
  file: File = null;
  @ViewChild('myInput')
  myInputVariable: any;

  constructor(private vehicleService: VehicleService, private toastr: ToastrService,
     private db: AngularFireDatabase) { }

  ngOnInit() {
    this.distanceA5 = this.distanceAarray[Math.floor(Math.random() * 3)].toString();
    this.distanceB5 = this.distanceBarray[Math.floor(Math.random() * 3)].toString();
    this.distanceC5 = this.distanceCarray[Math.floor(Math.random() * 3)].toString();
    this.costA5 = this.costAarray[Math.floor(Math.random() * 3)].toString();
    this.costB5 = this.costBarray[Math.floor(Math.random() * 3)].toString();
    this.costC5 = this.costCarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeA5 = this.travelTimeAarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeB5 = this.travelTimeBarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeC5 = this.travelTimeCarray[Math.floor(Math.random() * 3)].toString();
    this.fascilityA5 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityB5 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityC5 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
  }

  isImageNull() {
    if (this.set5option1 === '' || this.set5option2 === '' || this.set5option3 === '' ||
    this.set5option1 === this.set5option2 || this.set5option1 === this.set5option3 ||
  this.set5option2 === this.set5option3 ) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(vehicleForm6: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA5').set(this.costA5);
    dbref.child('distanceA5').set(this.distanceA5);
    dbref.child('travelTimeA5').set(this.travelTimeA5);
    dbref.child('fascilityA5').set(this.fascilityA5);
    dbref.child('costB5').set(this.costB5);
    dbref.child('distanceB5').set(this.distanceB5);
    dbref.child('travelTimeB5').set(this.travelTimeB5);
    dbref.child('fascilityB5').set(this.fascilityB5);
    dbref.child('costC5').set(this.costC5);
    dbref.child('distanceC5').set(this.distanceC5);
    dbref.child('travelTimeC5').set(this.travelTimeC5);
    dbref.child('fascilityC5').set(this.fascilityC5);

    if (this.set5option1 === '1') {
      dbref.child('set5option1').set('Normal Bus');
    } else if (this.set5option1 === '2') {
      dbref.child('set5option2').set('Normal Bus');
    }
    if (this.set5option2 === '1') {
      dbref.child('set5option1').set('Normal Bus + Train');
    } else if (this.set5option2 === '2') {
      dbref.child('set5option2').set('Normal Bus + Train');
    }
    if (this.set5option3 === '1') {
      dbref.child('set5option1').set('Low Floor A/C Bus');
    } else if (this.set5option3 === '2') {
      dbref.child('set5option2').set('Low Floor A/C Bus');
    }


    // this.toastr.success('Filled Successfully', 'Survey Application');

  }

}
