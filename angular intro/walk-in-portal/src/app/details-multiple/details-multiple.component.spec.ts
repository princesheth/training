import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMultipleComponent } from './details-multiple.component';

describe('DetailsMultipleComponent', () => {
  let component: DetailsMultipleComponent;
  let fixture: ComponentFixture<DetailsMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
