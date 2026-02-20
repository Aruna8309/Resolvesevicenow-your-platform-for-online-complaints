import React from 'react';
import Navbar from '../components/Navbar';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintList from '../components/ComplaintList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to ResolveServiceNow</h1>
            <ComplaintForm />
            <ComplaintList />
        </div>
    );
};

export default Home;