/* eslint-disable brace-style */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */

import { $ } from '@core/dom';

export function resizeHandler($root, event){
    const $resizer = $(event.target); 
    const $parent = $resizer.closest('[data-type="resizable"]'); // Good.
    const $coord = $parent.getCoords();
    const $column = $root.findAll(`[data-col="${$parent.data.col}"]`);
    const type = $resizer.data.resize;
    let value;
    const sideProb = type === 'col' ? 'bottom' : 'right';

    $resizer.css({
        opacity: 1,
        [sideProb]: '-5000px'
    });

    document.onmousemove = (e) => {
        const delta = e.pageX - $coord.right;
        value = $coord.width + delta;

        if (type === 'col'){

            $resizer.css({ right: `${-delta}px` });
        }
        else {
            const height_delta = e.pageY - $coord.bottom;
            value = $coord.height + height_delta;

            $resizer.css({ bottom: `${-delta}px` });
        }
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (type === 'col'){
            $parent.css({ width: `${value}px` });

            // eslint-disable-next-line no-param-reassign
            $column.forEach(el => el.style.width = `${value}px`);  
        } else {
            $parent.css({ height: `${value}px` });
        }              

        $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
        });
    };
}