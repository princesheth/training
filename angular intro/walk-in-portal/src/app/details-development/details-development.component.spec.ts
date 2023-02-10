import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDevelopmentComponent } from './details-development.component';

describe('DetailsDevelopmentComponent', () => {
  let component: DetailsDevelopmentComponent;
  let fixture: ComponentFixture<DetailsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
