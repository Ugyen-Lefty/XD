import { FlexLayoutModule } from '@angular/flex-layout';
import { SanitizeHtmlPipe } from './sanitize';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { MemesComponent } from './memes/memes.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    MemesComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    SwiperModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
