/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent{
    static className = 'excel__toolbar';

    constructor($root){
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        });
    }

    toHtml(){
        return `
            <div class="excel__toolbar_battons">
                <div class="toolbar__button">
                    <i class="fas fa-bold"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-italic"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-underline"></i>
                </div>                        
                <div class="toolbar__button">
                    <i class="fas fa-remove-format"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-align-justify"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-align-left"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-align-right"></i>
                </div>
                <div class="toolbar__button">
                    <i class="fas fa-align-center"></i>
                </div>
            </div>         
        `;
    }

    onClick(event){
        console.log(this.$root, 'Toolbar: onClick', event.target);
    }
}