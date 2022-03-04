import Settings from '../components/Settings/Settings';
import MapContainer from '../components/MapContainer/MapContainer';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import Statboard from '../components/Statboard/Statboard';
import Statgraph from '../components/Statgraph/Statgraph';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPoints } from '../services/actions/points';
import Districts from '../components/Districts/Districts';
import RT from '../components/RT/RT';
import Pace from '../components/Pace/Pace';
import { ADD_FILTER } from '../services/actions/points';
import Faci from '../components/Faci/Faci';


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPoints())
  }, [])

  return (
    <>
      <MapContainer />
      <ControlPanel>
        <Settings />
        {/* <Statboard />
        <Statgraph />
        <Faci />
        <RT />
        <Pace />
        <Districts /> */}
      </ControlPanel>
    </>
  )
}
