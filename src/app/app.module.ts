import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AddTeamsDialogComponent } from './add-teams-dialog/add-teams-dialog.component';
import { FormsModule } from '@angular/forms';
import { ChooseTeamsDialogComponent } from './choose-teams-dialog/choose-teams-dialog.component';
import { SecretSquareDialogComponent } from './secret-square-dialog/secret-square-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamsDialogComponent,
    ChooseTeamsDialogComponent,
    SecretSquareDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [AddTeamsDialogComponent, ChooseTeamsDialogComponent, SecretSquareDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
