import React, { useState } from "react";
import useStorage from "../utils/useStorage";

const StorageExample: React.FC = () => {
    const [userInput, setUserInput] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const { storedData, add, get, remove, clear } = useStorage("", []);
    const [displayStored, setDisplayStored] = useState<Boolean>(false);
    const [getDataKey, setGetDataKey] = useState<string>("");
    const [getDataValue, setGetDataValue] = useState<string|null>("");

    const addData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        add(userId, userInput);
    }

    const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const changeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }

    const showData = () => {
        setDisplayStored(!displayStored);
    }

    const getRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetDataKey(e.target.value);
    }

    const getData = () => {
        setGetDataValue("");
        const s = get(getDataKey);
        setGetDataValue(s);
    }

    return (
        <div>
            <h1 className="text-3xl font-sans">Storage Example</h1>
            <label>key:</label>
            <input type="text " onChange={changeKey} value={userId} className="border-2 border-black m-5" />
            <label>data:</label>
            <input type="text" onChange={changeData} value={userInput} className="border-2 border-black m-5" />
            <button onClick={addData} className="p-5 border-2 border-black">
                Add User
            </button>
            <button onClick={clear} className="p-5 border-2 border-black ml-2">Clear Storage</button>
            <button onClick={showData} className="p-5 border-2 border-black ml-2">{displayStored ? "Hide Data":"Show Data"}</button>
            {displayStored && <ul>
                {storedData.datas.map((item, index) => (
                <li key={index}>
                    {JSON.stringify(item)}{" "}
                    <button onClick={() => remove(item.key)} className="p-1 border-2 border-black text-red-500">Remove</button>
                </li>
                ))}
            </ul>}
            <div>
                <input type="text" onChange={getRequestChange} value={getDataKey} className="border-2 border-black m-5" />
                <button onClick={getData} className="p-5 border-2 border-black ml-2">Get Data</button>
                {getDataValue !== null && (
                    <>
                        <p>{getDataValue}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default StorageExample;
