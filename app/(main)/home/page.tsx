"use client";
// import Image from "next/image";
import FilledLineChart from "../../_components/graphs/filledLineChart";
import TableContest from "../../_components/Dashboard/contestTable";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 h-full px-3 bg-background">
      {/* the 4 cards */}
      <div className="md:h-24 sm:h-50 flex lg:flex-row sm:flex-col sm:justify-center sm:items-center xl:space-x-12 lg:space-x-10 sm:space-y-4 pb-8">
        {/* the first 2 cards */}
        <div className="h-full flex lg:flex-row xl:space-x-12 lg:space-x-10 md:space-x-4 sm:space-x-8 lg:w-1/2 md:w-3/4 sm:w-full">
          {/* first card */}
          <div className="flex-1 h-full bg-white rounded-lg shadow-md flex md:flex-row sm:flex-col gap-1 xl:pl-3 sm:pl-2 w-1/2 py-1 md:items-center md:justify-center">
            <div className="w-1/5 md:h-3/4 sm:w-1/6 xl:aspect-square rounded-full m-2 bg-blue-200 shadow shadow-gray-400 flex items-center justify-center">
              <Icon
                icon={"material-symbols:leaderboard-outline"}
                className="text-blue-800 w-3/4 h-3/4"
              />
            </div>
            <div className="flex-1 font-medium lg:text-base xl:text-lg flex sm:flex-col">
              <div className="text-black">Total contest</div>
              <div className="text-black">224</div>
            </div>
          </div>

          {/* second card */}
          <div className="flex-1 h-full bg-white rounded-lg shadow-md flex md:flex-row sm:flex-col gap-1 xl:pl-3 sm:pl-2 w-1/2 py-1 md:items-center md:justify-center">
            <div className="w-1/5 md:h-3/4 sm:w-1/6 aspect-square rounded-full m-2 bg-green-200 shadow shadow-gray-400 flex items-center justify-center">
              <Icon
                icon={"mdi:users-outline"}
                className="text-green-800 w-3/4 h-3/4"
              />
            </div>
            <div className="flex-1 font-medium lg:text-base xl:text-lg flex sm:flex-col">
              <div className="text-black">Total Group</div>
              <div className="text-black">224</div>
            </div>
          </div>
        </div>

        {/* the second 2 cards */}
        <div className="h-full flex lg:flex-row xl:space-x-12 lg:space-x-10 md:space-x-4 sm:space-x-8 lg:w-1/2 md:w-3/4 sm:w-full">
          {/* third card */}
          <div className="flex-1 h-full bg-white rounded-lg shadow-md flex md:flex-row sm:flex-col gap-1 xl:pl-3 sm:pl-2 pr-1 w-1/2 py-1 md:items-center md:justify-center">
            <div className="w-1/5 md:h-3/4 sm:w-1/6 aspect-square rounded-full m-2 bg-yellow-100 shadow shadow-gray-400 flex items-center justify-center">
              <Icon
                icon={"mdi:user-outline"}
                className="text-yellow-400 w-3/4 h-3/4"
              />
            </div>
            <div className="flex-1 font-medium lg:text-base xl:text-lg flex sm:flex-col">
              <div className="text-black">Total Member</div>
              <div className="text-black">224</div>
            </div>
          </div>

          {/* fourth card */}
          <div className="flex-1 h-full bg-white rounded-lg shadow-md flex md:flex-row sm:flex-col gap-1 xl:pl-3 sm:pl-2 w-1/2 py-1 md:items-center md:justify-center">
            <div className="w-1/5 md:h-3/4 sm:w-1/6 aspect-square rounded-full m-2 bg-red-100 shadow shadow-gray-400 flex items-center justify-center">
              <Icon
                icon={"mingcute:time-line"}
                className="text-red-400 w-3/4 h-3/4"
              />
            </div>
            <div className="flex-1 font-medium lg:text-base xl:text-lg flex sm:flex-col">
              <div className="text-black">Total Hours</div>
              <div className="text-black">224</div>
            </div>
          </div>
        </div>
      </div>

      {/* the big box */}
      <div className="flex-1 flex xl:gap-10 gap-0 flex-col xl:flex-row xl:mt-0 mt-7">
        {/* the left box */}
        <div className="h-full xl:w-3/4 w-full flex flex-col gap-4">
          {/* the chart box */}
          <div className="flex flex-col gap-3">
            <div className="text-base font-medium text-black">
              Average Contest Conversion
            </div>
            <div className="flex-1 bg-white rounded-lg">
              <div className="flex mt-3 mb-6 ml-80">
                <div className="border border-grayBox xl:text-sm text-xs px-3">
                  Week
                </div>
                <div className="border border-grayBox xl:text-sm text-xs px-3">
                  Month
                </div>
                <div className="border border-grayBox xl:text-sm text-xs px-3">
                  Quarter
                </div>
                <div className="border border-grayBox xl:text-sm text-xs px-3">
                  Year
                </div>
              </div>
              <FilledLineChart />
            </div>
          </div>

          {/* the table box */}
          <div className="flex flex-col gap-2">
            <div className="text-base font-medium text-black">
              Recent contest
            </div>
            <div className="flex-1 rounded-lg mb-8">
              <TableContest />
            </div>
          </div>
        </div>

        {/* the right box */}
        <div className="h-full xl:w-1/4 w-full mt-8 flex xl:flex-col md:flex-row sm:flex-col xl:gap-8 gap-14">
          {/* the groups box */}
          <div className="flex flex-col xl:w-full md:w-1/2 sm:w-3/4 items-center justify-center bg-white py-3 gap-1 rounded-lg pr-1 pl-2">
            <div className="flex mb-1">
              <div className="h-9 w-9 rounded-full m-2 bg-yellow-100 shadow-sm shadow-black flex items-center justify-center">
                <Icon icon={"fa-solid:users"} width={20} height={20} />
              </div>
              <div className="text-lg text-textGray mt-3">Top Groups</div>
            </div>

            {/* first group */}
            <div className="flex w-full gap-1">
              <div className="bg-customYellow flex items-center justify-center px-1">
                <div className="text-lg text-black">1.</div>
              </div>
              <div className="flex-1 border-customYellow border flex">
                <div className="text-lg text-black text-center w-4/5">
                  Group 45
                </div>
                <div className="flex-1 bg-customYellow text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* second group */}
            <div className="flex w-full gap-1">
              <div className="bg-customYellow flex items-center justify-center px-1">
                <div className="text-lg text-black">2.</div>
              </div>
              <div className="flex-1 border-customYellow border flex">
                <div className="text-lg text-black text-center w-4/5">
                  Group 45
                </div>
                <div className="flex-1 bg-customYellow text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* third group */}
            <div className="flex w-full gap-1">
              <div className="bg-customYellow flex items-center justify-center px-1">
                <div className="text-lg text-black">3.</div>
              </div>
              <div className="flex-1 border-customYellow border flex">
                <div className="text-lg text-black text-center w-4/5">
                  Group 45
                </div>
                <div className="flex-1 bg-customYellow text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* the see more part */}
            <div className="border-customYellow border-2 text-sm text-textGray px-1 mt-3 mb-1">
              See More
            </div>
          </div>

          {/* the contestant box */}
          <div className="flex flex-col xl:w-full md:w-1/2 sm:w-3/4 items-center justify-center bg-white py-3 gap-1 rounded-lg pr-1 pl-2">
            <div className="flex mb-1">
              <div className="h-9 w-9 rounded-full m-2 bg-yellow-100 shadow-sm shadow-black flex items-center justify-center">
                <Icon
                  icon={"material-symbols:person"}
                  width={28}
                  height={28}
                  className="text-gray-600"
                />
              </div>
              <div className="text-lg text-textGray mt-3">Top Contestants</div>
            </div>

            {/* first contestant */}
            <div className="flex w-full gap-1">
              <div className="bg-bgBlue flex items-center justify-center px-1">
                <div className="text-lg text-black">1.</div>
              </div>
              <div className="flex-1 border-bgBlue border flex gap-4">
                <div className="mt-1 ml-4">
                  <Icon
                    icon={"mdi:medal-outline"}
                    width={23}
                    height={23}
                    className="text-gold"
                  />
                </div>
                <div className="text-lg text-black text-center w-1/2">
                  John Doe
                </div>
                <div className="flex-1 bg-bgBlue text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* second contestant  */}
            <div className="flex w-full gap-1">
              <div className="bg-bgBlue flex items-center justify-center px-1">
                <div className="text-lg text-black">2.</div>
              </div>
              <div className="flex-1 border-bgBlue border flex gap-4">
                <div className="mt-1 ml-4">
                  <Icon
                    icon={"mdi:medal-outline"}
                    width={23}
                    height={23}
                    className="text-silver"
                  />
                </div>
                <div className="text-lg text-black text-center w-3/5">
                  John Doe
                </div>
                <div className="flex-1 bg-bgBlue text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* third contestant  */}
            <div className="flex w-full gap-1">
              <div className="bg-bgBlue flex items-center justify-center px-1">
                <div className="text-lg text-black">3.</div>
              </div>
              <div className="flex-1 border-bgBlue border flex gap-4">
                <div className="mt-1 ml-4">
                  <Icon
                    icon={"mdi:medal-outline"}
                    width={23}
                    height={23}
                    className="text-bronze"
                  />
                </div>
                <div className="text-lg text-black text-center w-3/5">
                  John Doe
                </div>
                <div className="flex-1 bg-bgBlue text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* fourth contestant  */}
            <div className="flex w-full gap-1">
              <div className="bg-bgBlue flex items-center justify-center px-1">
                <div className="text-lg text-black">4.</div>
              </div>
              <div className="flex-1 border-bgBlue border flex gap-4">
                <div className="mt-1 ml-4">
                  <Icon
                    icon={"mdi:medal-outline"}
                    width={23}
                    height={23}
                    className="text-stone"
                  />
                </div>
                <div className="text-lg text-black text-center w-3/5">
                  John Doe
                </div>
                <div className="flex-1 bg-bgBlue text-base text-black text-center">
                  80%
                </div>
              </div>
            </div>

            {/* the see more part  */}
            <div className="border-bgBlue border-2 text-sm text-textGray px-1 mt-3 mb-1">
              See More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
