// EarningsDeductions.tsx

import React, { useContext, useState } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";
import '../css/EarnDeduction.css';

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
    <div className="container">
      <div className="section">
        <h3>Earnings</h3>
        {earnings.map((earning, index) => (
          <div key={index} className="input-container">
            <input
              type="text"
              value={earning.name}
              onChange={(e) => {
                const updatedEarning = { ...earning, name: e.target.value };
                updateEarning(index, updatedEarning);
              }}
              placeholder="Earning Name"
            />
            <input
              type="number"
              value={earning.amount}
              onChange={(e) => {
                const updatedEarning = { ...earning, amount: parseFloat(e.target.value) || 0 };
                updateEarning(index, updatedEarning);
              }}
              placeholder="Amount"
            />
            <label>
              <input
                type="checkbox"
                checked={earning.epfEtf}
                onChange={() => toggleEpfEtf(index, 'earning')}
              />
              EPF/ETF Applicable
            </label>
            <button onClick={() => removeEarning(index)}>Remove</button>
          </div>
        ))}
        <div className="input-container">
          <input
            type="text"
            placeholder="New Earning Name"
            value={newEarning.name}
            onChange={(e) => setNewEarning({ ...newEarning, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="New Earning Amount"
            value={newEarning.amount}
            onChange={(e) => setNewEarning({ ...newEarning, amount: parseFloat(e.target.value) || 0 })}
          />
          <label>
            <input
              type="checkbox"
              checked={newEarning.epfEtf}
              onChange={() => setNewEarning({ ...newEarning, epfEtf: !newEarning.epfEtf })}
            />
            EPF/ETF 
          </label>
          <button onClick={handleAddEarning}>Add New Earning</button>
        </div>
      </div>

      <div className="section">
        <h3>Deductions</h3>
        {deductions.map((deduction, index) => (
          <div key={index} className="input-container">
            <input
              type="text"
              value={deduction.name}
              onChange={(e) => {
                const updatedDeduction = { ...deduction, name: e.target.value };
                updateDeduction(index, updatedDeduction);
              }}
              placeholder="Deduction Name"
            />
            <input
              type="number"
              value={deduction.amount}
              onChange={(e) => {
                const updatedDeduction = { ...deduction, amount: parseFloat(e.target.value) || 0 };
                updateDeduction(index, updatedDeduction);
              }}
              placeholder="Amount"
            />
            <label>
              <input
                type="checkbox"
                checked={deduction.epfEtf}
                onChange={() => toggleEpfEtf(index, 'deduction')}
              />
              EPF/ETF
            </label>
            <button onClick={() => removeDeduction(index)}>Remove</button>
          </div>
        ))}
        <div className="input-container">
          <input
            type="text"
            placeholder="New Deduction Name"
            value={newDeduction.name}
            onChange={(e) => setNewDeduction({ ...newDeduction, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="New Deduction Amount"
            value={newDeduction.amount}
            onChange={(e) => setNewDeduction({ ...newDeduction, amount: parseFloat(e.target.value) || 0 })}
          />
          <label>
            <input
              type="checkbox"
              checked={newDeduction.epfEtf}
              onChange={() => setNewDeduction({ ...newDeduction, epfEtf: !newDeduction.epfEtf })}
            />
            EPF/ETF
          </label>
          <button onClick={handleAddDeduction}>Add New Deduction</button>
        </div>
      </div>
    </div>
  );
};

export default EarningsDeductions;
