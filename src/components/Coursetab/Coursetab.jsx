import * as React from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import Coursedesc from "../Coursedesc/Coursedesc";
import { Curriculam } from "../Curiculam/Curriculam";
import Instructor from "../Instructor/Instructor";

export default function UnstyledTabsCustomized() {
  return (
    <Tabs defaultValue={1}>
      <TabsList className="mb-8 rounded-xl  flex font-[Poppins] items-center gap-5 content-between min-w-tabs-list flex-wrap">
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[Poppins] ${
                selected
                  ? " shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                  : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
              } ${
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              } py-[14px] px-[30px] rounded-full font-[Poppins] text-base font-semibold`,
            }),
          }}
          value={1}
        >
                Overview
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[Poppins]  ${
                selected
                  ? "shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                  : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
              } ${
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }  py-[14px] px-[30px] rounded-full font-[Poppins] text-base font-semibold`,
            }),
          }}
          value={2}
        >
          Curriculam
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[Poppins] ${
                selected
                  ? "shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                  : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
              } ${
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }  py-[14px] px-[30px] rounded-full font-[Poppins] text-base font-semibold`,
            }),
          }}
          value={3}
        >
          Instructors
        </Tab>
      </TabsList>
      <TabPanel className="w-full font-[Poppins] text-sm" value={1}>
        <Coursedesc></Coursedesc>
      </TabPanel>
      <TabPanel className="w-full font-[Poppins] text-sm" value={2}>
        <Curriculam></Curriculam>
      </TabPanel>
      <TabPanel className="w-full font-[Poppins] text-sm" value={3}>
        <Instructor></Instructor>
      </TabPanel>
    </Tabs>
  );
}
