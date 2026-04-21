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

    if (!member) return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div className="loader">Loading Profile...</div>
        </div>
    );

    return (
        <div className="container">
            <header style={{ marginBottom: '3rem' }}>
                <Link to="/view" className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
                    ← Back to Team
                </Link>
            </header>

            <div className="details-container">
                <div className="details-image">
                    <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                </div>
                <div className="details-info">
                    <h2>{member.name}</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '2rem' }}>
                        {member.degree} • {member.year}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                        <div>
                            <strong>Roll Number</strong>
                            <p>{member.rollNumber}</p>
                        </div>
                        <div>
                            <strong>Key Certification</strong>
                            <p>{member.certificate}</p>
                        </div>
                        <div>
                            <strong>Latest Internship</strong>
                            <p>{member.internship}</p>
                        </div>
                        <div>
                            <strong>Hobbies</strong>
                            <p>{member.hobbies}</p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <strong>Featured Project</strong>
                        <p>{member.project}</p>
                    </div>

                    <div>
                        <strong>Career Objective</strong>
                        <p>{member.aim}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDetails;

