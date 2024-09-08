import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Lock, Minus, Plus } from "lucide-react";

function Icon({ id, open }) {
  return (
    <>
      <Plus
        className={`${
          id === open ? "hidden" : ""
        } h-5 w-5 transition-transform`}
        strokeWidth={5}
      ></Plus>
      <Minus
        className={`${
          id === open ? "" : "hidden"
        } h-5 w-5 transition-transform`}
        strokeWidth={5}
      ></Minus>
    </>
  );
}

export function Curriculam() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className=" py-10 px-10 shadow-[0px_0px_14px_0px_#00000014] flex flex-col gap-5 rounded-lg">
        <div>
          <p className="font-[Poppins] text-[24px] md:text-[30px] xl:text-[1.75rem] font-semibold text-[#161439]">
            Course Curriculam
          </p>
        </div>
        <div>
          <p className="font-[Inter] text-base lg:text-[18px] text-[#6d6c80] leading-[1.75]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            laudantium recusandae numquam quae. Cupiditate, iusto. Voluptates
            eaque praesentium impedit, illo neque nemo fuga quae sunt eveniet
            optio, doloremque libero facere. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Pariatur, atque optio ducimus sequi
            voluptate laudantium non nobis facilis aut rerum omnis ut? Vitae
            molestias delectus quis ratione doloribus debitis aliquam.
          </p>
        </div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-[Inter] text-[#161439] font-medium text-[20px] lg:text-[24px] "
          >
            Introduction
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-1">
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Course Installation
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                      03:30
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Create a Simple React App
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      React for Reat of us
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="font-[Inter] text-[#161439] font-medium text-[20px] lg:text-[24px] "
          >
            Capacitance and Inductance
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-1">
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Course Installation
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                      03:30
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Create a Simple React App
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      React for Reat of us
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="font-[Inter] text-[#161439] font-medium text-[20px] lg:text-[24px] "
          >
            Final Audit
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-1">
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Course Installation
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                      03:30
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      Create a Simple React App
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF] px-5 py-5 group">
                <div className="w-[90%] mx-auto flex justify-between  ">
                  <div>
                    <p className="leading-[1.14] font-[Poppins] text-[18px] font-medium text-[#1c1a4a] group-hover:text-[#5751e1]">
                      React for Reat of us
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-[18px] font-[Poppins] text-[#1c1a4a] group-hover:text-[#5751e1] font-medium">
                        03:30
                      </p>
                    </div>
                    <div>
                      <Lock></Lock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
