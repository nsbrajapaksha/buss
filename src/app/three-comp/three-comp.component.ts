import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-three-comp',
  templateUrl: './three-comp.component.html',
  styleUrls: ['./three-comp.component.css'],
  providers: [ToastrService]
})
export class ThreeCompComponent implements OnInit {
  costA2 = '';
  costB2 = '';
  costC2 = '';
  distanceA2 = '';
  distanceB2 = '';
  distanceC2 = '';
  travelTimeA2 = '';
  travelTimeB2 = '';
  travelTimeC2 = '';
  fascilityA2 = '';
  fascilityB2 = '';
  fascilityC2 = '';

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

  set2option1 = '';
  set2option2 = '';
  set2option3 = '';

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
    this.distanceA2 = this.distanceAarray[Math.floor(Math.random() * 3)].toString();
    this.distanceB2 = this.distanceBarray[Math.floor(Math.random() * 3)].toString();
    this.distanceC2 = this.distanceCarray[Math.floor(Math.random() * 3)].toString();
    this.costA2 = this.costAarray[Math.floor(Math.random() * 3)].toString();
    this.costB2 = this.costBarray[Math.floor(Math.random() * 3)].toString();
    this.costC2 = this.costCarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeA2 = this.travelTimeAarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeB2 = this.travelTimeBarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeC2 = this.travelTimeCarray[Math.floor(Math.random() * 3)].toString();
    this.fascilityA2 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityB2 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityC2 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
  }

  onSkip(vehicleForm3: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA2').set(this.costA2);
    dbref.child('distanceA2').set(this.distanceA2);
    dbref.child('travelTimeA2').set(this.travelTimeA2);
    dbref.child('fascilityA2').set(this.fascilityA2);
    dbref.child('costB2').set(this.costB2);
    dbref.child('distanceB2').set(this.distanceB2);
    dbref.child('travelTimeB2').set(this.travelTimeB2);
    dbref.child('fascilityB2').set(this.fascilityB2);
    dbref.child('costC2').set(this.costC2);
    dbref.child('distanceC2').set(this.distanceC2);
    dbref.child('travelTimeC2').set(this.travelTimeC2);
    dbref.child('fascilityC2').set(this.fascilityC2);

    if (this.set2option1 === '1') {
      dbref.child('set2option1').set('Normal Bus');
    } else if (this.set2option1 === '2') {
      dbref.child('set2option2').set('Normal Bus');
    }
    if (this.set2option2 === '1') {
      dbref.child('set2option1').set('Normal Bus + Train');
    } else if (this.set2option2 === '2') {
      dbref.child('set2option2').set('Normal Bus + Train');
    }
    if (this.set2option3 === '1') {
      dbref.child('set2option1').set('Low Floor A/C Bus');
    } else if (this.set2option3 === '2') {
      dbref.child('set2option2').set('Low Floor A/C Bus');
    }


    // this.toastr.success('Submitted Successfully', 'Survey Application');
  }

  isImageNull() {
    if (this.set2option1 === '' || this.set2option2 === '' || this.set2option3 === '' ||
    this.set2option1 === this.set2option2 || this.set2option1 === this.set2option3 ||
  this.set2option2 === this.set2option3 ) {
      return true;
    } else {
      return false;
    }
  }

  onNext(vehicleForm3: NgForm) {
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('costA2').set(this.costA2);
    dbref.child('distanceA2').set(this.distanceA2);
    dbref.child('travelTimeA2').set(this.travelTimeA2);
    dbref.child('fascilityA2').set(this.fascilityA2);
    dbref.child('costB2').set(this.costB2);
    dbref.child('distanceB2').set(this.distanceB2);
    dbref.child('travelTimeB2').set(this.travelTimeB2);
    dbref.child('fascilityB2').set(this.fascilityB2);
    dbref.child('costC2').set(this.costC2);
    dbref.child('distanceC2').set(this.distanceC2);
    dbref.child('travelTimeC2').set(this.travelTimeC2);
    dbref.child('fascilityC2').set(this.fascilityC2);

    if (this.set2option1 === '1') {
      dbref.child('set2option1').set('Normal Bus');
    } else if (this.set2option1 === '2') {
      dbref.child('set2option2').set('Normal Bus');
    }
    if (this.set2option2 === '1') {
      dbref.child('set2option1').set('Normal Bus + Train');
    } else if (this.set2option2 === '2') {
      dbref.child('set2option2').set('Normal Bus + Train');
    }
    if (this.set2option3 === '1') {
      dbref.child('set2option1').set('Low Floor A/C Bus');
    } else if (this.set2option3 === '2') {
      dbref.child('set2option2').set('Low Floor A/C Bus');
    }


    // this.toastr.success('Filled Successfully', 'Survey Application');

  }

}
