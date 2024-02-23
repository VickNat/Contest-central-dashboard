// import '../globals.css'
import React from 'react';
import { Tabs } from 'antd';
import GroupTable from './groupTable';
import IndividualTable from './individualTable';

const SliderTab: React.FC = () => {
 const items = [
    {
      label: 'Group',
      key: '1',
      children: <GroupTable/>,
    },
    {
      label: 'Individual',
      key: '2',
      children: <IndividualTable/>,
    },
 ];

 return (
    <Tabs
    defaultActiveKey="1"
    type="card"
    size="small"
    items={items}
    />
 );
};

export default SliderTab;