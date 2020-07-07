/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable brace-style */
/* eslint-disable no-return-assign */
/* eslint-disable quotes */

import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { createTable } from './table.tamplate';
import { resizeHandler } from './table.resize';
import { 
        shouldResize, 
        isCell, 
        matrix, 
        nextSelector 
    } from './table.functions';
import { TableSelection } from './TableSelection';

export class Table extends ExcelComponent{
    static className = 'excel__table';

    constructor($root, options){
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
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

        this.selectCell(this.$root.find('[data-id="0:0"]'));

        this.$on('formula:input', text => {
            this.selection.current.text(text);
        }); 

        this.$on('formula:done', () => {
            this.selection.current.focus();
        });

        this.$subscribe(state => {
            console.log('Table state:', state);
        });
    } 

    selectCell($cell){
        this.selection.select($cell);
        this.$emit('table:select', $cell);
    }

    onMousedown(event){
        if (shouldResize(event)){
            resizeHandler(this.$root, event);
        } else if (isCell(event)){
            const $target = $(event.target);
            
            if (event.shiftKey){
                const target = $target.id(true);
                const current = this.selection.current.id(true);

                const $cells = matrix(target, current)
                    .map(id => this.$root.find(`[data-id="${id}"]`));

                this.selection.selectGroup($cells);
            }
            else {
                this.selectCell($target);
            }
        }
    }

    onKeydown(event){
        const keys = [
                'Enter', 
                'Tab', 
                'ArrowRight', 
                'ArrowLeft', 
                'ArrowUp', 
                'ArrowDown'
            ];

        const pushedKey = event.key;

        if (keys.includes(pushedKey) && !event.shiftKey){
            event.preventDefault();

            const id = this.selection.current.id(true);
            const $next = this.$root.find(nextSelector(pushedKey, id));

            this.selectCell($next);
        }
    }

    onInput(event){
        this.$emit('table:input', $(event.target));
    }
}