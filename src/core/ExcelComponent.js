import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener{

    // eslint-disable-next-line no-unused-vars
    constructor($root, options = {}){
        super($root, options.listeners);

        this.name = options.name || '';
        this.emmiter = options.emmiter;
        this.store = options.store;
        this.unsubscribers = [];
        this.storeSub = null;

        this.prepare();
    }

    prepare(){}

    // return HTML template
    
    toHtml(){
        return '';
    }

    // fasad pattern realisation

    $emit(event, ...args){
        this.emmiter.trigger(event, ...args);
    }

    // Subscribe to current event

    $on(event, callback){
        const unsub = this.emmiter.subscribe(event, callback);

        this.unsubscribers.push(unsub);
    }

    // work with store

    $dispatch(action){
        this.store.dispatch(action);
            
    }

    $subscribe(fn){
        this.storeSub = this.store.subscribe(fn);
    }

    // add listeners after page render

    init(){
        this.initDOMListeners();
    }

    // remove listeners

    destroy(){
        this.removeDOMListeners();

        this.unsubscribers.forEach(unsub => unsub());

        this.storeSub.unsubscribe();
    }
}