import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconRegistry} from '@angular/material';
import {AppComponent} from './app.component';
import {CustomAngularMaterialModule} from './custom-angular-material.module';
import {NavigationFrameworkComponent} from './components/navigation-framework/navigation-framework.component';
import {KecToolbarComponent} from './components/kec-toolbar/kec-toolbar.component';
import {KecMainSidenavContentComponent} from './components/kec-main-sidenav-content/kec-main-sidenav-content.component';
import {KecMainSidenavComponent} from './components/kec-main-sidenav/kec-main-sidenav.component';
import {KecPageNotFoundComponent} from './components/kec-page-not-found/kec-page-not-found.component';
import {KecProductsComponent} from './components/kec-products/kec-products.component';

const KEC_MAIN_ROUTES = [
    {
        path: 'products/:productName',
        component: KecProductsComponent,
    },
    {
        path: '**',
        component: KecPageNotFoundComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NavigationFrameworkComponent,
        KecToolbarComponent,
        KecMainSidenavContentComponent,
        KecMainSidenavComponent,
        KecPageNotFoundComponent,
        KecProductsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(KEC_MAIN_ROUTES),
        FlexLayoutModule,
        CustomAngularMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
