/* eslint-disable camelcase */
/* eslint-disable brace-style */
/* eslint-disable no-return-assign */
/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.tamplate';
import { resizeHandler } from './table.resize';
import { shouldResize } from './table.functions';
import { TableSelection } from './TableSelection';
 
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
    
    prepare(){
        this.selection = new TableSelection();
    }

    init(){
        super.init();

        const $cell = this.$root.find("[data-id = '0:0']");

        this.selection.select($cell);
    }

    onMousedown(event){
        if (shouldResize(event)){
            resizeHandler(this.$root, event);
        }
    }
}
