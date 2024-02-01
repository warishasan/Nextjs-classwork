import { IPricingPlans } from "@/types";
import Button from "./Button";

export default function Card({ plan }: { plan: IPricingPlans }) {
  return (
    <div
      className={`p-6 h-72 w-full flex gap-6 justify-between flex-col bg-slate-300 dark:bg-gray-600 dark:text-white  rounded-xl text-lg ${
        plan.special ? "border-4 border-primary" : ""
      } shadow-xl hover:drop-shadow-2xl`}
    >
      <div>
        <h3 className="text-2xl font-bold ">{plan.planName}</h3>
        <p className="line-clamp-3">{plan.planDescription}</p>
      </div>

      <span>
        <span className="text-4xl font-black">${plan.price}</span> /MONTH
      </span>

      <Button>Subscribe</Button>
    </div>
  );
}
