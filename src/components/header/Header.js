/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';

export class Header extends ExcelComponent{
    static className = 'excel__header';

    constructor($root, options){
        super($root, {
            name: 'Header',
            ...options
        });
    }

    toHtml(){
        return `
            <input type="text" class="excel__header_input" value="New Table">

            <div class="excel__header_buttons dfl jcb">
                <div class="header__button b-delete">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div class="header__button b-quit">
                    <i class="fas fa-sign-out-alt"></i>
                </div>                        
            </div>        
        `;
    }
}