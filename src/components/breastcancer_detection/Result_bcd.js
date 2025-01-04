
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result2 = () => {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div>
      <h1>Breast Cancer Detection Result</h1>
      <p>{result ? `Breast Cancer Detected: ${result.pcos}` : 'No result available'}</p>
    </div>
  );
};

export default Result2;
