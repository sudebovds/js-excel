/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */

import { range } from '@core/util';

export function shouldResize(event){
    return event.target.dataset.resize;
}

export function isCell(event){
    return event.target.dataset.type === 'cell';
}

export function matrix(target, current){
    const cols = range(current.col, target.col);
    const rows = range(current.row, target.row);

    return cols.reduce((acc, col) => {
        rows.forEach((row) => acc.push(`${row}:${col}`));

        return acc;
    }, []);
}

export function nextSelector(key, { col, row }){
    const MIN_VALUE = 0;

    switch (key){
        case 'Enter': 
        case 'ArrowDown':
            row++;
            break;
        case 'Tab':
        case 'ArrowRight':
            col++;
            break;

        case 'ArrowLeft': 
            col - 1 < MIN_VALUE ? MIN_VALUE : col--; 
            break;
        case 'ArrowUp': 
            row - 1 < MIN_VALUE ? MIN_VALUE : row--;
            break; 

        default: break;
    }

    return `[data-id="${row}:${col}"]`;
}