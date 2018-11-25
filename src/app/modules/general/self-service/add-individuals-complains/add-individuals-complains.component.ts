import { Component, OnInit } from '@angular/core';
import { SelfService } from 'src/app/model/self-service';
import { SelfServiceService } from 'src/app/services/self-service.service';
import { Department } from 'src/app/model/department';
import { SelfServiceType } from 'src/app/model/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service-type.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-add-individuals-complains',
  templateUrl: './add-individuals-complains.component.html',
  styleUrls: ['./add-individuals-complains.component.css']
})
export class AddIndividualsComplainsComponent implements OnInit {
  constructor(private selfServiceService: SelfServiceService, private selfServiceTypeService:SelfServiceTypeService,private userService:UserService) { }

  selfService: SelfService[];
  selfServiceObj = new SelfService();
  departments: Department[];
  selfServiceType: SelfServiceType[];
   userObj=new User();
  users:User[];

  ngOnInit() {
    this.getDepartments();
    this.getSelfServiceType();
    this.getUser();
  }

  // This should be written the DEPARTMENT SEPERATELY
  getDepartments() {
    return this.selfServiceService.getDepartments().subscribe(
      data => {
        this.departments = data;
        this.selfServiceObj.relevantDepartment = 0;
      }
    )
  }

  getSelfServiceType() {
    return this.selfServiceTypeService.getAllSelfServiceType().subscribe(
      data => {
        this.selfServiceType = data;
        this.selfServiceObj.selfServiceType=0;
      }
    )
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
       this.userObj.id=0;
      }
    )
  }


  createComplain() {
    this.selfServiceObj.user = 1;
    // return this.selfServiceService.createComplain(this.selfServiceObj).subscribe(data => {
    //   console.log(this.selfServiceObj);
    this.selfServiceService.createComplain(this.selfServiceObj).subscribe(data => {
      console.log(data);
    })
  }

}