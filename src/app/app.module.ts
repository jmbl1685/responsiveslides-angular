import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsiveSlideComponent } from './components/responsive-slide/responsive-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveSlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
