import TemplateCard from "@/components/TemplateCard";
import React from "react";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen mt-[15rem] mt-[10rem] p-[2rem]">
      <span className="text-lg font-bold">All Templates</span>
      <div className="grid grid-cols-3 mt-5">
        <TemplateCard />
      </div>
    </div>
  );
};

export default TemplatesPage;
