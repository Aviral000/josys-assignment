import React, { useReducer, useState } from "react";

interface Bank {
  money: number;
}

type ActionType =
  | { type: "deposit"; addSum: number }
  | { type: "withdraw"; minSum: number };

const initialState: Bank = { money : 0 };

const reducer = (state: Bank, action: ActionType): Bank => {
  switch (action.type) {
    case "deposit":
      return { money: state.money + action.addSum };
    case "withdraw":
      return { money: state.money - action.minSum };
    default:
      return state;
  }
};

const BankApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [deposit, setDeposit] = useState<number>(0);
  const [withdraw, setWithdraw] = useState<number>(0);

  const handleDeposit = () => {
    dispatch({ type: "deposit", addSum: deposit });
    setDeposit(0);
  };

  const handleWithdraw = () => {
    dispatch({ type: "withdraw", minSum: withdraw });
    setWithdraw(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4">Bank Account</h1>
        <p className="text-center text-lg font-semibold mb-4">Current Balance: <span className="text-green-600">${state.money}</span></p>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">Deposit Money:</label>
          <div className="flex space-x-2">
            <input type="number" value={deposit} onChange={(e) => setDeposit(Number.parseInt(e.target.value))}
              className="border border-gray-300 rounded-md p-2 flex-1"
              placeholder="Enter deposit amount"
            />
            <button
              onClick={handleDeposit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Deposit
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">Withdraw Money:</label>
          <div className="flex space-x-2">
            <input type="number" value={withdraw} onChange={(e) => setWithdraw(Number.parseInt(e.target.value))}
              className="border border-gray-300 rounded-md p-2 flex-1"
              placeholder="Enter withdrawal amount"
            />
            <button onClick={handleWithdraw}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankApp;
