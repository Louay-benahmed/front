import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerPageComponent } from './freelancer-page.component';

describe('FreelancerPageComponent', () => {
  let component: FreelancerPageComponent;
  let fixture: ComponentFixture<FreelancerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
