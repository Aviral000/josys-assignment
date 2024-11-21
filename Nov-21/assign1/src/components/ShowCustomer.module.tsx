import React, { useEffect, useState } from "react";
import { Customer, customerServices } from "../services/Customer.service";
import FilterCustomer from "./FilterCustomer.module";

const ShowCustomer: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [topCustomers, setTopCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    customerServices
      .getAllCustomers()
      .then((data) => {
        setCustomers(data);
        setFilteredCustomers(data);
      })
      .catch(console.error);

    customerServices
      .getTopFiveCustomer()
      .then(setTopCustomers)
      .catch(console.error);
  }, []);

  const handleFilter = (
    city: string | null,
    sort: "asc" | "desc" | "Top 5" | null
  ) => {
    let filtered = [...customers];

    if (city) {
      filtered = filtered.filter((customer) => customer.city === city);
    }

    if (sort) {
      filtered.sort((a, b) =>
        sort === "asc"
          ? a.totalPurchasesPerYear - b.totalPurchasesPerYear
          : b.totalPurchasesPerYear - a.totalPurchasesPerYear
      );
    }

    setFilteredCustomers(filtered);
    setShowFilter(false);
  };

  const handleDelete = (customerId: number) => {
    customerServices
      .deleteCustomer(customerId)
      .then(() => {
        const updatedCustomers = customers.filter(
          (customer) => customer.customerId !== customerId
        );
        setCustomers(updatedCustomers);
        setFilteredCustomers(updatedCustomers);
      })
      .catch(console.error);
  };

  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-4">Customer List</h1>
        <button
          onClick={() => setShowFilter(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 mb-4"
        >
          Filter Customers
        </button>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Customer ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Contact Number</th>
              <th className="border border-gray-300 px-4 py-2">
                Total Purchases Per Year
              </th>
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.customerId}>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.customerId}
                </td>
                <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                <td className="border border-gray-300 px-4 py-2">{customer.city}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.contactNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.totalPurchasesPerYear}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.photo ? (
                    <img
                      src={customer.photo}
                      alt={`${customer.name}'s`}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ) : (
                    <img
                      src="https://logodix.com/logo/1070509.png"
                      alt={`${customer.name}'s`}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(customer.customerId)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:opacity-90"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showFilter && <FilterCustomer onFilter={handleFilter} />}
      </div>

      <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-lg fixed right-10">
        <h2 className="text-lg font-bold mb-4">Top 5 Customers</h2>
        <div className="space-y-4">
          {topCustomers.map((customer) => (
            <div
              key={customer.customerId}
              className="flex items-center space-x-4 border p-3 rounded-lg bg-white"
            >
              <img
                src={customer.photo || "https://logodix.com/logo/1070509.png"}
                alt={`${customer.name}'s`}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-md font-medium">{customer.name}</h3>
                <p className="text-sm text-gray-600">{customer.contactNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCustomer;
