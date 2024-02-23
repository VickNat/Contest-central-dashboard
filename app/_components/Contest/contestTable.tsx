'use client';
import { useState, useEffect } from 'react';
import { Table, Space, Pagination } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
// import ContestDetail from '../../(main)/contestDetail/page';
import { useWindowSize } from '@react-hook/window-size';

const ContestTable = () => {
  const [contestData, setContestData] = useState([
    {
      "key": 1,
      "contestName": "Contest 1",
      "createdBy": "User 1",
      "questions": 4,
      "allowedHour": 2,
      "totalParticipants": 43,
      "attendanceRate": "76%",
      "date": "2023-12-31",
      "status": "completed"
    },
    {
      "key": 2,
      "contestName": "Contest 2",
      "createdBy": "User 2",
      "questions": 7,
      "allowedHour": 1,
      "totalParticipants": 89,
      "attendanceRate": "42%",
      "date": "2023-12-31",
      "status": "upcoming"
    },
    {
      "key": 50,
      "contestName": "Contest 50",
      "createdBy": "User 50",
      "questions": 3,
      "allowedHour": 3,
      "totalParticipants": 12,
      "attendanceRate": "91%",
      "date": "2023-12-31",
      "status": "completed"
    }
  ]
  );

  const columns = [
    {
      title: 'Contest Name',
      dataIndex: 'contestName',
      key: 'contestName',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Questions',
      dataIndex: 'questions',
      key: 'questions',
    },
    {
      title: 'Allowed Hour',
      dataIndex: 'allowedHour',
      key: 'allowedHour',
    },
    {
      title: 'Total Participants',
      dataIndex: 'totalParticipants',
      key: 'totalParticipants',
    },
    {
      title: 'Attendance Rate',
      dataIndex: 'attendanceRate',
      key: 'attendanceRate',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status:string) => (
        <Space size="middle">
          {status === 'completed' ? <CheckCircleOutlined style={{ color: 'green' }} className='text-xl'/> : <ClockCircleOutlined style={{ color: 'red' }} className='text-xl'/>}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Space>
      ),
    },
  ];

  const fetchContestData = async () => {
    // Simulating a fetch request
    const response = await fetch('https://api.example.com/contests');
    const data = await response.json();
    setContestData(data);
  };

  const [width] = useWindowSize();

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
        size={width < 500 ? 'small' : 'middle'}
      />
      <div className="mt-4 flex justify-center">
        <Pagination total={50} showSizeChanger showQuickJumper />
      </div>
    </div>
  );
};

export default ContestTable;
