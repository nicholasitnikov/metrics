import { combineReducers } from "redux";
import { pointsReducer } from "./points";
import { SET_CURRENT_ID, SET_DAY } from "../actions";

import { ANIMATION_PLAYING, ANIMATION_STOP, HEATMAP_LAYER_TOGGLE } from "../actions";

const animationReducer = (state = { animationPlaying: false }, action) => {
    switch(action.type) {
        case ANIMATION_PLAYING: {
            return {
                ...state,
                animationPlaying: true
            }
        }
        case ANIMATION_STOP: {
            return {
                ...state,
                animationPlaying: false
            }
        }
        default: {
            return state
        }
    }
}

const mapReducer = (state = { heatmapLayer: false, day: 1 }, action) => {
    switch(action.type) {
        case HEATMAP_LAYER_TOGGLE: {
            return {
                ...state,
                heatmapLayer: action.on
            }
        }
        case SET_DAY: {
            return {
                ...state,
                day: action.day
            }
        }
        case SET_CURRENT_ID: {
            return {
                ...state,
                id: action.id
            }
        }
        default: {
            return state
        }
    }
}

export const rootReducer = combineReducers({
    points: pointsReducer,
    animation: animationReducer,
    map: mapReducer
})