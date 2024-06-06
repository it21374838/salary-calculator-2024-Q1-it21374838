// Results.tsx

import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";
import '../css/Results.css';

const Results: React.FC = () => {
  const { results, basicSalary } = useContext(SalaryContext);

  return (
    <div className="results-container">
      <h2>Your Salary</h2>
      <div className="results-details">
        <p><span className="label">Basic Salary:</span> {basicSalary.toFixed(2)}</p>
        <p><span className="label">Gross Earning:</span> {results.grossEarning.toFixed(2)}</p>
        <p><span className="label">Gross Deduction:</span> {results.grossDeduction.toFixed(2)}</p>
        <p><span className="label">Employee EPF (8%):</span> {results.epf.toFixed(2)}</p>
        <p><span className="label">APIT:</span> {results.apit.toFixed(2)}</p>
        <h3><span className="label">Net Salary (Take Home):</span> {results.takeHomeSalary.toFixed(2)}</h3>
        <h4>Contribution from the Employer</h4>
        <p><span className="label">Employer EPF (12%):</span> {results.employerEpf.toFixed(2)}</p>
        <p><span className="label">Employer ETF (3%):</span> {results.etf.toFixed(2)}</p>
        <p><span className="label">CTC (Cost to Company):</span> {results.ctc.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Results;
