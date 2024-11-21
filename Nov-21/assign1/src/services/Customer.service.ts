import axios from "axios";
import { config } from "../util/url.util";

export interface Customer {
    customerId: number,
    name: string,
    city: string,
    contactNumber: string,
    year: string,
    photo?: string,
    totalPurchasesPerYear: number
}

const validationPhone = (phone:string): boolean => {
    if(phone.length !== 10) {
        return false;
    }
    return true;
}

const validateId = async (customerId: number): Promise<boolean> => {
    const allCustomer = await getAllCustomers();

    const duplicateId: number = allCustomer.findIndex((customer) => customer.customerId === customerId);
    if(duplicateId === -1) {
        return false;
    }
    return true;
}

const validatePhoneNumber = async (phone: string): Promise<boolean> => {
    const allCustomer = await getAllCustomers();

    const duplicateId: number = allCustomer.findIndex((customer) => customer.contactNumber === phone);
    if(duplicateId === -1) {
        return false;
    }
    return true;
}

const getAllCustomers = async ():Promise<Customer[]> => {
    try {
        const response = await axios.get<Customer[]>(`${config.url}/customer`);
        const sortedData = response.data.sort((a,b) => a.customerId - b.customerId);
        return sortedData;
    } catch (error) {
        throw new Error("Fetching failed from server side");
    }
}

const getCustumerById = async(customerId: number):Promise<Customer> => {
    try {
        const response = await axios.get<Customer>(`${config.url}/customer/${customerId}`);
        return response.data;
    } catch (error) {
        throw new Error("Fetching via ID failed from server side");
    }
}

const addCustomer = async (customerObj: Customer): Promise<string> => {
    if (!validationPhone(customerObj.contactNumber)) {
        throw new Error("Validation failed: Please check the phone number, 10 digit is mandatory");
    }
    if (await validateId(customerObj.customerId)) {
        throw new Error("Validation failed: Customer ID is already in use.");
    }
    if (await validatePhoneNumber(customerObj.contactNumber)) {
        throw new Error("Validation failed: Phone number is already in use.");
    }
    try {
        await axios.post<Customer>(`${config.url}/customer`, customerObj);
        return `${customerObj.customerId}`;
    } catch (error) {
        throw new Error("Data creation failed: Customer might already exist.");
    }
};

const updateCustomer = async (customerObj:Customer):Promise<Customer> => {
    try {
        const response = await axios.put<Customer>(`${config.url}/customer/${customerObj.customerId}`, customerObj);
        return response.data;
    } catch (error) {
        throw new Error("Updation failed from server side");
    }
}

const deleteCustomer = async (customerId:number):Promise<void> => {
    try {
        await axios.delete<Customer>(`${config.url}/customer/${customerId}`);
    } catch (error) {
        throw new Error("Deletion failed from server side");
    }
}

const getUniqueCities = async (): Promise<string[]> => {
    try {
        const customers = await getAllCustomers();
        const cities = Array.from(new Set(customers.map((customer) => customer.city)));
        return cities;
    } catch (error) {
        throw new Error("Failed to fetch cities.");
    }
};

const getTopFiveCustomer = async (): Promise<Customer[]> => {
    try {
        const customers = await getAllCustomers();
        return customers.sort((a,b) => b.totalPurchasesPerYear - a.totalPurchasesPerYear).slice(0, 5);
    } catch (error) {
        throw new Error("Failed to fetch top customer.");
    }
}

export const customerServices = {
    getAllCustomers,
    getCustumerById,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getUniqueCities,
    getTopFiveCustomer
}