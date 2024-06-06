import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";

const Results: React.FC = () => {
  const { results, basicSalary } = useContext(SalaryContext);

  return (
    <div>
      <h2>Your Salary</h2>
      <div>
        <p>Basic Salary: {basicSalary.toFixed(2)}</p>
        <p>Gross Earning: {results.grossEarning.toFixed(2)}</p>
        <p>Gross Deduction: {results.grossDeduction.toFixed(2)}</p>
        <p>Employee EPF (8%): {results.epf.toFixed(2)}</p>
        <p>APIT: {results.apit.toFixed(2)}</p>
        <h3>Net Salary (Take Home): {results.takeHomeSalary.toFixed(2)}</h3>
        <h4>Contribution from the Employer</h4>
        <p>Employer EPF (12%): {results.employerEpf.toFixed(2)}</p>
        <p>Employer ETF (3%): {results.etf.toFixed(2)}</p>
        <p>CTC (Cost to Company): {results.ctc.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Results;
