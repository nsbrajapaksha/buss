import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-five-comp',
  templateUrl: './five-comp.component.html',
  styleUrls: ['./five-comp.component.css'],
  providers: [ToastrService]
})
export class FiveCompComponent implements OnInit {

  costA4 = '';
  costB4 = '';
  costC4 = '';
  distanceA4 = '';
  distanceB4 = '';
  distanceC4 = '';
  travelTimeA4 = '';
  travelTimeB4 = '';
  travelTimeC4 = '';
  fascilityA4 = '';
  fascilityB4 = '';
  fascilityC4 = '';

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

  set4option1 = '';
  set4option2 = '';
  set4option3 = '';

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
    this.distanceA4 = this.distanceAarray[Math.floor(Math.random() * 3)].toString();
    this.distanceB4 = this.distanceBarray[Math.floor(Math.random() * 3)].toString();
    this.distanceC4 = this.distanceCarray[Math.floor(Math.random() * 3)].toString();
    this.costA4 = this.costAarray[Math.floor(Math.random() * 3)].toString();
    this.costB4 = this.costBarray[Math.floor(Math.random() * 3)].toString();
    this.costC4 = this.costCarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeA4 = this.travelTimeAarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeB4 = this.travelTimeBarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeC4 = this.travelTimeCarray[Math.floor(Math.random() * 3)].toString();
    this.fascilityA4 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityB4 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityC4 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
  }

  onSkip(vehicleForm5: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA4').set(this.costA4);
    dbref.child('distanceA4').set(this.distanceA4);
    dbref.child('travelTimeA4').set(this.travelTimeA4);
    dbref.child('fascilityA4').set(this.fascilityA4);
    dbref.child('costB4').set(this.costB4);
    dbref.child('distanceB4').set(this.distanceB4);
    dbref.child('travelTimeB4').set(this.travelTimeB4);
    dbref.child('fascilityB4').set(this.fascilityB4);
    dbref.child('costC4').set(this.costC4);
    dbref.child('distanceC4').set(this.distanceC4);
    dbref.child('travelTimeC4').set(this.travelTimeC4);
    dbref.child('fascilityC4').set(this.fascilityC4);

    if (this.set4option1 === '1') {
      dbref.child('set4option1').set('Normal Bus');
    } else if (this.set4option1 === '2') {
      dbref.child('set4option2').set('Normal Bus');
    }
    if (this.set4option2 === '1') {
      dbref.child('set4option1').set('Normal Bus + Train');
    } else if (this.set4option2 === '2') {
      dbref.child('set4option2').set('Normal Bus + Train');
    }
    if (this.set4option3 === '1') {
      dbref.child('set4option1').set('Low Floor A/C Bus');
    } else if (this.set4option3 === '2') {
      dbref.child('set4option2').set('Low Floor A/C Bus');
    }

    // this.toastr.success('Submitted Successfully', 'Survey Application');
  }

  isImageNull() {
    if (this.set4option1 === '' || this.set4option2 === '' || this.set4option3 === '' ||
    this.set4option1 === this.set4option2 || this.set4option1 === this.set4option3 ||
  this.set4option2 === this.set4option3 ) {
      return true;
    } else {
      return false;
    }
  }

  onNext(vehicleForm5: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA4').set(this.costA4);
    dbref.child('distanceA4').set(this.distanceA4);
    dbref.child('travelTimeA4').set(this.travelTimeA4);
    dbref.child('fascilityA4').set(this.fascilityA4);
    dbref.child('costB4').set(this.costB4);
    dbref.child('distanceB4').set(this.distanceB4);
    dbref.child('travelTimeB4').set(this.travelTimeB4);
    dbref.child('fascilityB4').set(this.fascilityB4);
    dbref.child('costC4').set(this.costC4);
    dbref.child('distanceC4').set(this.distanceC4);
    dbref.child('travelTimeC4').set(this.travelTimeC4);
    dbref.child('fascilityC4').set(this.fascilityC4);

    if (this.set4option1 === '1') {
      dbref.child('set4option1').set('Normal Bus');
    } else if (this.set4option1 === '2') {
      dbref.child('set4option2').set('Normal Bus');
    }
    if (this.set4option2 === '1') {
      dbref.child('set4option1').set('Normal Bus + Train');
    } else if (this.set4option2 === '2') {
      dbref.child('set4option2').set('Normal Bus + Train');
    }
    if (this.set4option3 === '1') {
      dbref.child('set4option1').set('Low Floor A/C Bus');
    } else if (this.set4option3 === '2') {
      dbref.child('set4option2').set('Low Floor A/C Bus');
    }

    // this.toastr.success('Filled Successfully', 'Survey Application');

  }

}
