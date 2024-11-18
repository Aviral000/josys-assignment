import {useReducer} from 'react';

interface State {
   count: number 
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p className='p-3 text-xl font-sans'>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "setCount", value: state.count + 5 })} className='border-2 p-4'>Add 5</button>
      <button onClick={() => dispatch({ type: "reset" })} className='border-2 p-4'>Reset</button>
    </div>
  );
}
