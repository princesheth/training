export class Personal_info{
    firstname: string="";
    lastname: string="";
    email: string="";
    phoneno: string="";
    portfolio: string="";
    preferedjob: string[]=[];
    referer:string="";
    emailupdates:boolean;
    cv:string="";
    photo:string="";
}

export class edu_qualification{
    percentage:number;
    yop:number;
    Qualification:string="";
    stream:string="";
    college:string="";
    other_college:string="";
    college_location:string="";
    applicant_type:string="";
}

export class fresher_qualification{
    techs:string[]=[];
    other_tech:string="";
    role:string="";
    appeared:string="";
}
export class experienced_qualification{
    experience:string="";
    c_ctc:string="";
    e_ctc:string="";
    techs:string[]=[];
    techs_e:string[]=[];
    other_tech:string="";
    other_tech_e:string="";
    notice:string="";
    notice_end: string="";
    notice_length:string="";
    appeared:string="";
    role:string="";
}