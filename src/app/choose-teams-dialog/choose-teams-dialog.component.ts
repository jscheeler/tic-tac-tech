import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatListOption } from '@angular/material';

@Component({
  selector: 'app-choose-teams-dialog',
  templateUrl: './choose-teams-dialog.component.html',
  styleUrls: ['./choose-teams-dialog.component.scss']
})
export class ChooseTeamsDialogComponent {
  @ViewChild(MatSelectionList) teamList: MatSelectionList;
  selection: number[];

  constructor(
    public dialogRef: MatDialogRef<ChooseTeamsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  updateSelected($event) {
    this.selection = [];
    this.teamList.selectedOptions.selected.forEach((item) => {
      this.selection.push(item.value);
    });
  }





}
