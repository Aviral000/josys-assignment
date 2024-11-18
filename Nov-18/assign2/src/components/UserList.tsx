import React, { useEffect, useState } from 'react'
import { UserDetail } from '../models/user.model'
import axios from 'axios';

const UserList: React.FC = () => {
const [users, setUsers] = useState<UserDetail[]>([]);
const [selectedUsers, setSelectedUsers] = useState<UserDetail[]>([]);

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
        <select onChange={handleChangeCountry} className='m-8 p-2 border-2 border-black'>
            <option>Select a country</option>
            {getUniqueCountries().map((country, index) => (
                <option key={`${country}-${index}`} value={country}>
                    {country}
                </option>
            ))}
        </select>
      </div>
      <div>
        <table className='w-full text-center'>
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