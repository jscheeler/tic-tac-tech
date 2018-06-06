import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-teams-dialog',
  templateUrl: './add-teams-dialog.component.html',
  styleUrls: ['./add-teams-dialog.component.scss']
})
export class AddTeamsDialogComponent {
  teams1: string;
  teams2: string;
  teams3: string;
  teams4: string;

  constructor(
    public dialogRef: MatDialogRef<AddTeamsDialogComponent>
  ) {  }

  createPlaceholder(i) {
    return `Team ${i + 1}`;
  }

  combinedAndClose() {
    this.dialogRef.close([this.teams1, this.teams2, this.teams3, this.teams4]);
  }


}
