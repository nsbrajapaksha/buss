import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  providers: [ToastrService]
})
export class CompTwoComponent implements OnInit {
  nic = '';
  costA1 = '';
  costB1 = '';
  costC1 = '';
  distanceA1 = '';
  distanceB1 = '';
  distanceC1 = '';
  travelTimeA1 = '';
  travelTimeB1 = '';
  travelTimeC1 = '';
  fascilityA1 = '';
  fascilityB1 = '';
  fascilityC1 = '';

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

  set1option1 = '';
  set1option2 = '';
  set1option3 = '';

  vehicletype = 'bus';
  ac = 'AC';
  seats: string;
  vehicleNo: string = null;
  file: File = null;
  @ViewChild('myInput')
  myInputVariable: any;

  message: string;

  constructor(private vehicleService: VehicleService, private toastr: ToastrService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    const d = new Date(),
     dformat = [d.getMonth(),
               d.getDay(),
               d.getFullYear()].join() +
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join();

    this.nic = new Date().toISOString().substr(0, 19);
    this.distanceA1 = this.distanceAarray[Math.floor(Math.random() * 3)].toString();
    this.distanceB1 = this.distanceBarray[Math.floor(Math.random() * 3)].toString();
    this.distanceC1 = this.distanceCarray[Math.floor(Math.random() * 3)].toString();
    this.costA1 = this.costAarray[Math.floor(Math.random() * 3)].toString();
    this.costB1 = this.costBarray[Math.floor(Math.random() * 3)].toString();
    this.costC1 = this.costCarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeA1 = this.travelTimeAarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeB1 = this.travelTimeBarray[Math.floor(Math.random() * 3)].toString();
    this.travelTimeC1 = this.travelTimeCarray[Math.floor(Math.random() * 3)].toString();
    this.fascilityA1 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityB1 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();
    this.fascilityC1 = this.wifiACarray[Math.floor(Math.random() * 2)].toString();

  }

  isImageNull() {
    if (this.set1option1 === '' || this.set1option2 === '' || this.set1option3 === '' ||
    this.set1option1 === this.set1option2 || this.set1option1 === this.set1option3 ||
  this.set1option2 === this.set1option3 ) {
      return true;
    } else {
      return false;
    }
  }

  onNext(vehicleForm2: NgForm) {
    this.vehicleService.setNIC(this.nic);
    const dbref = firebase.database().ref('/Vehicles/' + this.nic);
    dbref.child('costA1').set(this.costA1);
    dbref.child('distanceA1').set(this.distanceA1);
    dbref.child('travelTimeA1').set(this.travelTimeA1);
    dbref.child('fascilityA1').set(this.fascilityA1);
    dbref.child('costB1').set(this.costB1);
    dbref.child('distanceB1').set(this.distanceB1);
    dbref.child('travelTimeB1').set(this.travelTimeB1);
    dbref.child('fascilityB1').set(this.fascilityB1);
    dbref.child('costC1').set(this.costC1);
    dbref.child('distanceC1').set(this.distanceC1);
    dbref.child('travelTimeC1').set(this.travelTimeC1);
    dbref.child('fascilityC1').set(this.fascilityC1);


    if (this.set1option1 === '1') {
      dbref.child('set1option1').set('Normal Bus');
    } else if (this.set1option1 === '2') {
      dbref.child('set1option2').set('Normal Bus');
    }
    if (this.set1option2 === '1') {
      dbref.child('set1option1').set('Normal Bus + Train');
    } else if (this.set1option2 === '2') {
      dbref.child('set1option2').set('Normal Bus + Train');
    }
    if (this.set1option3 === '1') {
      dbref.child('set1option1').set('Low Floor A/C Bus');
    } else if (this.set1option3 === '2') {
      dbref.child('set1option2').set('Low Floor A/C Bus');
    }

  }

}
