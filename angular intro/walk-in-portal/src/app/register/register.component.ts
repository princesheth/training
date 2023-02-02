import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [  ],
})
export class RegisterComponent {
  months:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  panelOpenState = false;
  firstFormGroup = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    referal: ['', Validators.required],
    Instructional_Designer: false,
    Software_Engineer: false,
    Software_Quality_Engineer: false,
    update:false,
  });
  secondFormGroup = this._formBuilder.group({
    percentage:['',Validators.required],
    YOP:['',Validators.required],
    c_location:['',Validators.required],
    experience:['',Validators.required],
    c_CTC:['',Validators.required],
    e_CTC:['',Validators.required],
    other:[''],
    other_tech:[''],
    role:[''],
    Javascript:false,
    Angular_JS:false,
    React:false,
    Node_JS:false,
    Others:false,

  });
  thirdFormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder) {}
  personal: string='';
  appear:boolean=false;
  Notice:boolean=false;
  Change(e:any) {
    this.personal= e.value;
 }
  appeared(e:any) {
    if(e.value == 'Yes'){
      this.appear=true;
    }
    else{
      this.appear=false;
    }
 }
  notice(e:any) {
    if(e.value == 'Yes'){
      this.Notice=true;
    }
    else{
      this.Notice=false;
    }
 }
}
