"use client";
import React from "react";
import DropdownFilter from "../../_components/DropDowns/filter";
import SliderTab from "../../_components/Leaderboard/slider";

const ContestPage: React.FC = () => {
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
    <div className="flex flex-col bg-background">
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
      </div>
      <div className="mt-5">
        <SliderTab />
      </div>
    </div>
  );
};

export default ContestPage;
