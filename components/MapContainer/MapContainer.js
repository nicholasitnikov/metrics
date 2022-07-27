import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
import CONSTANTS from "../../utils/constants.js";

import styles from './MapContainer.module.css';
import { SET_CURRENT_ID, SET_DAY } from '../../services/actions/index.js';

const MapContainer = (props) => {

  const { day } = useSelector(store => store.map);
  const dispatch = useDispatch();

  const [viewport, setViewport] = useState(CONSTANTS.INITIAL_VIEWPORT);

  const mapRef = useRef();
  
  const hoverHandler = (e) => {
    dispatch({ type: SET_CURRENT_ID, id: e.features[0].properties.id });
  }

  return (
    <section className={styles.wrapper}>
        <MapGL onClick={hoverHandler} {...viewport} {...CONSTANTS.MAP_CONFIG} onViewportChange={setViewport} ref={mapRef}>
            <Source {...CONSTANTS.COVID_SOURCE}>
              <Layer {...CONSTANTS.COVID_LAYER} paint={{
                'circle-opacity': .8,
                "circle-radius": [
                  'case',
                    ['==', ['get', `COLOR_${day}`], 'red'],
                    15,
                    ['==', ['get', `COLOR_${day}`], 'yellow'],
                    10,
                    ['==', ['get', `COLOR_${day}`], 'red'],
                    12,
                    5
                ],
                "circle-color": ['get', `COLOR_${day}`]
              }} />
            </Source>
        </MapGL>
    </section>
  );
}

export default MapContainer;