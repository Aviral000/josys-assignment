import React, { useEffect, useState } from "react";
import { customerServices } from "../services/Customer.service";

interface FilterProps {
  onFilter: (city: string | null, sort: "asc" | "desc" | null) => void;
}

const FilterCustomer: React.FC<FilterProps> = ({ onFilter }) => {
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  useEffect(() => {
    customerServices.getUniqueCities().then(setCities).catch(console.error);
  }, []);

  const handleFilter = () => {
    onFilter(selectedCity, sortOrder);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Filter Customers</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <select
            value={selectedCity || ""}
            onChange={(e) => setSelectedCity(e.target.value || null)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Total Purchases Per Year
          </label>
          <select
            value={sortOrder || ""}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc" | null)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">None</option>
            <option value="asc">Min to Max</option>
            <option value="desc">Max to Min</option>
          </select>
        </div>

        <button
          onClick={handleFilter}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:opacity-90 focus:ring focus:ring-blue-300"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterCustomer;
