import React from 'react';
import ComplaintList from '../components/ComplaintList';
import ComplaintForm from '../components/ComplaintForm';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ComplaintForm />
            <ComplaintList />
        </div>
    );
};

export default Dashboard;