import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";

const SalaryInput: React.FC = () => {
  const { basicSalary, setBasicSalary } = useContext(SalaryContext);

  return (
    <div>
      <h2>Calculate Your Salary</h2>
      <div>
        <label htmlFor="basicSalary">Basic Salary</label>
        <input
          type="number"
          id="basicSalary"
          value={basicSalary}
          onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SalaryInput;
