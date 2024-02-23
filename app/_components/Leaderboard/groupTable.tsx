'use client';
import { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';

const GroupTable= () => {
  const [TableData, setTableData] = useState([
    {
      "key": 1,
      "contestName": "Group 41|Addis Ababa|Remote",
      "createdBy": "80%",
      "questions": "0.73",
      "allowedHour": "120m",
      "totalParticipants": "85%",
    },
    {
    "key": 2,
    "contestName": "Group 41|Addis Ababa|Remote",
    "createdBy": "80%",
    "questions": "0.73",
    "allowedHour": "120m",
    "totalParticipants": "85%",
    },
    {
    "key": 3,
    "contestName": "Group 41|Addis Ababa|Remote",
    "createdBy": "80%",
    "questions": "0.73",
    "allowedHour": "120m",
    "totalParticipants": "85%",
    },
    {
        "key": 4,
        "contestName": "Group 41|Addis Ababa|Remote",
        "createdBy": "80%",
        "questions": "0.73",
        "allowedHour": "120m",
        "totalParticipants": "85%",
    },
    {
        "key": 5,
        "contestName": "Group 41|Addis Ababa|Remote",
        "createdBy": "80%",
        "questions": "0.73",
        "allowedHour": "120m",
        "totalParticipants": "85%",
        },
        {
            "key": 6,
            "contestName": "Group 41|Addis Ababa|Remote",
            "createdBy": "80%",
            "questions": "0.73",
            "allowedHour": "120m",
            "totalParticipants": "85%",
        }
  ]
  );

  const columns = [
    {
      title: 'Group Description',
      dataIndex: 'contestName',
      key: 'contestName',
    },
    {
      title: 'Attendance',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Avg. Conversion Rate',
      dataIndex: 'questions',
      key: 'questions',
    },
    {
      title: 'Average Time',
      dataIndex: 'allowedHour',
      key: 'allowedHour',
    },
    {
      title: 'Overall',
      dataIndex: 'totalParticipants',
      key: 'totalParticipants',
    }
  ];
  
  const fetchContestData = async () => {
    const response = await fetch('https://api.example.com/contests');
    const data = await response.json();
    setTableData(data);
  };

  useEffect(() => {
    console.log("loaded")
  }, []);
  
  const rowColors = (record: any, index: number) => {
    if (index % 2 === 0) {
       return 'row-gray';
    }
    return 'row-white';
   };

  return (
    <div>
      <Table
        rowClassName={rowColors}
        dataSource={TableData}
        columns={columns}
        pagination={false}
      />
      <div className="mt-4 flex justify-center">
        <Pagination total={50} showSizeChanger showQuickJumper />
      </div>
    </div>
  );
};

export default GroupTable;
