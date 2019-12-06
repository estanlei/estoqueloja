import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  tipo:  number;
  header:  string;
  mensage:  string;
}

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html'
})
export class DialogViewComponent implements OnInit {
 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
   

  onNoClick(): void {
    this.dialogRef.close();
  }
}
