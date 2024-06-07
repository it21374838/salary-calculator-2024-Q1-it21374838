import React, { useContext, useState } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";


const EarningsDeductions: React.FC = () => {
  const {
    earnings,
    addEarning,
    updateEarning,
    removeEarning,
    deductions,
    addDeduction,
    updateDeduction,
    removeDeduction,
    toggleEpfEtf,
  } = useContext(SalaryContext);

  const [newEarning, setNewEarning] = useState({ name: '', amount: 0, epfEtf: false });
  const [newDeduction, setNewDeduction] = useState({ name: '', amount: 0, epfEtf: false });

  const handleAddEarning = () => {
    if (newEarning.name && newEarning.amount) {
      addEarning(newEarning);
      setNewEarning({ name: '', amount: 0, epfEtf: false });
    }
  };

  const handleAddDeduction = () => {
    if (newDeduction.name && newDeduction.amount) {
      addDeduction(newDeduction);
      setNewDeduction({ name: '', amount: 0, epfEtf: false });
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Earnings</h3>
        {earnings.map((earning, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={earning.name}
              onChange={(e) => updateEarning(index, { ...earning, name: e.target.value })}
              className="p-2 border border-gray-300 rounded-md w-48"
              placeholder="Earning Name"
            />
            <input
              type="number"
              value={earning.amount}
              onChange={(e) => updateEarning(index, { ...earning, amount: parseFloat(e.target.value) || 0 })}
              className="p-2 border border-gray-300 rounded-md mx-2 w-40"
              placeholder="Amount"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={earning.epfEtf}
                onChange={() => toggleEpfEtf(index, 'earning')}
                className="mr-2"
              />
              EPF/ETF
            </label>
            <button
              onClick={() => removeEarning(index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="New Earning Name"
            value={newEarning.name}
            onChange={(e) => setNewEarning({ ...newEarning, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md  w-48"
          />
          <input
            type="number"
            placeholder="New Earning Amount"
            value={newEarning.amount}
            onChange={(e) => setNewEarning({ ...newEarning, amount: parseFloat(e.target.value) || 0 })}
            className="p-2 border border-gray-300 rounded-md mx-2 w-40"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newEarning.epfEtf}
              onChange={() => setNewEarning({ ...newEarning, epfEtf: !newEarning.epfEtf })}
              className="mr-2"
            />
            EPF/ETF
          </label>
         
        </div>
        <button
            onClick={handleAddEarning}
            className="ml-2 text-blue-500 mt-5"
          >
            Add New Allowance
          </button>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700">Deductions</h3>
        {deductions.map((deduction, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={deduction.name}
              onChange={(e) => updateDeduction(index, { ...deduction, name: e.target.value })}
              className="p-2 border border-gray-300 rounded-md w-48"
              placeholder="Deduction Name"
            />
            <input
              type="number"
              value={deduction.amount}
              onChange={(e) => updateDeduction(index, { ...deduction, amount: parseFloat(e.target.value) || 0 })}
              className="p-2 border border-gray-300 rounded-md mx-2 w-40"
              placeholder="Amount"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={deduction.epfEtf}
                onChange={() => toggleEpfEtf(index, 'deduction')}
                className="mr-2"
              />
              EPF/ETF
            </label>
            <button
              onClick={() => removeDeduction(index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="New Deduction Name"
            value={newDeduction.name}
            onChange={(e) => setNewDeduction({ ...newDeduction, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-48"
          />
          <input
            type="number"
            placeholder="New Deduction Amount"
            value={newDeduction.amount}
            onChange={(e) => setNewDeduction({ ...newDeduction, amount: parseFloat(e.target.value) || 0 })}
            className="p-2 border border-gray-300 rounded-md mx-2 w-40"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newDeduction.epfEtf}
              onChange={() => setNewDeduction({ ...newDeduction, epfEtf: !newDeduction.epfEtf })}
              className="mr-2"
            />
            EPF/ETF
          </label>
         
        </div>
        <button
            onClick={handleAddDeduction}
            className="ml-2 text-blue-500 mt-5"
          >
            Add New Deduction
          </button>
      </div>
    </div>
  );
};

export default EarningsDeductions;
