import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KecProductsComponent } from './kec-products.component';

describe('KecProductsComponent', () => {
  let component: KecProductsComponent;
  let fixture: ComponentFixture<KecProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KecProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KecProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
