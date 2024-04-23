import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRequestsComponent } from './sales-requests.component';

describe('SalesRequestsComponent', () => {
  let component: SalesRequestsComponent;
  let fixture: ComponentFixture<SalesRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
