import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeComponent } from './fake/fake.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    AddrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
