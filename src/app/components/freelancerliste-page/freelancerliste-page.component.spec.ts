import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerlistePageComponent } from './freelancerliste-page.component';

describe('FreelancerlistePageComponent', () => {
  let component: FreelancerlistePageComponent;
  let fixture: ComponentFixture<FreelancerlistePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerlistePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerlistePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
