import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes : Routes = [
  {path: '', component : HomeComponent},
  {path: 'about', component : AboutComponent},
  {path: 'news', component : NewsComponent},
  {path: 'price', component : PriceComponent},
  {path: '**', component : NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
