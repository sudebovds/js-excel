import { Header } from '@/components/header/Header';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { Formula } from '@/components/formula/Formula';
import { Excel } from '@/components/excel/Excel';
import { Table } from '@/components/table/Table';
import './scss/index.scss';
import { createStore } from '@core/createStore';
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, {
    tableTitle: 'My table Excel'
});

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
});

excel.render();