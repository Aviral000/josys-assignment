import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
const [count, setCount] = useState<number>(0);

const triggerCount = useCallback(() => {
    setCount((prev) => prev + 1);
}, []);

  return (
    <div>
      <button onClick={triggerCount}>+</button>
      <div>{count}</div>
      <ChildComponent />
    </div>
  )
}

export default ParentComponent;