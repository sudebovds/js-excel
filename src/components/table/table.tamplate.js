/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
const CHAR_CODES = {
    A: 65,
    Z: 90
};

const ABC_LENGTH = CHAR_CODES.Z - CHAR_CODES.A;

function createCell(row){
    return function (content, col) {
        return `
            <div 
                class="table__cell"  
                contenteditable 
                spellcheck 
                data-col="${col}"
                data-id="${row}:${col}"
            >${content}</div> 
        `;
    };
}

 function createCol(col, index){
    return `
        <div class="table__column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
} 

function createRow(index, content){
    const resize = index 
            ? `<div class="row-resize" data-resize='row'></div>`
            : '';

    return `
        <div class="table__row" data-type="resizable">
            <div class="table__row_info">
                ${index != null ? index : ' '}
                ${resize}
            </div>
            <div class="table__row_data">
                ${content}
            </div>
        </div>
    `;
} 

function toChar(_, index){
    return String.fromCharCode(CHAR_CODES.A + index);
}

export function createTable(rowsCount = 15){
    const rows = [];

    const cols = new Array(ABC_LENGTH + 1)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('');

    rows.push(createRow(null, cols));

    for (let row = 0; row < rowsCount; row++){
        const cells = new Array(ABC_LENGTH + 1)
        .fill('')
        .map(createCell(row))
        .join('');

        rows.push(createRow(row + 1, cells));
    }

    return `${rows.join('')}`;
}