import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationFrameworkComponent} from './navigation-framework.component';

describe('NavigationFrameworkComponent', () => {
    let component: NavigationFrameworkComponent;
    let fixture: ComponentFixture<NavigationFrameworkComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NavigationFrameworkComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationFrameworkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
