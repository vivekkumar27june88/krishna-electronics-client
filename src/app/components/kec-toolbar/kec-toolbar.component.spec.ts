import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KecToolbarComponent } from './kec-toolbar.component';

describe('KecToolbarComponent', () => {
  let component: KecToolbarComponent;
  let fixture: ComponentFixture<KecToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KecToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KecToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
