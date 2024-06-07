import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";

const Results: React.FC = () => {
  const { results, basicSalary } = useContext(SalaryContext);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Salary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Basic Salary:</span>
          <span>{basicSalary.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Gross Earning:</span>
          <span>{results.grossEarning.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Gross Deduction:</span>
          <span>{results.grossDeduction.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Employee EPF (8%):</span>
          <span>{results.epf.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">APIT:</span>
          <span>{results.apit.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-4 border">
          <span>Net Salary (Take Home):</span>
          <span>{results.takeHomeSalary.toFixed(2)}</span>
        </div>
        <h4 className="text-lg font-medium mt-6">Contribution from the Employer</h4>
        <div className="flex justify-between">
          <span className="font-medium">Employer EPF (12%):</span>
          <span>{results.employerEpf.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Employer ETF (3%):</span>
          <span>{results.etf.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-4">
          <span>CTC (Cost to Company):</span>
          <span>{results.ctc.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
