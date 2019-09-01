import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StalexComponentComponent } from './stalex-component/stalex-component.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    StalexComponentComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
