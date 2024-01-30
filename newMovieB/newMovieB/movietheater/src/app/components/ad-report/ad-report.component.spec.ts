import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdReportComponent } from './ad-report.component';

describe('AdReportComponent', () => {
  let component: AdReportComponent;
  let fixture: ComponentFixture<AdReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
