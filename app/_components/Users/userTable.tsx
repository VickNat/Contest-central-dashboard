'use client';
import { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
// import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react/dist/iconify.js';

const UserTable = () => {
  const [contestData, setContestData] = useState([
    {
        key: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        emailVerification: 'Verified',
        action: <Icon icon="pepicons-pencil:dots-y" height={20} width={20} />,
      },
      {
        key: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'User',
        emailVerification: 'Not Verified',
        action: <Icon icon="pepicons-pencil:dots-y" height={20} width={20} />,
      },
      {
        key: '3',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'Moderator',
        emailVerification: 'Verified',
        action: <Icon icon="pepicons-pencil:dots-y" height={20} width={20} />,
      },
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Email Verification',
      dataIndex: 'emailVerification',
      key: 'emailVerificaiton',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const fetchContestData = async () => {
    // Simulating a fetch request
    const response = await fetch('https://api.example.com/contests');
    const data = await response.json();
    setContestData(data);
  };

  useEffect(() => {
    // Fetch data on component mount (simulated)
    console.log("loaded")
    // fetchContestData();
  }, []);

  return (
    <div>
      <Table
        dataSource={contestData}
        columns={columns}
        pagination={false}
      />
      <div className="mt-4 flex justify-center">
        <Pagination total={50} showSizeChanger showQuickJumper />
      </div>
    </div>
  );
};

export default UserTable;
