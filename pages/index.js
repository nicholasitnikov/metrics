import Settings from '../components/Settings/Settings';
import MapContainer from '../components/MapContainer/MapContainer';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPoints } from '../services/actions/points';


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
      </ControlPanel>
    </>
  )
}
