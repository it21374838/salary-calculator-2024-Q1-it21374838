import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";

const Controls: React.FC = () => {
  const { resetForm, clearForm } = useContext(SalaryContext);

  return (
    <div>
      <button onClick={resetForm}>Reset</button>
      <button onClick={clearForm}>Clear</button>
    </div>
  );
};

export default Controls;
