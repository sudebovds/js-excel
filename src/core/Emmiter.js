export class Emmiter{
    constructor(){
        this.listeners = {};
    }

    trigger(eventName, ...args){
        if (!Array.isArray(this.listeners[eventName])){
            return false;
        }

        this.listeners[eventName].forEach(listener => {
            listener(...args);
        });

        return true;
    }

    subscribe(eventName, callback){
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(callback);

        // unsubscribe for avoiding memory leak

        return () => {
            this.listeners[eventName] = this.listeners[eventName]
                .filter(listener => listener !== callback);
        };
    }
}