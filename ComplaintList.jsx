import React, { useEffect, useState } from 'react';
import { fetchComplaints } from '../services/api';

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const getComplaints = async () => {
            const data = await fetchComplaints();
            setComplaints(data);
        };

        getComplaints();
    }, []);

    return (
        <div>
            <h2>Submitted Complaints</h2>
            <ul>
                {complaints.map((complaint) => (
                    <li key={complaint._id}>
                        <h3>{complaint.title}</h3>
                        <p>{complaint.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComplaintList;