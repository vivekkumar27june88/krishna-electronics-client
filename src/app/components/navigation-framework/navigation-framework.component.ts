import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'kec-navigation-framework',
    templateUrl: './navigation-framework.component.html',
    styleUrls: ['./navigation-framework.component.scss'],
})
export class NavigationFrameworkComponent implements OnInit, OnDestroy {
    public kecMainSidenavOpened = true;
    public kecMainSidenavMode = 'side';

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {}

    ngOnInit() {}

    ngOnDestroy(): void {}

    public kecMainToolbarMenuClicked(): void {
        this.kecMainSidenavOpened = !this.kecMainSidenavOpened;
    }
}
