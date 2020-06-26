/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
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
            const $resizer = $(event.target);
            // const $parent = $resizer.$el.parentNode; // bad!
            // const $parent = $resizer.$el.closest('.table__column'); // better, but still not good
            const $parent = $resizer.closest('[data-type="resizable"]'); // Good.
            const $coord = $parent.getCoords();

            document.onmousemove = (e) => {
                const delta = e.pageX - $coord.right;
                const value = $coord.width + delta;

                $parent.$el.style.width = `${value}px`;
            };

            document.onmouseup = () => {
                document.onmousemove = null;
            };
        }
    }
}