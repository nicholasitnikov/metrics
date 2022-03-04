import styles from './Statgraph.module.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <span className="label">Заболело: {payload[0].payload.infected}</span>
        <span className="label">Выздоровело: {payload[1].payload.recovered}</span>
        <span className="label">Умерло: {payload[2].payload.died}</span>
      </div>
    );
  }

  return null;
};

const generateNumberSet = (n) => {
  return Array.from(Array(n + 1).keys()).splice(1);
}

const Statgraph = () => {

    const { points, filters, filteredPoints } = useSelector(store => store.points);
    let data = [];

    generateNumberSet(filters.DATE ? filters.DATE : 14).map(day => {
      const numberOfSick = Object.keys(filters).length > 0 ? filteredPoints.filter(el => el.DAY === day && el.STATUS === 'ILL').length
    : points.filter(el => el.DAY === day && el.STATUS === 'ILL').length;
    const numberOfDied = Object.keys(filters).length > 0 ? filteredPoints.filter(el => el.DAY === day && el.RESULT === 'DIED').length
    : points.filter(el => el.DAY === day && el.RESULT === 'DIED').length;
      data.push({ name: `День ${day}`, infected: numberOfSick, recovered: numberOfSick - parseInt(numberOfDied / 10), died: parseInt(numberOfDied / 10) })
    })

    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart 
            data={data}
            >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke='lightgrey' />
          <YAxis stroke='lightgrey' />
          <Tooltip content={<CustomTooltip />} />
          
          <Area type="monotone" dataKey="infected" stackId="3" stroke="lightblue" fill="lightblue" />
          <Area type="monotone" dataKey="recovered" stackId="2" stroke="lightgreen" fill="lightgreen" />
          <Area type="monotone" dataKey="died" stackId="1" stroke="black" fill="red" />            
          </AreaChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Statgraph;