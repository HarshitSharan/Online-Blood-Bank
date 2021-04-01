import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsampleComponent } from './adminsample.component';

describe('AdminsampleComponent', () => {
  let component: AdminsampleComponent;
  let fixture: ComponentFixture<AdminsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
