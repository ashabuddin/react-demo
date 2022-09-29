import React, { useState } from 'react'

const useCounter = ({initial = 0, lowerBound = 0, upperBound = 10 }) => {
  const [count, setCount] = useState(initial);

  const handleInc = () => {
      if (count < 10) {
          setCount(count + 1);
      }
  };

  const handleDec = () => {
      if (count > 0) {
          setCount(count - 1);
      }
  };

  return {
      count,
      lowerBound,
      upperBound,
      handleInc,
      handleDec,
  };

}

export default useCounter