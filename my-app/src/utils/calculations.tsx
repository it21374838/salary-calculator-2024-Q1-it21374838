export const calculateEpf = (amount: number): number => {
    return amount * 0.08; // Employee's EPF contribution (8%)
  };
  
  export const calculateEmployerEpf = (amount: number): number => {
    return amount * 0.12; // Employer's EPF contribution (12%)
  };
  
  export const calculateEtf = (amount: number): number => {
    return amount * 0.03; // Employer's ETF contribution (3%)
  };
  
  export const calculateApit = (amount: number): number => {
    return amount * 0.1; // APIT (10%)
  };
  
  export const calculateNetSalary = (basicSalary: number, earnings: any[], deductions: any[]) => {
    let grossEarning = basicSalary;
    let grossDeduction = 0;
    let epf = 0;
    let employerEpf = 0;
    let etf = 0;
  
    earnings.forEach(earning => {
      grossEarning += earning.amount;
      if (earning.epfEtf) {
        epf += calculateEpf(earning.amount);
        employerEpf += calculateEmployerEpf(earning.amount);
        etf += calculateEtf(earning.amount);
      }
    });
  
    deductions.forEach(deduction => {
      grossDeduction += deduction.amount;
      if (deduction.epfEtf) {
        epf += calculateEpf(deduction.amount);
        employerEpf += calculateEmployerEpf(deduction.amount);
        etf += calculateEtf(deduction.amount);
      }
    });
  
    const apit = calculateApit(grossEarning);
    const takeHomeSalary = grossEarning - grossDeduction - epf - apit;
    const ctc = grossEarning + employerEpf + etf;
  
    return {
      grossEarning,
      grossDeduction,
      epf,
      employerEpf,
      etf,
      apit,
      takeHomeSalary,
      ctc,
    };
  };