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
            <h2>MEET OUR AMAZING TEAM</h2>
            <div className="member-grid">
                {members.map(member => (
                    <div key={member._id} className="member-card">
                        <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p><strong>Roll Number:</strong> {member.rollNumber}</p>
                            <Link to={`/member/${member._id}`} className="btn btn-secondary">VIEW DETAILS</Link>
                        </div>
                    </div>
                ))}
            </div>
            {members.length === 0 && <p>No members found. Add some members to see them here!</p>}
        </div>
    );
};

export default ViewMembers;
