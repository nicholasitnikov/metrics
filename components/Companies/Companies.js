import { Table, Tag, Typography } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './Companies.module.css';

const { Title } = Typography;


const columns = [
    {
      title: 'Название предприятия',
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

const PublicPlaces = () => {

    const { points, filters, filteredPoints } = useSelector(store => store.points);

    const generateData = useMemo(() => {
        
        const data = [
            { name: "Балтика", ill: 0, recovered: 0, died: 0 },
            { name: "Wrigley", ill: 0, recovered: 0, died: 0 },
            { name: "General Motors", ill: 0, recovered: 0, died: 0 },
            { name: "Парнас-М", ill: 0, recovered: 0, died: 0 },
            { name: "Экотек", ill: 0, recovered: 0, died: 0 },
            { name: "Ижорский трубный завод", ill: 0, recovered: 0, died: 0 }
        ]

        const targetPoints = Object.keys(filters).length > 0 ? filteredPoints : points;

        targetPoints.map(point => {
            let districtID = point.DISTRICT_ID - 1;
            if(!data[districtID]) { return }
            data[districtID].ill += 1;
            data[districtID].recovered = point.RESULT === 'RECOVERED' ? data[districtID].recovered + 1 : data[districtID].recovered;
            data[districtID].died = point.RESULT === 'DIED' ? data[districtID].died + 1 : data[districtID].died;
        })

        return data

    }, [points, filters, filteredPoints]);

    return(
        <div className={styles.container}>
          <Table columns={columns} dataSource={generateData} pagination={false} className={styles.table} />
        </div>
    )
}

export default PublicPlaces;