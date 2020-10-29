import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserPageModule } from './modules/user-page/user-page.module';
import { AppRoutingModule } from './app-routing.module';
import { FeedPageModule } from './modules/feed-page/feed-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPageModule,
    FeedPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
