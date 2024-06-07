import React from "react";
import { SalaryProvider } from "./contexts/SalaryContext";
import SalaryInput from "./components/SalaryInput";
import EarningsDeductions from "./components/EarningsDeductions";
import Results from "./components/Results";

const App: React.FC = () => {
  return (
    <SalaryProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="my-16 mx-24 h-96">
          <div className="flex justify-center ">
            <div className="bg-white p-6 rounded-lg shadow-md w-2/3">
              <SalaryInput />
              <EarningsDeductions />
            </div>
            <div className="w-1/3 mx-4">
            <Results />

            </div>
            
          </div>
        </div>
      </div>
    </SalaryProvider>
  );
};

export default App;
