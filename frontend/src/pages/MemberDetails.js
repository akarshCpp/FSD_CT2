import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/members/${id}`);
                setMember(response.data);
            } catch (error) {
                console.error('Error fetching member details:', error);
            }
        };
        fetchMember();
    }, [id]);

    if (!member) return <div className="container">Loading...</div>;

    return (
        <div className="container">
            <h2>{member.name}'s Profile</h2>
            <div className="details-container">
                <div className="details-image">
                    <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                </div>
                <div className="details-info">
                    <p><strong>Roll Number:</strong> {member.rollNumber}</p>
                    <p><strong>Year:</strong> {member.year}</p>
                    <p><strong>Degree:</strong> {member.degree}</p>
                    <p><strong>Project:</strong> {member.project}</p>
                    <p><strong>Hobbies:</strong> {member.hobbies}</p>
                    <p><strong>Certificate:</strong> {member.certificate}</p>
                    <p><strong>Internship:</strong> {member.internship}</p>
                    <p><strong>Aim:</strong> {member.aim}</p>
                    <Link to="/view" className="btn btn-primary">Back to Team</Link>
                </div>
            </div>
        </div>
    );
};

export default MemberDetails;
