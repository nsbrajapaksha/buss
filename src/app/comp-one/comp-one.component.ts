import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  providers: [ToastrService]
})
export class CompOneComponent implements OnInit {
  age = '';
  nic = '';
  gender = '';
  occupation = '';
  incomeLevel = '';

  origin = '';
  destination = '';
  travelTime = '';
  transportmodes = '';
  cost = '';
  purpose = '';

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
  }

  onNext(vehicleForm1: NgForm) {

    // this.vehicleService.setNIC(this.nic);
    // const dbref = firebase.database().ref('/Vehicles/' + this.nic);
    const dbref = firebase.database().ref('/Vehicles/' + this.vehicleService.getNIC());
    dbref.child('age').set(this.age);
    dbref.child('gender').set(this.gender);
    dbref.child('occupation').set(this.occupation);
    dbref.child('incomeLevel').set(this.incomeLevel);

    dbref.child('origin').set(this.origin);
    dbref.child('destination').set(this.destination);
    dbref.child('travelTime').set(this.travelTime);
    dbref.child('transportModes').set(this.transportmodes);
    dbref.child('purpose').set(this.purpose);
    dbref.child('cost').set(this.cost);

    this.toastr.success('Submitted Successfully', 'Survey Application');

  }

}
