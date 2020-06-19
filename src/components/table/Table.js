/* eslint-disable quotes */
import { ExcelComponent } from '@core/ExcelComponent';

export class Table extends ExcelComponent{
    static className = 'excel__table';

    toHtml(){
        return `

            <div class="table__row">
                <div class="table__row_info">
                    
                </div>
                <div class="table__row_data">
                    <div class="table__column">
                        A
                    </div>
                    <div class="table__column">
                        B
                    </div>
                    <div class="table__column">
                        C
                    </div>
                </div>
            </div>

            <div class="table__row">
                <div class="table__row_info">
                    1
                </div>
                <div class="table__row_data">
                    <div class="table__cell" contenteditable spellcheck>A1</div>
                    <div class="table__cell" contenteditable spellcheck>B1</div>
                    <div class="table__cell" contenteditable spellcheck>C1</div>
                </div>
            </div>      
            
            <div class="table__row">
                <div class="table__row_info">
                    2
                </div>
                <div class="table__row_data">
                    <div class="table__cell" contenteditable spellcheck>A2</div>
                    <div class="table__cell" contenteditable spellcheck>B2</div>
                    <div class="table__cell" contenteditable spellcheck>C2</div>
                </div>
            </div>               
        `;
    }
}