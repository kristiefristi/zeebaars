import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FormsModule } from '@angular/forms';
import { FISH_DATA } from './models/fish_data';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [FISH_DATA],
  bootstrap: [AppComponent]
})
export class AppModule { }
