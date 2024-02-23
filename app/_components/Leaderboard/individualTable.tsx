'use client';
import { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';

const IndividualTable= () => {
  const [TableData, setTableData] = useState([
    {
      "key": 1,
      "contestName": "Samuel Noah|AASTU|Inperson",
      "createdBy": "80%",
      "questions": "0.73",
      "allowedHour": "120m",
      "totalParticipants": "85%",
    },
    {
    "key": 2,
    "contestName": "Samuel Noah|AASTU|Inperson",
    "createdBy": "80%",
    "questions": "0.73",
    "allowedHour": "120m",
    "totalParticipants": "85%",
    },
    {
    "key": 3,
    "contestName": "Samuel Noah|AASTU|Inperson",
    "createdBy": "80%",
    "questions": "0.73",
    "allowedHour": "120m",
    "totalParticipants": "85%",
    },
    {
        "key": 4,
        "contestName": "Samuel Noah|AASTU|Inperson",
        "createdBy": "80%",
        "questions": "0.73",
        "allowedHour": "120m",
        "totalParticipants": "85%",
    },
    {
        "key": 5,
        "contestName": "Samuel Noah|AASTU|Inperson",
        "createdBy": "80%",
        "questions": "0.73",
        "allowedHour": "120m",
        "totalParticipants": "85%",
        },
        {
            "key": 6,
            "contestName": "Samuel Noah|AASTU|Inperson",
            "createdBy": "80%",
            "questions": "0.73",
            "allowedHour": "120m",
            "totalParticipants": "85%",
        }
  ]
  );

  const columns = [
    {
      title: 'Name',
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
    // Simulating a fetch request
    const response = await fetch('https://api.example.com/contests');
    const data = await response.json();
    setTableData(data);
  };

  useEffect(() => {
    // Fetch data on component mount (simulated)
    console.log("loaded")
    // fetchContestData();
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

export default IndividualTable;
