import styles from './Pace.module.css';
import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const generateNumberSet = (n) => {
    return Array.from(Array(n + 1).keys()).splice(1);
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <span className="label">Темпы вакцинации: {payload[0].value}%</span>
        </div>
      );
    }
  
    return null;
  };

const Pace = () => {

    const numberSet = [50.10, 50.13, 51.14, 51.14, 51.15, 52.17, 53.25, 55.27, 55.30, 56.30, 56.30, 57.31, 57.34, 57.37];

    const { filters } = useSelector(store => store.points);
    let data = [];

    generateNumberSet(filters.DATE ? filters.DATE : 14).map(day => {
      
        data.push({ name: `День ${day}`, pace: numberSet[day - 1] })

    })

    return(<div className={styles.container}>
        <Collapse
              bordered={false}
              defaultActiveKey={['0']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              className={styles.collapse}
            >
            <Panel header="Темпы вакцинации" key="1" className={styles.collapse}>
              <div style={{ height: '250px', width: 'calc(50vw - 62px)' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <Area type="monotone" dataKey="pace" stackId="1" stroke="black" /> 
                    </AreaChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </Collapse>
    </div>)

}

export default Pace;