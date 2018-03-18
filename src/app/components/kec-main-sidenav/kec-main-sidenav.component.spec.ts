import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KecMainSidenavComponent } from './kec-main-sidenav.component';

describe('KecMainSidenavComponent', () => {
  let component: KecMainSidenavComponent;
  let fixture: ComponentFixture<KecMainSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KecMainSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KecMainSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
