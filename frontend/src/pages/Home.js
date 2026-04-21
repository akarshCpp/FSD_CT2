import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <header style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50, #3498db)', color: 'white', borderRadius: '15px', marginBottom: '2rem' }}>
                <h1>DROIDBOTS</h1>
                <p>Welcome to the official team management portal for Team Droidbots.</p>
                <div style={{ marginTop: '2rem' }}>
                    <Link to="/add" className="btn btn-primary">Add New Member</Link>
                    <Link to="/view" className="btn btn-secondary">View Team Members</Link>
                </div>
            </header>

            <section style={{ marginTop: '3rem' }}>
                <h2>Meet Our Team</h2>
                <p>We are a dedicated group of students working on innovative full-stack development projects.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px' }}>
                        <h3>Akarsh Anubhav</h3>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px' }}>
                        <h3>Jay Kumar</h3>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px' }}>
                        <h3>Shikhar Shukla</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
