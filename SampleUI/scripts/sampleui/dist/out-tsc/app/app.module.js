import { __decorate } from "tslib";
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleUiPageComponent } from '../components/sampleuipage/sampleuipage.component';
import { SampleUiRoute } from '../route/route';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent, SampleUiPageComponent
        ],
        imports: [
            BrowserModule, SampleUiRoute, RouterModule, FormsModule, HttpClientModule, NgxMaskDirective, NgxMaskPipe
        ],
        providers: [
            {
                provide: APP_BASE_HREF, useValue: '/'
            }, provideNgxMask(),
            {
                provide: APOLLO_OPTIONS,
                useFactory(httpLink) {
                    return {
                        cache: new InMemoryCache(),
                        link: httpLink.create({
                            uri: 'https://localhost:7055/graphql',
                        }),
                    };
                },
                deps: [HttpLink],
            },
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map