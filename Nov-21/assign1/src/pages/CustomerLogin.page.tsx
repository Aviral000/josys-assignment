import React from 'react'
import CustomerForm from '../components/Customer.module';
import Header from '../components/Header.module';

const CustomerLogin: React.FC = () => {
    return (
        <div>
            <Header />
            <CustomerForm />
        </div>
    )
}

export default CustomerLogin;