// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Result = () => {
//   const location = useLocation();
//   const { result } = location.state || {};

//   return (
//     <div>
//       <h1>PCOS Detection Result</h1>
//       <p>{result ? `PCOS Detected: ${result.pcos}` : 'No result available'}</p>
//     </div>
//   );
// };

// export default Result;
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div>
      <h1>PCOS Detection Result</h1>
      <p>{result ? `PCOS Detected: ${result.pcos}` : 'No result available'}</p>
    </div>
  );
};

export default Result;
