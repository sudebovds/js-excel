/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent{
    static className = 'excel__formula';

    constructor($root, options){
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
            ...options
        });
    }

    toHtml(){
        return `
            <div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>
        `;
    }

    onInput(event){
        console.log(this.$root, 'Formula: onInput', event.target.textContent.trim());
    }

    onClick(){}
}