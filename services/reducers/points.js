import { 
    POINTS_GET_REQUEST, 
    POINTS_GET_REQUEST_DATA, 
    POINTS_GET_REQUEST_FAILED, 
    ADD_FILTER,
    REMOVE_FILTER
} from '../actions/points';

const initialState = {
    pointsRequest: false,
    pointsRequestFailed: false,
    points: [],
    filters: {},
    filteredPoints: []
}

export const pointsReducer = (state = initialState, action) => {
    switch(action.type) {
        case POINTS_GET_REQUEST: {
            return {
                ...state,
                pointsRequest: true
            }
        }
        case POINTS_GET_REQUEST_DATA: {
            return {
                ...state,
                pointsRequest: false,
                pointsRequestFailed: false,
                points: action.data
            }
        }
        case POINTS_GET_REQUEST_FAILED: {
            return {
                ...state,
                pointsRequest: false,
                pointsRequestFailed: true
            }
        }
        case ADD_FILTER: {
            return {
                ...state,
                filteredPoints: [...state.points].filter((point, index) => {
                    let currentFilters = {...state.filters, [action.key]: action.value};
                    return(
                        (typeof currentFilters.SEX !== 'undefined' ? currentFilters.SEX === point.SEX : true) &&
                        (typeof currentFilters.DATE !== 'undefined' ? currentFilters.DATE >= point.DAY : true)
                    )
                }),
                filters: {...state.filters, [action.key]: action.value }
            }
        }
        case REMOVE_FILTER: {
            return {
                ...state,
                filters: {...state.filters, [action.key]: undefined},
                filteredPoints: [...state.points].filter(point => {
                    let currentFilters = {...state.filters, [action.key]: undefined};
                    return(
                        (typeof currentFilters.SEX !== 'undefined' ? currentFilters.SEX === point.SEX : true) &&
                        (typeof currentFilters.DATE !== 'undefined' ? currentFilters.DATE > point.DAY : true)
                    )
                }),
            }
        }
        default: 
            return state;
    }
}