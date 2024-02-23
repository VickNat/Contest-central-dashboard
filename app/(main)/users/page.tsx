"use client";
import React, { useState } from "react";
import UserTable from "../../_components/Users/userTable";
import { Button, Input, Modal, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContestPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dropDownData = {
    title: "User types",
    options: ["Head of education", "Admin"],
  };
  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Admin",
    },
    {
      key: "2",
      label: "Head of education",
    },
    {
      key: "3",
      label: "Student",
    },
  ];

  return (
    <div>
      <Modal
        title="Register New user"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label>Name</label>
            <Input />
          </div>
          <div>
            <label>Email</label>
            <Input />
          </div>
          <div>
            <label>Role</label>
            <Dropdown menu={{ items }}>
              <div
                onClick={(e) => e.preventDefault()}
                className="border-[1px] px-2 py-1 border-solid rounded-md border-gray-300"
              >
                <Space>
                  <div className="mr-6">{dropDownData.title}</div>
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="flex w-full justify-end mt-6">
          <Button className="bg-blue-700 text-white">Add user</Button>
        </div>
      </Modal>
      <div className="flex justify-between my-2 mb-4">
        <div className="flex gap-5">
          <Input
            type="text"
            placeholder="Search"
            addonBefore={<SearchOutlined className="text-blue" />}
          />
        </div>
        <div className="flex gap-2">
          <Button
            icon={<Icon icon="iconamoon:options-bold" />}
            className="!bg-blue-700 !text-white"
          >
            {" "}
            Filter
          </Button>
          <Button
            className="bg-blue-700 text-white px-6 py-1 rounded-md"
            onClick={showModal}
          >
            {" "}
            Create{" "}
          </Button>
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default ContestPage;
