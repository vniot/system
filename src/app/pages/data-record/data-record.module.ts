import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataRecordComponent } from './data-record.component';

@NgModule({
  declarations: [
    DataRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataRecordComponent
      }
    ])
  ]
})
export class DataRecordModule { } 