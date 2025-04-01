import React from "react";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Step 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor.",
  },
  {
    title: "Step 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor.",
  },
  {
    title: "Step 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor.",
  },
];

const Process: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="text-left">
        <h1 className="text-4xl font-semibold mb-12">Our Process</h1>

        <div className="flex flex-wrap justify-center items-center gap-24 md:gap-28 lg:gap-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center w-full sm:w-1/3 md:w-1/4 lg:w-1/4 flex flex-col items-center"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 border-4 border-orange-500 rounded-full flex flex-col justify-center items-center text-lg font-bold text-gray-800 p-4">
                <span className="text-xl">{`Step ${index + 1}`}</span>
                <p className="text-xs text-gray-700 mt-2 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
