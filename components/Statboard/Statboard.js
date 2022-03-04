import styles from './Statboard.module.css';
import { Statistic } from 'antd';
import { useSelector } from 'react-redux';

const Statboard = (props) => {

    const { points, filters, filteredPoints } = useSelector(store => store.points);

    const numberOfSick = Object.keys(filters).length > 0 ? filteredPoints.filter(el => el.STATUS === 'ILL').length
    : points.filter(el => el.STATUS === 'ILL').length;
    const numberOfDied = Object.keys(filters).length > 0 ? filteredPoints.filter(el => el.RESULT === 'DIED').length
    : points.filter(el => el.RESULT === 'DIED').length;

    return(<div className={styles.container}>
        <Statistic title="Заражено" value={numberOfSick} />
        <Statistic title="Выздоровело" value={numberOfSick - parseInt(numberOfDied / 10)} />
        <Statistic title="Умерло" value={parseInt(numberOfDied / 10)} />
    </div>)

}

export default Statboard;