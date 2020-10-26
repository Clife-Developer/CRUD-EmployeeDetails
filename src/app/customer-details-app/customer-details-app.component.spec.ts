import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsAppComponent } from './customer-details-app.component';

describe('CustomerDetailsAppComponent', () => {
  let component: CustomerDetailsAppComponent;
  let fixture: ComponentFixture<CustomerDetailsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
