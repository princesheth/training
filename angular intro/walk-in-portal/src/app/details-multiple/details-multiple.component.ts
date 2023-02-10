import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-multiple',
  templateUrl: './details-multiple.component.html',
  styleUrls: ['./details-multiple.component.scss']
})
export class DetailsMultipleComponent {
  img:string="../assets/img/Zeus-LMS-logo.svg";
  panelOpenState = false;
  firstFormGroup = this._formBuilder.group({
    type:['',Validators.required],
    cv:['',Validators.required],
    Instructional_Designer:false,
    Software_Engineer:false,
    Software_Quality_Engineer:false,
  })

  Change(e:any){

  }
  cv_upload($e:any){


  }
  constructor(private _formBuilder: FormBuilder) {}
}
