import React from "react";
import MembersTable from "../../_components/Members/membersTable";
import { Button } from "antd";
import { CheckOutlined, DownloadOutlined } from "@ant-design/icons";
const ContestPage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <Button icon={<CheckOutlined />}>Invite</Button>
        <Button>Select All</Button>
        <Button icon={<DownloadOutlined />}>Import</Button>
      </div>
      <MembersTable />
    </div>
  );
};

export default ContestPage;
