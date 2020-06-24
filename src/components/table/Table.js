/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.tamplate';

export class Table extends ExcelComponent{
    static className = 'excel__table';

    toHtml(){
        return ` 
        ${createTable(34)}
        `;
    }
}