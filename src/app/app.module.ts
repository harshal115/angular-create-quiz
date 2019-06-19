import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  MatSidenavModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule,
  MatDividerModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatTabsModule,
  MatProgressSpinnerModule, MatRadioModule, MatMenuModule, MatDialogModule, MatSelectModule
} from '@angular/material/';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
        MatSelectModule
,
    MatMenuModule, ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
