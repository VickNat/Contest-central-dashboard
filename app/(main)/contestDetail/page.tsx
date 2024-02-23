"use client";
// import Image from "next/image";
import DetailTableContest from "../../_components/Contest/detailTable";
import PieChart from "../../_components/graphs/pieChart";
import BarChart from "../../_components/graphs/barChart";
import DropdownFilter from "../../_components/DropDowns/filter";

export default function ContestDetail() {
  const country = {
    title: "Ethiopia",
    options: ["All", "Ethiopia", "Ghana", "Kenya"],
  };
  const gen = {
    title: "Gen4",
    options: ["All", "Gen1", "Gen2", "Gen3", "Gen4"],
  };
  const school = {
    title: "AASTU",
    options: ["All", "AAIT", "AASTU", "ASTU"],
  };
  const group = {
    title: "G46",
    options: ["All", "G41", "G42", "G43", "G44", "G45", "G46"],
  };
  return (
    <div className="h-full flex gap-10 bg-background">
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex gap-7">
          <div>
            <DropdownFilter data={country} />
          </div>
          <div>
            <DropdownFilter data={gen} />
          </div>
          <div>
            <DropdownFilter data={school} />
          </div>
          <div>
            <DropdownFilter data={group} />
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <DetailTableContest />
        </div>
      </div>
      <div className="flex-1 flex flex-col w-full gap-14">
        <div className="flex flex-col gap-3 pl-8 pt-5">
          <div className="text-base font-semibold ">Problem Status</div>
          <div className=" bg-white shadow shadow-blue-100 w-60 ml-1 rounded-lg flex items-center justify-center py-2 pt-5">
            <BarChart />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 pl-8 relative">
          <div className="text-base font-semibold ">Avg Conversion rate</div>
          <div className=" bg-white shadow shadow-blue-100 w-60 ml-1 rounded-lg flex items-center justify-center py-5">
            <PieChart />
          </div>
          <div className="absolute top-32 right-32">
            <div className="text-xl text-white">80%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
