import { action, ActionType } from 'typesafe-actions'

import { IDictionary } from "../../../typings";

export interface IOverlayState extends IDictionary<boolean> {}

export enum OverlayActions {
    toggle = 'TOGGLE_OVERLAY'
}

export const overlayActions = {
    toggle: (name: string, value?: boolean) => action(OverlayActions.toggle, { name, value })
};

const initialState = { hamburger: false };

export const OverlayReducer = (state: IOverlayState = initialState, action: ActionType<typeof overlayActions>): IOverlayState => {
    const {type, payload} = action;
    const {name, value} = !!payload && payload;
    
    switch (type) {
        case OverlayActions.toggle:
            return {
                ...state,
                [name]: typeof value !== undefined ? !state[name] : value
            }
        default:
            return state
    }
}