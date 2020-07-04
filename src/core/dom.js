/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

class Dom{
    constructor(selector){
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html){
        if (typeof html === 'string'){
            this.$el.innerHTML = html;

            return this;
        }

        return this.$el.outerHTML.trim();
    }

    text(text){
        this.$el.textContent = text;
    }

    clear(){
        this.html('');

        return this;
    }

    on(eventType, callback){
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback){
        this.$el.removeEventListener(eventType, callback);
    }

    focus(){
        this.$el.focus();

        return this;
    }

    append(node){
        if (node instanceof Dom){
            node = node.$el;
        }

        if (Element.prototype.append){
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    closest(selector){
        // eslint-disable-next-line no-use-before-define
        return $(this.$el.closest(selector));
    }

    getCoords(){
        return this.$el.getBoundingClientRect();
    }

    get data(){
        return this.$el.dataset;
    }

    find(selector){
        return $(this.$el.querySelector(selector));
    }

    findAll(selector){
        return this.$el.querySelectorAll(selector);
    }

    id(parse){
        if (parse){
            // eslint-disable-next-line no-unused-vars
            const parsed = this.id().split(':');
       
            return {
                row: +parsed[0],
                col: +parsed[1]
            };  
        }
        return this.data.id;
    }

    css(param = {}){
        Object
            .keys(param)
            .forEach(key => {
                this.$el.style[key] = param[key];
            });
    }

    addClass(className){
        this.$el.classList.add(className);
    }

    removeClass(className){
        this.$el.classList.remove(className);
    }
}

export function $(selector){
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes){
        el.classList.add(classes);
    }

    return $(el);
};