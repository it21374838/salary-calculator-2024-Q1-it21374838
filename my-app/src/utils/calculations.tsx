export const calculateEpf = (amount: number): number => {
    return amount * 0.08; // Employee's EPF contribution (8%)
  };
  
  export const calculateEmployerEpf = (amount: number): number => {
    return amount * 0.12; // Employer's EPF contribution (12%)
  };
  
  export const calculateEtf = (amount: number): number => {
    return amount * 0.03; // Employer's ETF contribution (3%)
  };
  
  // Updated APIT calculation as per example
  export const calculateApit = (amount: number): number => {
    return (amount * 0.18) - 25500; // APIT (18%) minus constant 25500
  };
  
  export const calculateNetSalary = (basicSalary: number, earnings: any[], deductions: any[]) => {
    let grossEarning = basicSalary;
    let grossEarningForEpfEtf = basicSalary;
    let grossDeduction = 0;
    let epf = 0;
    let employerEpf = 0;
    let etf = 0;
  
    // Calculate gross earnings and EPF/ETF applicable earnings
    earnings.forEach(earning => {
      grossEarning += earning.amount;
      if (earning.epfEtf) {
        grossEarningForEpfEtf += earning.amount;
      }
    });
  
    // Calculate deductions
    deductions.forEach(deduction => {
      grossDeduction += deduction.amount;
    });
  
    const grossSalaryForEpfEtf = grossEarningForEpfEtf - grossDeduction;
  
    // Calculate EPF and ETF
    epf = calculateEpf(grossSalaryForEpfEtf);
    employerEpf = calculateEmployerEpf(grossSalaryForEpfEtf);
    etf = calculateEtf(grossSalaryForEpfEtf);
  
    // Calculate APIT
    const apit = calculateApit(grossEarning);
  
    // Calculate take home salary and CTC
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
  