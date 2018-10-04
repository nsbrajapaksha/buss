import { Vehicle } from './vehicle.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class VehicleService {
  currentNIC;
  vehicleList: AngularFireList<any>;
  selectedVehicle: Vehicle = new Vehicle();
  constructor(private firebase: AngularFireDatabase) {
    this.currentNIC = 'default';
  }

  setNIC(nic: string) {
    this.currentNIC = nic;
  }

  getNIC() {
    return this.currentNIC;
  }

  getData() {
  this.vehicleList = this.firebase.list('Vehicles');
  return this.vehicleList;
  }

  insertVehicle(vehicle: Vehicle) {
    this.firebase.object('Vehicles/' + vehicle.vehicleNo).set({
      ac: vehicle.ac,
      bus: vehicle.bus,
      busacorvan: vehicle.busacorvan,
      busnonacorvan: vehicle.busnonacorvan,
      image: vehicle.image,
      seats: vehicle.seats,
      vehicleNo: vehicle.vehicleNo,
      vehicletype: vehicle.vehicletype,
      vehicle: vehicle.vehicle
    });
  }

  updateVehicle(vehicle: Vehicle) {
    this.vehicleList.update(vehicle.$key,
      {
      ac: vehicle.ac,
      bus: vehicle.bus,
      busacorvan: vehicle.busacorvan,
      busnonacorvan: vehicle.busnonacorvan,
      image: vehicle.image,
      seats: vehicle.seats,
      vehicleNo: vehicle.vehicleNo,
      vehicletype: vehicle.vehicletype,
      vehicle: vehicle.vehicle
      });
  }

  deleteVehicle($key: string) {
    this.vehicleList.remove($key);
  }

}
