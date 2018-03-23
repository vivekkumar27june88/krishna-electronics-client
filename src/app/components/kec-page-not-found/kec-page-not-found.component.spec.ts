import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KecPageNotFoundComponent } from './kec-page-not-found.component';

describe('KecPageNotFoundComponent', () => {
  let component: KecPageNotFoundComponent;
  let fixture: ComponentFixture<KecPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KecPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KecPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
