import { useState } from "react";

interface StoredType {
  datas: any[];
}

const useStorage = (key: string, initialData: any[] = []) => {
    const [storedData, setStoredData] = useState<StoredType>(() => {
        // console.log(key);
        const savedData = localStorage.getItem(key);
        return savedData ? { datas: JSON.parse(savedData) } : { datas: initialData };
    });

  const add = (key: string, data: string) => {
    const formData = {
        key: key,
        data: data
    }
    const updatedData = { datas: [...storedData.datas, formData] };
    setStoredData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData.datas));
  };

  const get = (key: string) => {
    const filterdStorage = storedData.datas.filter((data) =>
        data.key === key
    )
    // console.log(filterdStorage);

    return filterdStorage[0].data;
  }

  const remove = (key: string) => {
    const updatedData = { datas: storedData.datas.filter((data) => data.key !== key) };
    setStoredData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData.datas));
  };

  const clear = () => {
    setStoredData({ datas: [] });
    localStorage.removeItem(key);
  };

  return { storedData, add, get, remove, clear };
};

export default useStorage;
