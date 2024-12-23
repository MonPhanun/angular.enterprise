import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { SampleUiPageComponent } from '../components/sampleuipage/sampleuipage.component';
const sampleUiRoute = [
    {
        path: 'home', component: AppComponent
    },
    { path: 'sampleuipage', component: SampleUiPageComponent },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    { path: '**', redirectTo: '/404' }
];
let SampleUiRoute = class SampleUiRoute {
};
SampleUiRoute = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(sampleUiRoute, { useHash: true })],
        exports: [RouterModule]
    })
], SampleUiRoute);
export { SampleUiRoute };
//# sourceMappingURL=route.js.map