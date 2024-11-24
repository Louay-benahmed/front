import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteownerPageComponent } from './siteowner-page.component';

describe('SiteownerPageComponent', () => {
  let component: SiteownerPageComponent;
  let fixture: ComponentFixture<SiteownerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteownerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteownerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
