import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() img:string;
  @Input() dashboard:boolean;
}
