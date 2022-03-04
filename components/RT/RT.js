import styles from './RT.module.css';
import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const generateNumberSet = (n) => {
    return Array.from(Array(n + 1).keys()).splice(1);
}

const RT = () => {

    const numberSet = [0.76, 0.76, 0.67, 0.71, 0.62, 0.73, 0.72, 0.54, 0.53, 0.62, 0.76, 0.52, 0.69, 0.79];

    const { filters } = useSelector(store => store.points);
    let data = [];

    generateNumberSet(filters.DATE ? filters.DATE : 14).map(day => {
      
        data.push({ name: `День ${day}`, rt: numberSet[day - 1] })

    })

    return(<div className={styles.container}>
        <Collapse
              bordered={false}
              defaultActiveKey={['0']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              className={styles.collapse}
            >
            <Panel header="Коэффициент распространения (Rt)" key="1" className={styles.collapse}>
              <div style={{ height: '250px', width: 'calc(50vw - 62px)' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                <Tooltip />
                <Line type="monotone" dataKey="rt" stackId="1" stroke="black" /> 
                </LineChart>
        </ResponsiveContainer>
        </div>
        </Panel>
        </Collapse>
    </div>)

}

export default RT;