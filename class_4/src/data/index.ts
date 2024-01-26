import { IPricingPlans } from "@/types";

export const monthlyPricingPlansData: IPricingPlans[] = [
  {
    planName: "Hobby",
    planDescription: "All the basics for starting a new business!",
    price: 12,
  },
  {
    planName: "Freelancer",
    planDescription:
      "The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 24,
    special: true,
  },
  {
    planName: "Startup",
    planDescription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 32,
  },

  {
    planName: "Enterprise",
    planDescription:
      "Printer took a galley of type and scrambled it to make a type specimen book.",
    price: 42,
  },
];

export const yearlyPricingPlansData: IPricingPlans[] = [
  {
    planName: "Free Plan",
    planDescription: "All the basics for starting a new business!",
    price: 0,
	special: true,
  },
  {
    planName: "Freelancer",
    planDescription:
      "The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 200,
  },
  {
    planName: "Startup",
    planDescription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 300,
  },
  {
    planName: "Enterprise",
    planDescription:
      "Printer took a galley of type and scrambled it to make a type specimen book.",
    price: 400,
  },
  {
    planName: "Enterprise",
    planDescription:
      "Printer took a galley of type and scrambled it to make a type specimen book.",
    price: 100,
  },
];
