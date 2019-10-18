
import { NgModule } from '@angular/core';
import { MatDatepickerModule, NativeDateModule, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material';

export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    } else {
      return date.toDateString();
    }
  }
}


@NgModule({
  declarations: [],
  imports: [],
  exports: [DatePickerModule, NativeDateModule],
  providers: [
    {
      provide: NativeDateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: 'pt-BR'
    }
  ]
})

export class DatePickerModule {}