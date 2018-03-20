import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
    selector: 'kec-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Krishna Electronics';

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        this.registerSvgIconsFromSvgFile();
    }

    registerSvgIconsFromSvgFile(): void {
        [
            {
                iconName: 'tv-2',
            },
            {
                iconName: 'tv',
            },
            {
                iconName: 'refrigerator',
            },
            {
                iconName: 'refrigerator-2',
            },
            {
                iconName: 'refrigerator-3',
            },
        ].forEach((item) => {
            console.log(`VIVEK>>>> ${item.iconName}`);
            this.iconRegistry.addSvgIcon(
                item.iconName,
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    `/assets/images/${item.iconName}.svg`
                )
            );
        });
    }
}
