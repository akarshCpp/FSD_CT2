import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>The Droidbots Core</h2>
                <p style={{ color: 'var(--text-muted)' }}>The exceptional minds behind our innovative solutions.</p>
            </header>
            
            <div className="member-grid">
                {members.map(member => (
                    <div key={member._id} className="member-card">
                        <div className="card-image-wrapper" style={{ overflow: 'hidden' }}>
                            <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p><strong>ID:</strong> {member.rollNumber}</p>
                            <Link to={`/member/${member._id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                                View Profile
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {members.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>No team members found yet.</p>
                    <Link to="/add" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Add First Member</Link>
                </div>
            )}
        </div>
    );
};

export default ViewMembers;

