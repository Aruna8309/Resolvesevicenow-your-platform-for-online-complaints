import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComplaintDetails } from '../services/api';

const ComplaintDetails = () => {
    const { id } = useParams();
    const [complaint, setComplaint] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComplaintDetails = async () => {
            try {
                const data = await getComplaintDetails(id);
                setComplaint(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComplaintDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Complaint Details</h2>
            {complaint ? (
                <div>
                    <h3>{complaint.title}</h3>
                    <p>{complaint.description}</p>
                    <p>Status: {complaint.status}</p>
                    <p>Submitted by: {complaint.user}</p>
                </div>
            ) : (
                <p>No complaint found.</p>
            )}
        </div>
    );
};

export default ComplaintDetails;