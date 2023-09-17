import React, { useState } from 'react';

export const MoneyForm = () => {
  const [total, setTotal] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [salary, setSalary] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <p>Total:{total}</p>
      <input
        type="number"
        placeholder="Years..."
        style={{ height: '40px' }}
        onChange={(e) => setYears(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Years Salary..."
        style={{ height: '40px' }}
        onChange={(e) => setSalary(+e.target.value)}
      />
      <button type="button" onClick={() => setTotal(years * salary)}>
        Calculate Total
      </button>
    </div>
  );
};
