export class TableSelection{
    static className = 'selected';

    constructor(){
        this.group = [];
        this.current = null;
    }

    select($el){
        this.cellClear();
        this.group.push($el);
        this.current = $el;

        $el
            .focus()
            .addClass(TableSelection.className);
    }

    selectGroup($group = []){
        this.cellClear();
        this.group = $group;

        this.group.forEach(el => el.addClass(TableSelection.className));
    }

    cellClear(){
        this.group.forEach($c => $c.removeClass(TableSelection.className));
        this.group = [];
    }
}