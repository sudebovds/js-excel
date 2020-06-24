/* eslint-disable no-plusplus */
const CHAR_CODES = {
    A: 65,
    Z: 90
};

const ABC_LENGTH = CHAR_CODES.Z - CHAR_CODES.A;

function createCell(content) {
    return `
        <div class="table__cell" contenteditable spellcheck>${content}</div> 
    `;
} 

 function createCol(col){
    return `
        <div class="table__column">
            ${col}
        </div>
    `;
} 

function createRow(index, content){
    return `
        <div class="table__row">
            <div class="table__row_info">
                ${index != null ? index : ' '}
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

    for (let i = 0; i < rowsCount; i++){
        const cells = new Array(ABC_LENGTH + 1)
        .fill('')
        .map(createCell)
        .join('');

        rows.push(createRow(i + 1, cells));
    }

    return `${rows.join('')}`;
}