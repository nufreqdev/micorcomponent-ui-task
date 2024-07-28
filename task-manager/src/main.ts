import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, CommonModule, FormsModule, RouterModule.forRoot([]))
  ]
}).catch(err => console.error(err));
