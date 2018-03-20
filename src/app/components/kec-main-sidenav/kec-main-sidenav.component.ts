import {Component, OnInit} from '@angular/core';
import {KecMainSidenavMenuItem} from './kec-main-sidenav-menuitem';

@Component({
    selector: 'kec-main-sidenav',
    templateUrl: './kec-main-sidenav.component.html',
    styleUrls: ['./kec-main-sidenav.component.scss'],
})
export class KecMainSidenavComponent implements OnInit {
    public mainSidenavMenuitems: Array<KecMainSidenavMenuItem>;
    constructor() {
        this.mainSidenavMenuitems = this.getMainSidenavMenuItems();
    }

    ngOnInit() {}

    getMainSidenavMenuItems() {
        return [
            {
                svgIcon: 'tv',
                menuName: 'TV',
            },
            {
                svgIcon: 'refrigerator-2',
                menuName: 'Refrigerator'
            },
            {
                svgIcon: '',
                menuName: 'Washing Machine'
            },
            {
                svgIcon: '',
                menuName: 'Air Cooler'
            },
            {
                svgIcon: '',
                menuName: 'Air Conditioner'
            },
            {
                svgIcon: '',
                menuName: 'Fan'
            },
            {
                svgIcon: '',
                menuName: 'DTH'
            },
            {
                svgIcon: '',
                menuName: 'Voltage Stablizer'
            },
            {
                svgIcon: '',
                menuName: 'Micro Oven'
            },
            {
                svgIcon: '',
                menuName: 'Mixer & Jucer'
            },
            {
                svgIcon: '',
                menuName: 'Music System'
            },
            {
                svgIcon: '',
                menuName: 'Radio'
            },
            {
                svgIcon: '',
                menuName: 'DTH'
            },
            {
                svgIcon: '',
                menuName: 'Electric Iron'
            },
            {
                svgIcon: '',
                menuName: 'Water Filter'
            },
        ];
    }
}
