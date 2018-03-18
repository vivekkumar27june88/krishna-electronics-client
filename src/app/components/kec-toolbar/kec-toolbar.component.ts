import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'kec-toolbar',
    templateUrl: './kec-toolbar.component.html',
    styleUrls: ['./kec-toolbar.component.scss'],
})
export class KecToolbarComponent implements OnInit {
    @Output() menuBtnClicked = new EventEmitter<String>();

    constructor() {}

    ngOnInit() {}

    public onMenuBtnClicked() {
        this.menuBtnClicked.emit('clicked');
    }
}
