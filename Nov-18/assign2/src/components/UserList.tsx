import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { UserDetail } from '../models/user.model'
import axios from 'axios';
import gsap from 'gsap';

const UserList: React.FC = () => {
const [users, setUsers] = useState<UserDetail[]>([]);
const [selectedUsers, setSelectedUsers] = useState<UserDetail[]>([]);
const selectRef = useRef<HTMLSelectElement>(null);
const tableRef = useRef<HTMLTableElement>(null);

useLayoutEffect(() => {
    gsap.fromTo(selectRef.current, {
        x: "+100vw",
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'bounce.inOut'
    });

    gsap.fromTo(tableRef.current, {
        y: "50vh",
        opacity: 0
    }, {
        y: 0,
        delay: 2,
        opacity: 1,
        duration: 2
    });
}, [])

const getData = async () => {
    try {
        const response = await axios.get('https://www.w3schools.com/angular/customers.php');
        // console.log(response.data.records);
        setUsers(response.data.records);
    } catch (error) {
        alert("Server side Error");
        return;
    }
}

useEffect(() => {
    getData();
}, [])

const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value)
    if(e.target.value !== "Select a country") {
        const filterData = users.filter(user => user.Country === e.target.value);
        setSelectedUsers(filterData);
    } else {
        setSelectedUsers([]);
    }
}

const UserDisplay = () => {
    return selectedUsers.length === 0 ? (users.map((user, index) => (
        <tr className={index % 2 === 0 ? "bg-orange-200 text-xl border-2 border-black" : "bg-orange-400 text-xl border-2 border-black"}>
            <td>{user.Name}</td>
            <td>{user.City}</td>
            <td>{user.Country}</td>
        </tr>
    ))) : (selectedUsers.map((user, index) => (
        <tr className={index % 2 === 0 ? "bg-orange-200 text-xl border-2 border-black" : "bg-orange-400 text-xl border-2 border-black"}>
            <td>{user.Name}</td>
            <td>{user.City}</td>
            <td>{user.Country}</td>
        </tr>
    )))
}

const getUniqueCountries = () => {
    const countries = users.map((user) => user.Country);
    return Array.from(new Set(countries));
};

  return (
    <div>
      <div>
        <select onChange={handleChangeCountry} className='m-8 p-2 border-2 border-black' ref={selectRef}>
            <option>Select a country</option>
            {getUniqueCountries().map((country, index) => (
                <option key={`${country}-${index}`} value={country}>
                    {country}
                </option>
            ))}
        </select>
      </div>
      <div>
        <table className='w-full text-center' ref={tableRef}>
            <thead className='bg-orange-600 text-3xl font-light border-2 border-black'>
                <tr>
                    <th>Customer Name</th>
                    <th>City Name</th>
                    <th>Country Name</th>
                </tr>
            </thead>
            <tbody>
                {UserDisplay()}
            </tbody>
        </table>
      </div>
    </div>
  )
}

const UserListMemo = React.memo(UserList);

export default UserListMemo;