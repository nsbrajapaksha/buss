import { Vehicle } from './../shared/vehicle.model';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from './../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService, ToastrService]
})
export class VehicleComponent implements OnInit {
  costA1 = '';
  costB1 = '';
  costC1 = '';
  costA2 = '';
  costB2 = '';
  costC2 = '';
  costA3 = '';
  costB3 = '';
  costC3 = '';
  costA4 = '';
  costB4 = '';
  costC4 = '';
  costA5 = '';
  costB5 = '';
  costC5 = '';
  distanceA1 = '';
  distanceB1 = '';
  distanceC1 = '';
  distanceA2 = '';
  distanceB2 = '';
  distanceC2 = '';
  distanceA3 = '';
  distanceB3 = '';
  distanceC3 = '';
  distanceA4 = '';
  distanceB4 = '';
  distanceC4 = '';
  distanceA5 = '';
  distanceB5 = '';
  distanceC5 = '';
  travelTimeA1 = '';
  travelTimeB1 = '';
  travelTimeC1 = '';
  travelTimeA2 = '';
  travelTimeB2 = '';
  travelTimeC2 = '';
  travelTimeA3 = '';
  travelTimeB3 = '';
  travelTimeC3 = '';
  travelTimeA4 = '';
  travelTimeB4 = '';
  travelTimeC4 = '';
  travelTimeA5 = '';
  travelTimeB5 = '';
  travelTimeC5 = '';
  fascilityA1 = '';
  fascilityB1 = '';
  fascilityC1 = '';
  fascilityA2 = '';
  fascilityB2 = '';
  fascilityC2 = '';
  fascilityA3 = '';
  fascilityB3 = '';
  fascilityC3 = '';
  fascilityA4 = '';
  fascilityB4 = '';
  fascilityC4 = '';
  fascilityA5 = '';
  fascilityB5 = '';
  fascilityC5 = '';

  distanceAarray = [5, 10, 20];
  distanceBarray = [5, 10, 20];
  distanceCarray = [5, 10, 20];
  costAarray = [18, 25, 40];
  costBarray = [25, 30, 35];
  costCarray = [35, 50, 80];
  travelTimeAarray = [30, 45, 90];
  travelTimeBarray = [30, 45, 60];
  travelTimeCarray = [20, 30, 60];
  wifiACarray = ['Yes', 'No'];

  age = '';
  gender = '';
  occupation = '';
  incomeLevel = '';

  origin = '';
  destination = '';
  travelTime = '';
  transportmodes = '';

  set1option1 = '';
  set1option2 = '';
  set2option1 = '';
  set2option2 = '';
  set3option1 = '';
  set3option2 = '';
  set4option1 = '';
  set4option2 = '';
  set5option1 = '';
  set5option2 = '';

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
    // this.vehicleService.getData();
    // this.resetForm();
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

  photoSelected(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(vehicleForm: NgForm) {

    const dbref = firebase.database().ref('/Vehicles').push();
    dbref.child('age').set(this.age);
    dbref.child('gender').set(this.gender);
    dbref.child('occupation').set(this.occupation);
    dbref.child('incomeLevel').set(this.incomeLevel);

    dbref.child('origin').set(this.origin);
    dbref.child('destination').set(this.destination);
    dbref.child('travelTime').set(this.travelTime);
    dbref.child('transportModes').set(this.transportmodes);

    dbref.child('set1option1').set(this.set1option1);
    dbref.child('set1option2').set(this.set1option2);
    dbref.child('set2option1').set(this.set2option1);
    dbref.child('set2option2').set(this.set2option2);
    dbref.child('set3option1').set(this.set3option1);
    dbref.child('set3option2').set(this.set3option2);
    dbref.child('set4option1').set(this.set4option1);
    dbref.child('set4option2').set(this.set4option2);
    dbref.child('set5option1').set(this.set5option1);
    dbref.child('set5option2').set(this.set5option2);

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

    this.toastr.success('Submitted Successfully', 'Survey Application');

    /*console. log('vehicle type:' + this.vehicletype + ' ' + 'ac:' + this.ac + ' ' + 'seats:'
     + this.seats + ' ' + 'vehicleNo:' + this.vehicleNo );

    this.vehicleService.selectedVehicle.$key = this.vehicleNo.toString().trim();
    this.vehicleService.selectedVehicle.seats = this.seats.toString().trim();
    this.vehicleService.selectedVehicle.vehicleNo = this.vehicleNo.toString().trim();
    this.vehicleService.selectedVehicle.ac = this.ac;
    if (this.vehicletype === 'bus' && this.ac === 'AC') {
      this.vehicleService.selectedVehicle.vehicletype = 'busac';
      this.vehicleService.selectedVehicle.bus = 'yes';
      this.vehicleService.selectedVehicle.busacorvan = 'yes';
      this.vehicleService.selectedVehicle.busnonacorvan = 'no';
      this.vehicleService.selectedVehicle.vehicle = 'bus';
    } else if (this.vehicletype === 'bus' && this.ac === 'NONAC') {
      this.vehicleService.selectedVehicle.vehicletype = 'busnonac';
      this.vehicleService.selectedVehicle.bus = 'no';
      this.vehicleService.selectedVehicle.busacorvan = 'no';
      this.vehicleService.selectedVehicle.busnonacorvan = 'yes';
      this.vehicleService.selectedVehicle.vehicle = 'bus';
    } else if (this.vehicletype === 'van' && this.ac === 'AC') {
      this.vehicleService.selectedVehicle.vehicletype = 'van';
      this.vehicleService.selectedVehicle.bus = 'no';
      this.vehicleService.selectedVehicle.busacorvan = 'yes';
      this.vehicleService.selectedVehicle.busnonacorvan = 'yes';
      this.vehicleService.selectedVehicle.vehicle = 'van';
    } else {
      this.vehicleService.selectedVehicle.vehicletype = 'van';
      this.vehicleService.selectedVehicle.bus = 'no';
      this.vehicleService.selectedVehicle.busacorvan = 'yes';
      this.vehicleService.selectedVehicle.busnonacorvan = 'yes';
      this.vehicleService.selectedVehicle.vehicle = 'van';
    }

    const metaData = {'contentType': this.file.type};
    const storageRef = firebase.storage().ref('/Vehicles/' + this.vehicleNo);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(this.file, metaData);
    console.log('Uploading: ', this.file.name);

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      console.log('Upload is Complete!');
      this.vehicleService.selectedVehicle.image = uploadSnapshot.downloadURL;

      this.vehicleService.insertVehicle(this.vehicleService.selectedVehicle);
      this.toastr.success('Submitted Successfully', 'Employee Register');
      this.resetForm(vehicleForm);
    });*/

  }

  /*isImageNull() {
    if (this.file === null || this.myInputVariable.nativeElement.value === '') {
      return true;
    } else {
      return false;
    }
  }*/

  /*resetForm(vehicleForm?: NgForm) {
    if (vehicleForm != null) {
      vehicleForm.reset();
    }
    this.vehicletype = 'bus';
    this.ac = 'AC';
    this.seats = null;
    this.vehicleNo = null;
    this.myInputVariable.nativeElement.value = '';
  }*/

}
