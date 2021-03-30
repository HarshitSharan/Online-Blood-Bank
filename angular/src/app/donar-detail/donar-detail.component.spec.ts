import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarDetailComponent } from './donar-detail.component';

describe('DonarDetailComponent', () => {
  let component: DonarDetailComponent;
  let fixture: ComponentFixture<DonarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
