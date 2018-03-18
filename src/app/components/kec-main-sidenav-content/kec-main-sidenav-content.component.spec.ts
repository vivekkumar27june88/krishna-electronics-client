import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KecMainSidenavContentComponent } from './kec-main-sidenav-content.component';

describe('KecMainSidenavContentComponent', () => {
  let component: KecMainSidenavContentComponent;
  let fixture: ComponentFixture<KecMainSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KecMainSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KecMainSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
