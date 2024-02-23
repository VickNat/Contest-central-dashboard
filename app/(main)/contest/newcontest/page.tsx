"use client";
import { ChangeEvent, useState } from "react";
import { Space, Input, Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { SelectProps } from "antd";
import FilterInput from "../../../_components/Contest/filterInput";
import { Icon } from "@iconify/react";
interface DataType {
  key: number;
  problemName: string;
  problemUrl: string;
  status: boolean;
}

export default function AddQuestionForm() {
  const Countryoptions: SelectProps["options"] = [
    {
      value: "Ethiopia",
      label: "Ethiopia",
    },
    {
      value: "Ghana",
      label: "Ghana",
    },
  ];
  const Universityoptions: SelectProps["options"] = [
    {
      value: "AASTU",
      label: "AASTU",
    },
    {
      value: "AAU",
      label: "AAU",
    },
  ];

  const Generationoptions: SelectProps["options"] = [
    {
      value: "G4",
      label: "G4",
    },
    {
      value: "G5",
      label: "G5",
    },
  ];

  const [contestName, setContestName] = useState("");
  const [contestUrl, setContestUrl] = useState("");

  const handleContestNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContestName(event.target.value);
  };

  const handleContestUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContestUrl(event.target.value);
  };

  const [problemName, setProblemName] = useState<string>("");
  const [problemUrl, setProblemUrl] = useState<string>("");
  const [data, setData] = useState<DataType[]>([]);

  const handleAddProblem = () => {
    if (problemName && problemUrl) {
      const newProblem: DataType = {
        key: data.length + 1,
        problemName,
        problemUrl,
        status: true,
      };

      setData([...data, newProblem]);
      setProblemName("");
      setProblemUrl("");
    }
  };

  const handleDeleteProblem = (key: number) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const getLetterForProblem = (key: number) => {
    // Assuming you want to start with 'A' for key === 1
    return String.fromCharCode("A".charCodeAt(0) + key - 1);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Problems",
      dataIndex: "problemName",
      align: "left",
      render: (text, record) => (
        <Space>
          <span>
            {getLetterForProblem(record.key)}. {text}
          </span>
        </Space>
      ),
    },
    {
      // title: 'Status',
      // dataIndex: 'status',
      align: "right",
      render: (status, record) => (
        <Space>
          <span
            className={`text-base ${
              status ? "text-green-500" : "text-red-500"
            }`}
          >
            {status ? "Accepted" : "Warning"}
          </span>
          <Button type="text" onClick={() => handleDeleteProblem(record.key)}>
            <Icon
              className="w-[30px] h-[30px] text-slate-600 pb-1"
              icon="material-symbols:delete-outline"
            />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center width-full ">
      <div className="flex flex-col justify-start mt-10">
        <div className="text-slate-600 font-bold">
          <h1>Contestants and Contest URL</h1>
        </div>
        <div className="flex flex-row pr-5  justify-between mt-6">
          <div className="flex flex-col">
            <p className="text-slate-500 mb-2 text-xs">Country</p>
            <FilterInput options={Countryoptions} />
          </div>
          <div className="flex flex-col">
            <p className="text-slate-500 mb-2 text-xs">University</p>
            <FilterInput options={Universityoptions} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-500 mb-2 text-xs">Generation</p>
          <FilterInput options={Generationoptions} />
        </div>

        <div className="mt-4  flex flex-row">
          <div className="mr-20">
            <p className="mb-2 text-slate-600 text-sm">Contest Name</p>
            <Input
              className="rounded-sm w-[100px] h-[35px] md:w-[300px]"
              value={contestName}
              onChange={handleContestNameChange}
            />
          </div>
          <div>
            <p className="mb-2 text-slate-600 text-sm">Contest URL</p>
            <Input
              className="rounded-sm w-[100px] h-[35px] md:w-[300px]"
              value={contestUrl}
              onChange={handleContestUrlChange}
            />
          </div>
        </div>
        <div className="text-slate-600 font-bold text-sm mt-6">
          <h1>Problems</h1>
        </div>
        <div className="mt-6">
          <form className="flex flex-row" onSubmit={(e) => e.preventDefault()}>
            <div className="mr-20">
              <p className="mb-2 text-slate-600 text-sm">Problem Name</p>
              <Input
                className="rounded-sm w-[100px] h-[35px] md:w-[200px]"
                value={problemName}
                onChange={(e) => setProblemName(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2 text-slate-600 text-sm">Problem URL</p>
              <Input
                className="rounded-sm w-[100px] h-[35px] md:w-[300px]"
                value={problemUrl}
                onChange={(e) => setProblemUrl(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-end ml-10">
              <Button
                className="bg-blue-700 border-none rounded-sm h-[35px] text-white"
                onClick={handleAddProblem}
              >
                Add Problem
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <Table
            className="w-full"
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
          />
        </div>
      </div>
      <Button
        className="bg-blue-700 border-none w-[100px] mt-10 mb-20 rounded-m h-[35px] text-white"
        onClick={handleAddProblem}
      >
        Finish
      </Button>
    </div>
  );
}
