/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.tamplate';

export class Table extends ExcelComponent{
    static className = 'excel__table';

    constructor($root){
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHtml(){
        return ` 
            ${createTable(34)}
        `;
    }

    onMousedown(event){
        if (event.target.dataset.resize){
            console.log('Start resizing ', event.target.dataset.resize);
        }
    }
}