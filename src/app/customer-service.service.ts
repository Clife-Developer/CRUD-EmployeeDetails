import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private firestore:AngularFirestore) { }


  //Adding a customer details
  AddEmployeeDetails(payload)
  {
    return this.firestore.collection('Employee').add(payload);
  }

  //Getting Customer information 
  GetEmployeeDetails()
  {
    return this.firestore.collection('Employee').snapshotChanges();
  }

  //Updating A customer Details
  Update_Employee(EmployeeId,EmployeeDetails)
  {
    this.firestore.doc('Employee/'+EmployeeId).update(EmployeeDetails);
  }


  Delete_details(EmployeeId)
  {
    this.firestore.doc('Employee/'+EmployeeId).delete();
  }
}
