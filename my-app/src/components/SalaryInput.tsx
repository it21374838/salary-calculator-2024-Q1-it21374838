import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";
import ResetIcon from '../icons/ResetIcon';

const SalaryInput: React.FC = () => {
  const { basicSalary, setBasicSalary, resetForm, clearForm } = useContext(SalaryContext);

  const handleReset = () => {
    resetForm();
    clearForm();
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Calculate Your Salary</h2>
        <button onClick={handleReset} className="text-blue-500 flex">
        <ResetIcon />
          Reset
        </button>
      </div>
      <div className="mb-6">
        <label htmlFor="basicSalary" className="block text-sm font-medium text-gray-700">Basic Salary</label>
        <input
          type="number"
          id="basicSalary"
          value={basicSalary}
          onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md w-72"
        />
      </div>
    </div>
  );
};

export default SalaryInput;