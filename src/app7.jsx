// Lecture 42 - React Custom Hooks

import { useState } from "react";
import useCounter from "./hooks/useCounter";

const CountController = (props) => {
  const { count, handleInc, handleDec } = useCounter({ ...props });
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

const App = () => {
  // const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const [counter3, setCounter3] = useState(0);
  // const { count, handleInc, handleDec } = useCounter();

  // const counter1 = useCounter({ lowerBound: -10 });
  // const counter2 = useCounter({ initial: 5, lowerBound: 5, upperBound: 15 });
  // const counter3 = useCounter({ initial: 10, upperBound: 20 });

  // const {
  //   count: count1,
  //   handleInc: handleInc1,
  //   handleDec: handleDec1,
  // } = useCounter();
  // const {
  //   count: count2,
  //   handleInc: handleInc2,
  //   handleDec: handleDec2,
  // } = useCounter();
  // const {
  //   count: count3,
  //   handleInc: handleInc3,
  //   handleDec: handleDec3,
  // } = useCounter();

  return (
    <div>
      {/* <CountController
        count={counter1.count}
        handleInc={counter1.handleInc}
        handleDec={counter1.handleInc}
      />
      <CountController
        count={counter2.count}
        handleInc={counter2.handleInc}
        handleDec={counter2.handleInc}
      />
      <CountController
        count={counter3.count}
        handleInc={counter3.handleInc}
        handleDec={counter3.handleInc}
      /> */}

      <CountController lowerBound={-10} />
      <CountController initial={5} lowerBound={-10} upperBound={15} />
      <CountController initial={10} upperBound={20} />
    </div>
  );
};

export default App;
