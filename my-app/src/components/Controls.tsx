import React, { useContext } from 'react';
import { SalaryContext } from "../contexts/SalaryContext";
import '../css/controlls.css';

const Controls: React.FC = () => {
    const { resetForm, clearForm } = useContext(SalaryContext);
  
    return (
      <div className="button-container">
        <button onClick={resetForm}>Reset</button>
        <button onClick={clearForm}>Clear</button>
      </div>
    );
  };
  
  export default Controls;
