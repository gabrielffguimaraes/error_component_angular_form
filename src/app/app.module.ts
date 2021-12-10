import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DebuggerComponent } from './debugger/debugger.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DebuggerComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
