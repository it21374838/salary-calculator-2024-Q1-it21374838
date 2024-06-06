import React from 'react';
import { SalaryProvider } from './contexts/SalaryContext';
import SalaryInput from './components/SalaryInput';
import EarningsDeductions from './components/EarningsDeductions';
import Controls from './components/Controls';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <SalaryProvider>
      <div>
        <SalaryInput />
        <EarningsDeductions />
        <Controls />
        <Results />
      </div>
    </SalaryProvider>
  );
};

export default App;
