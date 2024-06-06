import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { calculateNetSalary } from '../utils/calculations';

interface EarningDeduction {
  name: string;
  amount: number;
  epfEtf: boolean;
}

interface SalaryResults {
  grossEarning: number;
  grossDeduction: number;
  epf: number;
  employerEpf: number;
  etf: number;
  apit: number;
  takeHomeSalary: number;
  ctc: number;
}

interface SalaryContextType {
  basicSalary: number;
  setBasicSalary: (salary: number) => void;
  earnings: EarningDeduction[];
  addEarning: (earning: EarningDeduction) => void;
  updateEarning: (index: number, earning: EarningDeduction) => void;
  removeEarning: (index: number) => void;
  deductions: EarningDeduction[];
  addDeduction: (deduction: EarningDeduction) => void;
  updateDeduction: (index: number, deduction: EarningDeduction) => void;
  removeDeduction: (index: number) => void;
  toggleEpfEtf: (index: number, type: 'earning' | 'deduction') => void;
  results: SalaryResults;
  resetForm: () => void;
  clearForm: () => void;
}

const defaultContextValue: SalaryContextType = {
  basicSalary: 0,
  setBasicSalary: () => {},
  earnings: [],
  addEarning: () => {},
  updateEarning: () => {},
  removeEarning: () => {},
  deductions: [],
  addDeduction: () => {},
  updateDeduction: () => {},
  removeDeduction: () => {},
  toggleEpfEtf: () => {},
  results: {
    grossEarning: 0,
    grossDeduction: 0,
    epf: 0,
    employerEpf: 0,
    etf: 0,
    apit: 0,
    takeHomeSalary: 0,
    ctc: 0
  },
  resetForm: () => {},
  clearForm: () => {}
};

export const SalaryContext = createContext<SalaryContextType>(defaultContextValue);

export const SalaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState<EarningDeduction[]>([]);
  const [deductions, setDeductions] = useState<EarningDeduction[]>([]);
  const [results, setResults] = useState<SalaryResults>({
    grossEarning: 0,
    grossDeduction: 0,
    epf: 0,
    employerEpf: 0,
    etf: 0,
    apit: 0,
    takeHomeSalary: 0,
    ctc: 0
  });

  useEffect(() => {
    const result = calculateNetSalary(basicSalary, earnings, deductions);
    setResults(result);
  }, [basicSalary, earnings, deductions]);

  const addEarning = (earning: EarningDeduction) => {
    setEarnings([...earnings, earning]);
  };

  const updateEarning = (index: number, updatedEarning: EarningDeduction) => {
    const updatedEarnings = [...earnings];
    updatedEarnings[index] = updatedEarning;
    setEarnings(updatedEarnings);
  };

  const removeEarning = (index: number) => {
    setEarnings(earnings.filter((_, i) => i !== index));
  };

  const addDeduction = (deduction: EarningDeduction) => {
    setDeductions([...deductions, deduction]);
  };

  const updateDeduction = (index: number, updatedDeduction: EarningDeduction) => {
    const updatedDeductions = [...deductions];
    updatedDeductions[index] = updatedDeduction;
    setDeductions(updatedDeductions);
  };

  const removeDeduction = (index: number) => {
    setDeductions(deductions.filter((_, i) => i !== index));
  };

  const toggleEpfEtf = (index: number, type: 'earning' | 'deduction') => {
    if (type === 'earning') {
      const updatedEarnings = [...earnings];
      updatedEarnings[index].epfEtf = !updatedEarnings[index].epfEtf;
      setEarnings(updatedEarnings);
    } else {
      const updatedDeductions = [...deductions];
      updatedDeductions[index].epfEtf = !updatedDeductions[index].epfEtf;
      setDeductions(updatedDeductions);
    }
  };

  const resetForm = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };

  const clearForm = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
    setResults({
      grossEarning: 0,
      grossDeduction: 0,
      epf: 0,
      employerEpf: 0,
      etf: 0,
      apit: 0,
      takeHomeSalary: 0,
      ctc: 0
    });
  };

  return (
    <SalaryContext.Provider
      value={{
        basicSalary,
        setBasicSalary,
        earnings,
        addEarning,
        updateEarning,
        removeEarning,
        deductions,
        addDeduction,
        updateDeduction,
        removeDeduction,
        toggleEpfEtf,
        results,
        resetForm,
        clearForm,
      }}
    >
      {children}
    </SalaryContext.Provider>
  );
};
