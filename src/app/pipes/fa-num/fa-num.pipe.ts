import { PersianNumberService } from './persian-number/persian-number.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'faNum' })
export class FaNumPipe implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) { }

  transform(value: string | number | any): string {
    value = String(value);
    return this.persianNumberService.toPersian(value);
  }
}

