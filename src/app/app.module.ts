import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationService } from './navigation/navigation.service';
import { NavigationModule } from './navigation/navigation.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderInterceptor } from './http/http-header.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageComponent,
    PageNotFoundComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
