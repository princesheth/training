import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Personal_info } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [],
})


export class RegisterComponent {
  img:string="../assets/img/Zeus-LMS-logo.svg";
  personal_info: Personal_info;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  panelOpenState = false;


  firstFormGroup = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    referal: [''],
    portfolio: [''],
    profile: ['', Validators.required],
    cv: ['', Validators.required],
    Instructional_Designer: false,
    Software_Engineer: false,
    Software_Quality_Engineer: false,
    update: false,
  });


  secondFormGroup = this._formBuilder.group({
    percentage: ['', Validators.required],
    YOP: ['', Validators.required],
    c_location: ['', Validators.required],
    experience: ['', Validators.required],
    c_CTC: ['', Validators.required],
    e_CTC: ['', Validators.required],
    other: [''],
    other_tech: [''],
    role: [''],
    Javascript: false,
    Angular_JS: false,
    React: false,
    Node_JS: false,
    Others: false,
  });


  thirdFormGroup = this._formBuilder.group({});


  constructor(private _formBuilder: FormBuilder) {}


  personal: string;
  appear: boolean;
  Notice: boolean;


  Change(e: any) {
    this.personal = e.value;
  }


  appeared(e: any) {
    if (e.value == 'Yes') {
      this.appear = true;
    } else {
      this.appear = false;
    }
  }


  notice(e: any) {
    if (e.value == 'Yes') {
      this.Notice = true;
    } else {
      this.Notice = false;
    }
  }

  cv_name:string;
  cv_upload(e: any) {
    console.log(e)
    // this.cv_name=e.target.files[0].name;
  }

  photo:string;
  pic_upload(e:any){
    this.photo=e.target.files[0].name;
  }


  preferedjob: string[] = [];


  form1() {
    if (this.firstFormGroup.value.Instructional_Designer) {
      this.preferedjob.push('Instructional Designer');
    }
    if (this.firstFormGroup.value.Software_Engineer) {
      this.preferedjob.push('Software Engineer');
    }
    if (this.firstFormGroup.value.Software_Quality_Engineer) {
      this.preferedjob.push('Software Quality Engineer');
    }
    this.personal_info = {
      firstname: this.firstFormGroup.value.firstname as string,
      lastname: this.firstFormGroup.value.lastname as string,
      email: this.firstFormGroup.value.email as string,
      phoneno: this.firstFormGroup.value.phone as string,
      referer: this.firstFormGroup.value.referal as string,
      portfolio: this.firstFormGroup.value.portfolio as string,
      preferedjob: this.preferedjob,
      emailupadtes: this.firstFormGroup.value.update as boolean,
      cv:this.cv_name,
      photo:this.photo
    };
  }


  form2(){
    var dis = document.querySelector("#disabled");
    console.log(dis)
    dis!.classList.remove('disabled');
  }
}
