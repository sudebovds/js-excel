/* eslint-disable quotes */
// eslint-disable-next-line dot-notation

import { capitalize } from '@core/util';

function getMethodName(methodName){
    return `on${capitalize(methodName)}`;
}

export class DomListener{
    constructor($root, listeners = []){
        if (!$root){
            throw new Error(`No $root provided for DOMListener!`);
        }

        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners(){
        this.listeners.forEach(listener => {

            const method = getMethodName(listener);
            
            if (!this[method]){
                const curName = this.name || '';

                throw new Error(`Method ${method} is not implemented in ${curName} Component!`);
            }

            // This same that the addEventListener, but realised in our Dom library

            this.$root.on(listener, this[method].bind(this));
        });
    }

    removeDOMListeners(){}
}