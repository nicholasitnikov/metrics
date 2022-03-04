import { useDispatch, useSelector } from 'react-redux';

import { getPoints } from '../services/actions/points';

const Test = () => {

    const {pointsRequest, points} = useSelector(state => state.points)

    const dispatch = useDispatch();

    const updateStore = () => {
        dispatch(getPoints())
    }

    return(
    <>
        <button onClick={updateStore}>
            Click me
        </button>
        <h1>{pointsRequest + ''}</h1>
        {points.length > 0 && <h2>{points.length}</h2>}
    </>
    )
}

export default Test;