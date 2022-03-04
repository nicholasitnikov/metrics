import { Table, Tag, Collapse, Typography } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './Districts.module.css';
import { CaretRightOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;


const columns = [
    {
      title: 'Район',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Заражено',
      dataIndex: 'ill',
      key: 'ill',
      render: text => (
        <>
            <Tag color={'red'}>
                {text}
            </Tag>
        </>
      )
    },
    {
      title: 'Выздоровело',
      dataIndex: 'recovered',
      key: 'recovered',
      render: text => (
        <>
            <Tag color={'green'}>
                {text}
            </Tag>
        </>
      )
    },
    {
      title: 'Умерло',
      key: 'died',
      dataIndex: 'died',
      render: text => (
        <>
            <Tag color={'grey'}>
                {text}
            </Tag>
        </>
      ),
    }
  ];

const Districts = () => {

    const { points, filters, filteredPoints } = useSelector(store => store.points);

    const generateData = useMemo(() => {
        
        const data = [
            { name: "Адмиралтейский", ill: 0, recovered: 0, died: 0 },
            { name: "Василеостровский", ill: 0, recovered: 0, died: 0 },
            { name: "Выборгский", ill: 0, recovered: 0, died: 0 },
            { name: "Калининский", ill: 0, recovered: 0, died: 0 },
            { name: "Кировский", ill: 0, recovered: 0, died: 0 },
            { name: "Колпинский", ill: 0, recovered: 0, died: 0 },
            { name: "Красногвардейский", ill: 0, recovered: 0, died: 0 },
            { name: "Красносельский", ill: 0, recovered: 0, died: 0 },
            { name: "Кронштадтский", ill: 0, recovered: 0, died: 0 },
            { name: "Курортный", ill: 0, recovered: 0, died: 0 },
            { name: "Московский", ill: 0, recovered: 0, died: 0 },
            { name: "Невский", ill: 0, recovered: 0, died: 0 },
            { name: "Петроградский", ill: 0, recovered: 0, died: 0 },
            { name: "Петродворцовый", ill: 0, recovered: 0, died: 0 },
            { name: "Приморский", ill: 0, recovered: 0, died: 0 },
            { name: "Пушкинский", ill: 0, recovered: 0, died: 0 },
            { name: "Фрунзенский", ill: 0, recovered: 0, died: 0 },
            { name: "Центральный", ill: 0, recovered: 0, died: 0 }
        ]

        const targetPoints = Object.keys(filters).length > 0 ? filteredPoints : points;

        targetPoints.map((point, index) => {
            let districtID = point.DISTRICT_ID - 1;
            data[districtID].ill += 1;
            data[districtID].recovered = point.RESULT === 'RECOVERED' ? data[districtID].recovered + 1 : data[districtID].recovered;
            data[districtID].died = point.RESULT === 'DIED' ? data[districtID].died + 1 : data[districtID].died;
            data.key = index;
        })

        return data

    }, [points, filters, filteredPoints]);

    return(
        <div className={styles.container}>
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className={styles.collapse}
          >
            <Panel header="Разбивка по районам" key="1" className={styles.collapse}>
              <Table columns={columns} dataSource={generateData} pagination={false} className={styles.table} />
            </Panel>
          </Collapse>
        </div>
    )
}

export default Districts;