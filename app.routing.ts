import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HubPageComponent } from './hub-page/hub-page.component';

import { SuperheroMain1Component } from './superhero/superhero-main1/superhero-main1.component';
import { SuperheroAlt1Component } from './superhero/superhero-alt1/superhero-alt1.component';
import { SuperheroQ1Component } from './superhero/superhero-q1/superhero-q1.component';

import { BookshopComponent } from './bookshop/bookshop.component';
import { Settings1Component } from './settings/settings1/settings1.component';
import { Settings2Component } from './settings/settings2/settings2.component';

const routes: Routes = [
  { path: '', redirectTo: '/hub', pathMatch: 'full' },
  { path: 'hub', component: HubPageComponent },
  { path: 'superhero-main1', component: SuperheroMain1Component },
  { path: 'superhero-alt1', component: SuperheroAlt1Component },
  { path: 'superhero-q1', component: SuperheroQ1Component },
  { path: 'bookshop', component: BookshopComponent },
  { path: 'settings1', component: Settings1Component },
  { path: 'settings2', component: Settings2Component },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
