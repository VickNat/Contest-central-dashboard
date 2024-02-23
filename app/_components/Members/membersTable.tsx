'use client';
import { useState, useEffect } from 'react';
import { Table, Space, Pagination } from 'antd';
// import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const MembersTable = () => {
  const [contestData, setContestData] = useState([
    {
        key: '1',
        fullName: (
          <>
            <input type="checkbox" /> John Doe
          </>
        ),
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        telegramUsername: '@johndoe',
        studentId: '1234',
        cv: 'Link',
        leetcode: 'link',
        codeforces: 'link',
        github: 'link',
      },
      {
        key: '2',
        fullName: (
          <>
            <input type="checkbox" /> Jane Smith
          </>
        ),
        email: 'jane.smith@example.com',
        phoneNumber: '987-654-3210',
        telegramUsername: '@janesmith',
        studentId: '1234',
        cv: 'Link',
        leetcode: 'link',
        codeforces: 'link',
        github: 'link',
      },
      {
        key: '3',
        fullName: (
          <>
            <input type="checkbox" /> Bob Johnson
          </>
        ),
        email: 'bob.johnson@example.com',
        phoneNumber: '555-555-5555',
        telegramUsername: '@bobjohnson',
        studentId: '1234',
        cv: 'Link',
        leetcode: 'link',
        codeforces: 'link',
        github: 'link',
      },
  ]);

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: 200
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Telegram Username',
      dataIndex: 'telegramUsername',
      key: 'telegramUsername',
    },
    {
      title: 'Student Id',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'CV',
      dataIndex: 'cv',
      key: 'cv',
    },
    {
      title: 'Leetcode',
      dataIndex: 'leetcode',
      key: 'leetcode',
    },
    {
        title: 'Codeforces',
        dataIndex: 'codeforces',
        key: 'codeforces',
    },
    {
        title: 'Github',
        dataIndex: 'github',
        key: 'github',
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

export default MembersTable;
