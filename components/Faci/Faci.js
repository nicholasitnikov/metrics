import styles from './Faci.module.css';
import { Tabs, Collapse } from 'antd';
import PublicPlaces from '../PublicPlaces/PublicPlaces';
import Companies from '../Companies/Companies';

import { CaretRightOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Faci = () => {

    return(
        <div className={styles.container}>
            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className={styles.collapse}
            >
                <Panel header="Очаги" key="1" className={styles.collapse}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Предприятия" key="1">
                            <Companies />
                        </TabPane>
                        <TabPane tab="Публичные места" key="2">
                        <   PublicPlaces />
                        </TabPane>
                    </Tabs>
                </Panel>
            </Collapse>
        </div>
    )

}

export default Faci;