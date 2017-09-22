import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import './rxjs-extensions';

import { CachingInterceptor } from './http/http-cache.interceptor';
import { HeaderInterceptor } from './http/http-header.interceptor';

import { AppComponent } from './app.component';
import { XcComponentsModule } from './xc-components/xc-components.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationService } from './navigation/navigation.service';
import { NavigationModule } from './navigation/navigation.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesService } from './games/games.service';
import { GamesModule } from './games/games.module';
import { HttpCacheService } from './http/http-cache.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    XcComponentsModule,
    BrowserAnimationsModule,
    NavigationModule,
    GamesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent
  ],
  providers: [
    HttpCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    },
    NavigationService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
