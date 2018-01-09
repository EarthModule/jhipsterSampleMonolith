import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSampleMonolithSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleMonolithAppRoutingModule} from './app-routing.module';
import { JhipsterSampleMonolithHomeModule } from './home/home.module';
import { JhipsterSampleMonolithAdminModule } from './admin/admin.module';
import { JhipsterSampleMonolithAccountModule } from './account/account.module';
import { JhipsterSampleMonolithEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleMonolithAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleMonolithSharedModule,
        JhipsterSampleMonolithHomeModule,
        JhipsterSampleMonolithAdminModule,
        JhipsterSampleMonolithAccountModule,
        JhipsterSampleMonolithEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleMonolithAppModule {}
