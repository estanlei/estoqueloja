import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html'
})
export class DialogViewComponent implements OnInit {
 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
