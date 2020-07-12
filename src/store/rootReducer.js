/* eslint-disable no-case-declarations */

import { TABLE_RESIZE } from './types';

/* eslint-disable no-unused-vars */
export function rootReducer(state, action){
    switch (action.type){
        case TABLE_RESIZE:
            const prevState = state.colState || {};
            prevState[action.data.id] = action.data.value;
            return { ...state, colState: prevState };

        default: return state; 
    }
}