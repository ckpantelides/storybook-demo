import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { HubPageComponent } from './hub-page/hub-page.component';
import { StripeService } from './stripe/stripe.service';

// RadListView
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

// Two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// HTTP wrapper
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { StorypageComponent } from './storypage/storypage.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';

import { SuperheroMain1Component } from './superhero/superhero-main1/superhero-main1.component';
import { SuperheroAlt1Component } from './superhero/superhero-alt1/superhero-alt1.component';
import { SuperheroQ1Component } from './superhero/superhero-q1/superhero-q1.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIListViewModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
  ],
  declarations: [
    AppComponent,
    HubPageComponent,
    SuperheroMain1Component,
    SuperheroQ1Component,
    StorypageComponent,
    SuperheroAlt1Component,
    QuestionpageComponent,
  ],
  providers: [StripeService],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
