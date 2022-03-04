
export const POINTS_GET_REQUEST = 'POINTS_GET_REQUEST';
export const POINTS_GET_REQUEST_DATA = 'POINTS_GET_REQUEST_DATA';
export const POINTS_GET_REQUEST_FAILED = 'POINTS_GET_REQUEST_FAILED';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const getPoints = () => dispatch => {
    dispatch({ type: POINTS_GET_REQUEST });
    fetch('/api/points/get').then(res => {
        if(res.ok) { return res.json() }
        dispatch({ type: POINTS_GET_REQUEST_FAILED });
    }).then(res => {
        dispatch({ 
            type: POINTS_GET_REQUEST_DATA,
            data: res.data
        });
    })
}