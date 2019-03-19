import { combineReducers } from 'redux';

import { OverlayReducer } from '../ducks/ui/overlays';

export const rootReducer =
    combineReducers({

        //PUT REDUCERS HERE

        overlays: OverlayReducer,
    })

export default rootReducer