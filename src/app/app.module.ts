import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconRegistry} from '@angular/material';
import {AppComponent} from './app.component';
import {CustomAngularMaterialModule} from './custom-angular-material.module';
import {NavigationFrameworkComponent} from './components/navigation-framework/navigation-framework.component';
import {KecToolbarComponent} from './components/kec-toolbar/kec-toolbar.component';
import { KecMainSidenavContentComponent } from './components/kec-main-sidenav-content/kec-main-sidenav-content.component';
import { KecMainSidenavComponent} from './components/kec-main-sidenav/kec-main-sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationFrameworkComponent,
        KecToolbarComponent,
        KecMainSidenavContentComponent,
        KecMainSidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CustomAngularMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
