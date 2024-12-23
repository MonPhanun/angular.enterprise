
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { SampleUiPageComponent } from '../components/sampleuipage/sampleuipage.component';
import { EventComponent } from '../components/event/event.component';


const sampleUiRoute: Routes = [
  {
    path: 'home', component: AppComponent
  },
  {
    path: 'sampleuipage', component: SampleUiPageComponent
  },
  {
    path: 'event', component: EventComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', redirectTo: '/404' }];

@NgModule({
  imports: [RouterModule.forRoot(sampleUiRoute, { useHash: true })],
  exports: [RouterModule]
})

export class SampleUiRoute {

}

