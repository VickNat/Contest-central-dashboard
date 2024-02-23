import React from "react";
import ContestTable from "../../_components/Contest/contestTable";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import Link from "next/link";

const ContestPage: React.FC = () => {
  // const { RangePicker } = DatePicker;

  return (
    <div>
      <div className="flex justify-between my-2">
        <div>
          <Input
            type="text"
            placeholder="Search"
            addonBefore={<SearchOutlined className="text-blue" />}
          />
        </div>
        <div>
          <Link href="/contest/newcontest">
            <Button className="bg-blue-700 text-white px-6 py-1 rounded-md">
              {" "}
              Create{" "}
            </Button>{" "}
          </Link>
        </div>
      </div>
      <ContestTable />
    </div>
  );
};

export default ContestPage;
