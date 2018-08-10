import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EvencalculatorComponent } from './evencalculator/evencalculator.component';
import { BaseInterceptor } from './base.intercept';

@NgModule({
  declarations: [
    AppComponent,
    EvencalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
