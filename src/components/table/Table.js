/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';

export class Table extends ExcelComponent{
    toHtml(){
        return `<h1>Table</h1>`;
    }
}