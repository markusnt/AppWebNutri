import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLateralComponent } from './header-lateral.component';

describe('HeaderLateralComponent', () => {
  let component: HeaderLateralComponent;
  let fixture: ComponentFixture<HeaderLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
