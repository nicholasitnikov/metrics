import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;
import data from '../../services/spb.json';

import styles from './Settings.module.css';
import { ANIMATION_PLAYING, ANIMATION_STOP, HEATMAP_LAYER_TOGGLE, SET_DAY } from '../../services/actions';

const ControlPanel = (props) => {

    const dispatch = useDispatch();
    const { day, id } = useSelector(store => store.map)

    const sliderChangeHandler = (value) => {
        dispatch({ type: SET_DAY, day: value })
    }

    const getData = useMemo(() => {
        if(id === undefined) { return {} }
        console.log(id)
        const element = data.find(el => el.id === id);
        return {
            air: element.AIR[parseInt(day) - 1],
            grave: element.GRAVE[parseInt(day) - 1],
            water: element.WATER[parseInt(day) - 1],
        }
    }, [id,day])

    return(
        <div className={styles.container}>
            <Title level={4}>Дата: {day}.02.22</Title>
            <Slider onChange={sliderChangeHandler} min={1} max={14} defaultValue={30} value={day} />
            <Divider />
            <Title style={{marginBottom: 0}} level={4}>Почва</Title>
            <Paragraph style={{marginBottom: 0}}>{getData.grave}</Paragraph>
            <Divider />
            <Title style={{marginBottom: 0}} level={4}>Вода</Title>
            <Paragraph style={{marginBottom: 0}}>{getData.water === 'GOOD' ? 'Удовлетворительно.': 'Неудовлетворительно'}</Paragraph>
            <Divider />
            <Title style={{marginBottom: 0}} level={4}>Воздух</Title>
            <Paragraph>{getData.air === 'GOOD' ? 'Удовлетворительно.': 'Неудовлетворительно' }</Paragraph>
        </div>
    );

}

export default ControlPanel;