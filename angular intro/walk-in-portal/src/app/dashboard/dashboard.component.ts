import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  img:string="../assets/img/Zeus-LMS-logo.svg";
  cards=[{
    name:"Walk In for Designer Job Role",
    date_from:new Date(2021,6,10),
    date_to:new Date(2021,6,11),
    location:"Mumbai",
    job_roles:["Instructional Designer"],
    opportunity:"",
    expires_in:"5 Days",
    route:"designer"
  },
  {
    name:"Walk In for Multiple Job Roles",
    date_from:new Date(2021,6,3),
    date_to:new Date(2021,6,4),
    location:"Mumbai",
    job_roles:["Instructional Designer","Software Engineer","Software Quality Engineer"],
    opportunity:"MCA",
    expires_in:"",
    route:"multiple"
  },
  {
    name:"Walk In for Design and Development Job Role",
    date_from:new Date(2021,6,10),
    date_to:new Date(2021,6,11),
    location:"Mumbai",
    job_roles:["Instructional Designer","Software Engineer"],
    opportunity:"",
    expires_in:"",
    route:"development"
  }
]
}
