import React, { useState } from "react";
import { Customer, customerServices } from "../services/Customer.service";
import { useNavigate } from "react-router-dom";

const CustomerForm: React.FC = () => {
  const [customerForm, setCustomerForm] = useState<Customer>({
    customerId: 0,
    name: "",
    city: "",
    contactNumber: "",
    year: "",
    totalPurchasesPerYear: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerForm((prevForm) => ({
      ...prevForm,
      [name]: name === "customerId" || name === "totalPurchasesPerYear" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await customerServices.addCustomer(customerForm);
      alert(`Customer has been created successfully with ID: ${response}`);
      setCustomerForm({
        customerId: 0,
        name: "",
        city: "",
        contactNumber: "",
        year: "",
        totalPurchasesPerYear: 0,
      });
      navigate('/');
    } catch (error: any) {
      alert(error.message || "An error occurred while adding the customer.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Add Customer</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Customer ID</label>
          <input
            type="number"
            name="customerId"
            value={customerForm.customerId === 0 ? "" : customerForm.customerId}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Customer ID"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={customerForm.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={customerForm.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter City"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={customerForm.contactNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Contact Number"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="text"
            name="year"
            value={customerForm.year}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Year"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Photo url</label>
          <input
            type="url"
            name="photo"
            value={customerForm.photo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Photo online url"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Total Purchases Per Year</label>
          <input
            type="number"
            name="totalPurchasesPerYear"
            value={customerForm.totalPurchasesPerYear === 0 ? "" : customerForm.totalPurchasesPerYear}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Total Purchases Per Year"
            required
          />
        </div>
        <button
          type="submit"
          className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:opacity-90 focus:ring focus:ring-blue-300"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
