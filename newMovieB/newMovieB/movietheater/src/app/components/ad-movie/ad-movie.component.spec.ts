import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMovieComponent } from './ad-movie.component';

describe('AdMovieComponent', () => {
  let component: AdMovieComponent;
  let fixture: ComponentFixture<AdMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
