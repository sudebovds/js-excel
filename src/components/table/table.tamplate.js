/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
const CHAR_CODES = {
    A: 65,
    Z: 90
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

function getWidth(state, index){
    return `${state[index] || DEFAULT_WIDTH}px`;
}

function getHeight(state, index){
    return `${state[index] || DEFAULT_HEIGHT}px`;
}

const ABC_LENGTH = CHAR_CODES.Z - CHAR_CODES.A;

function createCell(state, row){
    return function (_, col) {
        const id = `${row}:${col}`;
        const width = getWidth(state.colState, col);
        const data = state.dataState[id];

        return `
            <div 
                class="table__cell"  
                contenteditable 
                spellcheck 
                data-col="${col}"
                data-type="cell"
                data-id="${id}"
                style="width: ${width}"
            >${data || ''}</div> 
        `;
    };
}

 function createCol({ col, index, width }){
    return `
        <div 
            class="table__column" 
            data-type="resizable" 
            data-col="${index}" 
            style="width: ${width}"
        >
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
} 

function createRow(index, content, state){
    const height = getHeight(state, index);
    const resize = index 
            ? `<div 
                    class="row-resize" 
                    data-resize='row'
                    >
                    </div>`
            : '';

    return `
        <div class="table__row" data-type="resizable" data-row="${index}" style="height: ${height}">
            <div class="table__row_info" >
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

function withWidthFrom(state){
    return function (col, index){
        return {
            col, index, width: getWidth(state, index)
        };
    };
}

export function createTable(rowsCount = 15, state = {}){
    console.log(state);

    const rows = [];

    const cols = new Array(ABC_LENGTH + 1)
        .fill('')
        .map(toChar)
        .map(withWidthFrom(state.colState))
        .map(createCol)
        .join('');

    rows.push(createRow(null, cols, {}));

    for (let row = 0; row < rowsCount; row++){
        const cells = new Array(ABC_LENGTH + 1)
        .fill('')
        .map(createCell(state, row))
        .join('');

        rows.push(createRow(row + 1, cells, state.rowState));
    }

    return `${rows.join('')}`;
}