import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-customer-details-app',
  templateUrl: './customer-details-app.component.html',
  styleUrls: ['./customer-details-app.component.css']
})
export class CustomerDetailsAppComponent implements OnInit {


  Employee:any;
  EmployeeName:string;
  EmployeeSurname:string;
  EmployeeAge:number;
  message='';


  constructor(private EmployeeService:CustomerServiceService) { }

  //
  addEmployee()
  {
    const details={
      Name:this.EmployeeName,
      Surname:this.EmployeeSurname,
      Age:this.EmployeeAge,
    };

    this.EmployeeService.AddEmployeeDetails(details).then(data=>{
      this.EmployeeName="";
      this.EmployeeSurname="";
      this.EmployeeAge=undefined;
      this.message="Employee Details Added";
    }).catch(error=>
      {
        console.log(error);
      });
  }

  //
  EditDetails(item)
  {
    item.Edit=true;
    item.EditName=item.Name;
    item.EditSurname=item.Surname;
    item.EditAge=item.Age;

  }

  //
  Update(item)
  {
    let EmployeeDetails={
      Name:item.EditName,
      Surname:item.EditSurname,
      Age:item.EditAge
     
    }
    
    this.EmployeeService.Update_Employee(item.id,EmployeeDetails);
    item.Edit=false;
  }

  //
  DeleteDetails(EmployeeId)
  {
    this.EmployeeService.Delete_details(EmployeeId);
  }


  ngOnInit(): void {

    this.EmployeeService.GetEmployeeDetails().subscribe(res=>
      {
        this.Employee=res.map(employee=>
          {
            return{
              id:employee.payload.doc.id,
              Edit:false,
              Name:employee.payload.doc.data()['Name'],
              Surname:employee.payload.doc.data()['Surname'],
              Age:employee.payload.doc.data()['Age']
            }
          });  
      });
   }
}
