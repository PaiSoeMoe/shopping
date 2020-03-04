import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuWrapComponent } from './mobile-menu-wrap.component';

describe('MobileMenuWrapComponent', () => {
  let component: MobileMenuWrapComponent;
  let fixture: ComponentFixture<MobileMenuWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
