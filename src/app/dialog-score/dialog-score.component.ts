import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.scss'],
})
export class DialogScoreComponent implements OnInit {
  score: number | undefined;
  constructor(protected dialogRef: NbDialogRef<DialogScoreComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
