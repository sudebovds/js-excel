/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';

export class Formula extends ExcelComponent{
    static className = 'excel__formula';

    constructor($root, options){
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        });
    }

    toHtml(){
        return `
            <div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false" data-select="formula"></div>
        `;
    }

    init(){
        super.init();

        this.$formula = this.$root.find('[data-select="formula"]');

        this.$on('table:select', $cell => {
            this.$formula.text($cell.text());
        });

        this.$on('table:input', $cell => {
            this.$formula.text($cell.text());
        });
    }

    onInput(event){ 
       this.$emit('formula:input', $(event.target).text());
    }

    onKeydown(event){
        const keys = ['Enter', 'Tab'];

        if (keys.includes(event.key)){
            event.preventDefault();

            this.$emit('formula:done');
        }
    }
}