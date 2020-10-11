import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  data: any;
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }

  ngOnInit(): void {}
}
