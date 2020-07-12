import { Header } from '@/components/header/Header';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { Formula } from '@/components/formula/Formula';
import { Excel } from '@/components/excel/Excel';
import { Table } from '@/components/table/Table';
import './scss/index.scss';
import { storage } from '@core/util';
import { createStore } from '@core/createStore';
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, storage('excel-state'));

store.subscribe(state => {
    console.log('Application state: ', state);
    storage('excel-state', state);
});

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
});

excel.render();