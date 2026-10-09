"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";

export default function RelocationSteps() {
  const steps = [
    { title: "Dismantling", description: "Expert dismantling of large furniture and appliances." },
    { title: "Wrapping", description: "Secure packing using multi-layer bubble wrap and premium materials." },
    { title: "Loading", description: "Careful loading into our secure, modern moving trucks." },
    { title: "Transportation", description: "Safe and swift transit to your new location." },
    { title: "Unloading", description: "Systematic unloading with complete inventory tracking." },
    { title: "Shifting", description: "Placing items safely in their designated rooms." },
    { title: "Handymen Activities", description: "TV mounting, curtain installation, and appliance setup." },
    { title: "Rejoining & Fixing", description: "Complete furniture reassembly to make your space feel like home." },
  ];

  return (
    <div className="bg-white w-full px-6 py-12 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
      <Steps.Root
        count={steps.length}
        defaultStep={1}
        orientation="vertical"
        className="w-full max-w-xl"
      >
        <Steps.List className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <Steps.Item
              key={index}
              index={index}
              className="relative flex items-start group"
            >
              <Steps.Trigger className="flex items-start gap-5 text-left rounded-xl w-full p-4 -ml-4 relative transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 outline-none cursor-pointer group-data-[state=complete]:cursor-pointer group-data-[state=incomplete]:cursor-pointer 
              before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-primary before:rounded-l-xl before:opacity-0 before:scale-y-50 before:transition-all before:duration-300 group-hover:before:opacity-100 group-hover:before:scale-y-100">
                <Steps.Indicator className="flex justify-center items-center shrink-0 rounded-full font-bold w-12 h-12 text-lg border-2 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(26,54,93,0.2)] group-hover:border-primary group-hover:text-primary
                  data-[state=complete]:bg-accent data-[state=complete]:text-dark data-[state=complete]:border-accent 
                  data-[state=current]:bg-primary data-[state=current]:text-white data-[state=current]:border-primary 
                  data-[state=incomplete]:bg-gray-50 data-[state=incomplete]:text-gray-400 data-[state=incomplete]:border-gray-200">
                  <span className="group-data-[state=complete]:hidden group-data-[state=current]:block font-anemone">
                    {index + 1}
                  </span>
                  <Check className="w-6 h-6 group-data-[state=complete]:block hidden text-dark" strokeWidth={3} />
                </Steps.Indicator>
                <div className="flex flex-col pt-1 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-xl font-bold text-dark group-data-[state=current]:text-primary group-hover:text-primary transition-colors">
                    {step.title}
                  </span>
                  <span className="text-sm md:text-base text-gray-500 mt-1 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </span>
                </div>
              </Steps.Trigger>
              <Steps.Separator
                hidden={index === steps.length - 1}
                className="absolute top-12 left-6 w-0.5 h-full -ml-[1px] bg-gray-200 data-[state=complete]:bg-accent transition-colors duration-500 z-0"
              />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </div>
  );
}
