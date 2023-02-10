import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})
export class CardComponent {
  @Input() card:any;
  mn=["Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"]
  counter(i: number) {
    return new Array(i);
  }
  next(name:string){
    this.router.navigate(['details-'+name])
  }
  constructor(private router:Router){
  }
}
