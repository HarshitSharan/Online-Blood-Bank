import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonorComponent } from './admin-donor.component';

describe('AdminDonorComponent', () => {
  let component: AdminDonorComponent;
  let fixture: ComponentFixture<AdminDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
