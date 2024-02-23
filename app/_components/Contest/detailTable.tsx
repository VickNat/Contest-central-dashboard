'use client';
import { useState, useEffect } from 'react';
import { Table } from 'antd';

const DetailTableContest= () => {
  const [TableData, setTableData] = useState([
    {
      "key": 1,
      "contestName": "Minase",
      "createdBy": "@username",
      "questions": "12",
      "allowedHour": "2",
      "totalParticipants": "6",
      "attendanceRate": "0.9",
      "date": "1",
    },
    {
        "key": 2,
        "contestName": "Ibsa",
        "createdBy": "@username",
        "questions": "12",
        "allowedHour": "2",
        "totalParticipants": "6",
        "attendanceRate": "0.9",
        "date": "2",
      },
      {
        "key": 50,
        "contestName": "Aman",
        "createdBy": "@username",
        "questions": "12",
        "allowedHour": "2",
        "totalParticipants": "6",
        "attendanceRate": "0.9",
        "date": "3",
      },
      {
        "key": 3,
        "contestName": "Minase",
        "createdBy": "@username",
        "questions": "12",
        "allowedHour": "2",
        "totalParticipants": "6",
        "attendanceRate": "0.9",
        "date": "1",
      },
      {
          "key": 4,
          "contestName": "Ibsa",
          "createdBy": "@username",
          "questions": "12",
          "allowedHour": "2",
          "totalParticipants": "6",
          "attendanceRate": "0.9",
          "date": "2",
        },
        {
          "key": 51,
          "contestName": "Aman",
          "createdBy": "@username",
          "questions": "12",
          "allowedHour": "2",
          "totalParticipants": "6",
          "attendanceRate": "0.9",
          "date": "3",
        },
        {
            "key": 5,
            "contestName": "Minase",
            "createdBy": "@username",
            "questions": "12",
            "allowedHour": "2",
            "totalParticipants": "6",
            "attendanceRate": "0.9",
            "date": "1",
          },
          {
              "key": 6,
              "contestName": "Ibsa",
              "createdBy": "@username",
              "questions": "12",
              "allowedHour": "2",
              "totalParticipants": "6",
              "attendanceRate": "0.9",
              "date": "2",
            },
            {
              "key": 54,
              "contestName": "Aman",
              "createdBy": "@username",
              "questions": "12",
              "allowedHour": "2",
              "totalParticipants": "6",
              "attendanceRate": "0.9",
              "date": "3",
            },
            {
              "key": 7,
              "contestName": "Minase",
              "createdBy": "@username",
              "questions": "12",
              "allowedHour": "2",
              "totalParticipants": "6",
              "attendanceRate": "0.9",
              "date": "1",
            },
            {
                "key": 8,
                "contestName": "Ibsa",
                "createdBy": "@username",
                "questions": "12",
                "allowedHour": "2",
                "totalParticipants": "6",
                "attendanceRate": "0.9",
                "date": "2",
              },
              {
                "key": 56,
                "contestName": "Aman",
                "createdBy": "@username",
                "questions": "12",
                "allowedHour": "2",
                "totalParticipants": "6",
                "attendanceRate": "0.9",
                "date": "3",
              }
  ]
  );

  const columns = [
    {
      title: 'STUDENT NAME',
      dataIndex: 'contestName',
      key: 'contestName',
    },
    {
      title: 'CODEFORCE HANDLER',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'TOTAL SUBMISSION',
      dataIndex: 'questions',
      key: 'questions',
    },
    {
      title: 'WRONG SUBMISSION',
      dataIndex: 'allowedHour',
      key: 'allowedHour',
    },
    {
      title: 'PROBLEM SOLVED',
      dataIndex: 'totalParticipants',
      key: 'totalParticipants',
    },
    {
      title: 'CONVERSION RATE',
      dataIndex: 'attendanceRate',
      key: 'attendanceRate',
    },
    {
      title: 'RANK',
      dataIndex: 'date',
      key: 'date',
    },
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

  return (
    <div>
      <Table
        dataSource={TableData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default DetailTableContest;
