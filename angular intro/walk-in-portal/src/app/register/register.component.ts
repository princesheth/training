import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { edu_qualification, experienced_qualification, fresher_qualification, Personal_info } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers: [],
})


export class RegisterComponent {
  img:string="../assets/img/Zeus-LMS-logo.svg";
  personal_info: Personal_info=new Personal_info();
  e_quali:edu_qualification=new edu_qualification();
  fresher_q:fresher_qualification=new fresher_qualification();
  experienced_q:experienced_qualification=new experienced_qualification();
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
    qualification:['',Validators.required],
    stream:['',Validators.required],
    college:[''],
    other_college:[''],
    c_location: ['', Validators.required],
    type: ['', Validators.required],
    other_tech: [''],
    appeared:['',Validators.required],
    role: [''],
    experience: ['', Validators.required],
    c_CTC: ['', Validators.required],
    e_CTC: ['', Validators.required],
    other_tech_e:[''],
    notice:['',Validators.required],
    notice_end:['',Validators.required],
    notice_length:['',Validators.required],
    Javascript: false,
    Angular_JS: false,
    React: false,
    Node_JS: false,
    Others: false,
    Javascript_e: false,
    Angular_JS_e: false,
    React_e: false,
    Node_JS_e: false,
    Others_e: false,
  });


  thirdFormGroup = this._formBuilder.group({});
  fill: boolean=false;


  constructor(private _formBuilder: FormBuilder) {}


  personal: string;
  appear: boolean;
  Notice: boolean;


  Change(e: any) {
    this.personal = e.value;
    this.secondFormGroup.patchValue({
    Javascript : false,
    Javascript_e : false,
    React : false,
    React_e : false,
    Node_JS : false,
    Node_JS_e : false,
    Angular_JS : false,
    Angular_JS_e : false,
    Others : false,
    Others_e : false
    })

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
    this.cv_name=e.target.files[0].name;
  }

  photo:string;
  pic_upload(e:any){
    this.photo=e.target.files[0].name;
  }


  preferedjob: string[]=[];


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
      emailupdates: this.firstFormGroup.value.update as boolean,
      cv:this.cv_name,
      photo:this.photo
    };
    console.log(this.personal_info)
  }

  tech:string[]=[];
  tech_e:string[]=[];
  form2(){
    this.e_quali={
      percentage:+this.secondFormGroup.value.percentage!,
      yop:+this.secondFormGroup.value.YOP!,
      Qualification:this.secondFormGroup.value.qualification as string,
      stream:this.secondFormGroup.value.stream as string,
      college:this.secondFormGroup.value.college as string,
      other_college:this.secondFormGroup.value.other_college as string,
      college_location:this.secondFormGroup.value.c_location as string,
      applicant_type:this.secondFormGroup.value.type as string
    }

    if(this.secondFormGroup.value.type == 'Fresher'){
      if(this.secondFormGroup.value.Javascript){
        this.tech.push('Javascript')
      }
      if(this.secondFormGroup.value.Angular_JS){
        this.tech.push('Angular JS')
      }
      if(this.secondFormGroup.value.Node_JS){
        this.tech.push('Node JS')
      }
      if(this.secondFormGroup.value.React){
        this.tech.push('React')
      }
      this.fresher_q={
        techs:this.tech,
        other_tech:this.secondFormGroup.value.other_tech as string,
        role:this.secondFormGroup.value.role as string,
        appeared:this.secondFormGroup.value.appeared as string
      }
      this.experienced_q=new experienced_qualification();
    }
    else if(this.secondFormGroup.value.type == 'Experienced'){
      if(this.secondFormGroup.value.Javascript){
        this.tech.push('Javascript')
      }
      if(this.secondFormGroup.value.Angular_JS){
        this.tech.push('Angular JS')
      }
      if(this.secondFormGroup.value.Node_JS){
        this.tech.push('Node JS')
      }
      if(this.secondFormGroup.value.React){
        this.tech.push('React')
      }
      if(this.secondFormGroup.value.Javascript_e){
        this.tech_e.push('Javascript')
      }
      if(this.secondFormGroup.value.Angular_JS_e){
        this.tech_e.push('Angular JS')
      }
      if(this.secondFormGroup.value.Node_JS_e){
        this.tech_e.push('Node JS')
      }
      if(this.secondFormGroup.value.React_e){
        this.tech_e.push('React')
      }
      this.experienced_q={
        experience:this.secondFormGroup.value.experience as string,
        c_ctc:this.secondFormGroup.value.c_CTC as string,
        e_ctc:this.secondFormGroup.value.e_CTC as string,
        techs:this.tech,
        techs_e:this.tech_e,
        other_tech:this.secondFormGroup.value.other_tech as string,
        other_tech_e:this.secondFormGroup.value.other_tech_e as string,
        notice_end:this.secondFormGroup.value.notice_end! as string,
        notice_length:this.secondFormGroup.value.notice_length as string,
        role:this.secondFormGroup.value.role as string,
        notice:this.secondFormGroup.value.notice as string,
        appeared:this.secondFormGroup.value.appeared as string
      }
      this.fresher_q=new fresher_qualification();
    }

    console.log(this.e_quali,this.experienced_q,this.fresher_q)
    this.fill=true;

    var dis = document.querySelector("#disabled");
    dis!.classList.remove('disabled');
  }
}
