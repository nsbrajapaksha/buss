import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-four-comp',
  templateUrl: './four-comp.component.html',
  styleUrls: ['./four-comp.component.css'],
  providers: [ToastrService]
})
export class FourCompComponent implements OnInit {

  costA3 = '';
  costB3 = '';
  costC3 = '';
  distanceA3 = '';
  distanceB3 = '';
  distanceC3 = '';
  travelTimeA3 = '';
  travelTimeB3 = '';
  travelTimeC3 = '';
  fascilityA3 = '';
  fascilityB3 = '';
  fascilityC3 = '';

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

  set3option1 = '';
  set3option2 = '';
  set3option3 = '';

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
    this.distanceA3 = this.distanceAarray[Math.floor(Math.random() * 3)].toString();
    this.distanceB3 = this.distanceBarray[Math.floor(Math.random() * 3)].toString();
    this.distanceC3 = this.distanceCarray[Math.floor(Math.random() * 3)].toString();
    this.costA3 = this.costAarray[Math.floor(Math.random() * 3)].toString();
    this.costB3 = this.costBarray[Math.floor(Math.random() * 3)].toString();
    this.costC3 = this.costCarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeA3 = this.travelTimeAarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeB3 = this.travelTimeBarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeC3 = this.travelTimeCarray[Math.floor(Math.random() * 3)].toString();
    this.fascilityA3 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityB3 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityC3 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
  }

  onSkip(vehicleForm4: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA3').set(this.costA3);
    dbref.child('distanceA3').set(this.distanceA3);
    dbref.child('travelTimeA3').set(this.travelTimeA3);
    dbref.child('fascilityA3').set(this.fascilityA3);
    dbref.child('costB3').set(this.costB3);
    dbref.child('distanceB3').set(this.distanceB3);
    dbref.child('travelTimeB3').set(this.travelTimeB3);
    dbref.child('fascilityB3').set(this.fascilityB3);
    dbref.child('costC3').set(this.costC3);
    dbref.child('distanceC3').set(this.distanceC3);
    dbref.child('travelTimeC3').set(this.travelTimeC3);
    dbref.child('fascilityC3').set(this.fascilityC3);

    if (this.set3option1 === '1') {
      dbref.child('set3option1').set('Normal Bus');
    } else if (this.set3option1 === '2') {
      dbref.child('set3option2').set('Normal Bus');
    }
    if (this.set3option2 === '1') {
      dbref.child('set3option1').set('Normal Bus + Train');
    } else if (this.set3option2 === '2') {
      dbref.child('set3option2').set('Normal Bus + Train');
    }
    if (this.set3option3 === '1') {
      dbref.child('set3option1').set('Low Floor A/C Bus');
    } else if (this.set3option3 === '2') {
      dbref.child('set3option2').set('Low Floor A/C Bus');
    }


    // this.toastr.success('Submitted Successfully', 'Survey Application');
  }

  onNext(vehicleForm4: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA3').set(this.costA3);
    dbref.child('distanceA3').set(this.distanceA3);
    dbref.child('travelTimeA3').set(this.travelTimeA3);
    dbref.child('fascilityA3').set(this.fascilityA3);
    dbref.child('costB3').set(this.costB3);
    dbref.child('distanceB3').set(this.distanceB3);
    dbref.child('travelTimeB3').set(this.travelTimeB3);
    dbref.child('fascilityB3').set(this.fascilityB3);
    dbref.child('costC3').set(this.costC3);
    dbref.child('distanceC3').set(this.distanceC3);
    dbref.child('travelTimeC3').set(this.travelTimeC3);
    dbref.child('fascilityC3').set(this.fascilityC3);

    if (this.set3option1 === '1') {
      dbref.child('set3option1').set('Normal Bus');
    } else if (this.set3option1 === '2') {
      dbref.child('set3option2').set('Normal Bus');
    }
    if (this.set3option2 === '1') {
      dbref.child('set3option1').set('Normal Bus + Train');
    } else if (this.set3option2 === '2') {
      dbref.child('set3option2').set('Normal Bus + Train');
    }
    if (this.set3option3 === '1') {
      dbref.child('set3option1').set('Low Floor A/C Bus');
    } else if (this.set3option3 === '2') {
      dbref.child('set3option2').set('Low Floor A/C Bus');
    }


    // this.toastr.success('Filled Successfully', 'Survey Application');

  }

  isImageNull() {
    if (this.set3option1 === '' || this.set3option2 === '' || this.set3option3 === '' ||
    this.set3option1 === this.set3option2 || this.set3option1 === this.set3option3 ||
  this.set3option2 === this.set3option3 ) {
      return true;
    } else {
      return false;
    }
  }

}
