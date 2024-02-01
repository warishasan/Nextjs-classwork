import { monthlyPricingPlansData, yearlyPricingPlansData } from "@/data";
import Card from "./Card";
import { useState } from "react";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState<"monthly" | "yearly">("monthly");

  const planData =
    activePlan === "monthly" ? monthlyPricingPlansData : yearlyPricingPlansData;

  return (
    <div className="py-12">
      <div className="mb-14 rounded-lg mx-auto w-80 bg-gray-700 p-2 flex">
        <button
          onClick={() => setActivePlan("monthly")}
          className={`${
            activePlan === "monthly" ? "bg-gray-500" : "bg-transparent"
          } text-white h-10 rounded w-full`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => setActivePlan("yearly")}
          className={` ${
            activePlan === "yearly" ? "bg-gray-500" : "bg-transparent"
          } text-white h-10 rounded w-full`}
        >
          Yearly billing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-8">
        {planData?.map((item, i) => {
          return <Card plan={item} key={i} />;
        })}
      </div>
    </div>
  );
}
