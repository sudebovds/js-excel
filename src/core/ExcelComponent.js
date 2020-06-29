import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener{

    // eslint-disable-next-line no-unused-vars
    constructor($root, options = {}){
        super($root, options.listeners);

        this.name = options.name || '';

        this.prepare();
    }

    prepare(){}

    // return HTML template
    
    toHtml(){
        return '';
    }

    // add listeners after page render

    init(){
        this.initDOMListeners();
    }

    // remove listeners

    destroy(){
        this.removeDOMListeners();
    }
}