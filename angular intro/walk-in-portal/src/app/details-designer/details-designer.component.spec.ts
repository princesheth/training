import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDesignerComponent } from './details-designer.component';

describe('DetailsDesignerComponent', () => {
  let component: DetailsDesignerComponent;
  let fixture: ComponentFixture<DetailsDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
