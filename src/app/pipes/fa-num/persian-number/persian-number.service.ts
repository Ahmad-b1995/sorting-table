import { Injectable } from '@angular/core';
import {PersianService} from './persian-service';
import {InvalidServiceInputError} from './InvalidServiceInput.error';

@Injectable({
  providedIn: 'root'
})
export class PersianNumberService implements PersianService {
  static persianNumberPattern = '\u06F0-\u06F9';
  private static persianNumbersTable = ['\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9'];
  private static englishNumbersTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  containsPersian(value: string): boolean {
    if (!value) { return false; }
    // language=JSRegexp
    const persianRegex = new RegExp(`[${PersianNumberService.persianNumberPattern}]`);
    return persianRegex.test(value);
  }


  private static _getMatchedPatternLength(value: string): number {
    // language=JSRegexp
    const matchResult = value.match(new RegExp(`[${PersianNumberService.persianNumberPattern}]`, 'g'));
    return matchResult ? matchResult.length : 0;
  }


  isPersian(value: string): boolean {
    if (!value) {return false; }
    return value.length === PersianNumberService._getMatchedPatternLength(value);
  }


  arabicToPersian(value: string): string {
    return value.replace(/٤/g, PersianNumberService.persianNumbersTable[4])
                .replace(/٥/g, PersianNumberService.persianNumbersTable[5])
                .replace(/٦/g, PersianNumberService.persianNumbersTable[6]);
  }


  toPersian(value: string | number): string {
    if (value === undefined || value === null) {throw new InvalidServiceInputError(); }
    value = value.toString();
    value = this.arabicToPersian(value);
    let regex: RegExp;
    for (let i = 0; i < PersianNumberService.persianNumbersTable.length; i++) {
      // language=JSRegexp
      regex = new RegExp(`[${PersianNumberService.englishNumbersTable[i]}]`, 'g');
      value = value.replace(regex, PersianNumberService.persianNumbersTable[i]);
    }
    return value;
  }


  toEnglish(value: string): string {
    if (value === undefined || value === null) { throw new InvalidServiceInputError(); }
    let regex: RegExp;
    for (let i = 0; i < PersianNumberService.englishNumbersTable.length; i++) {
      // language=JSRegexp
      regex = new RegExp(`[${PersianNumberService.persianNumbersTable[i]}]`, 'g');
      value = value.replace(regex, PersianNumberService.englishNumbersTable[i]);
    }
    return value;
  }
}
