import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <header className="hero">
                <h1>DROIDBOTS</h1>
                <p>Empowering the next generation of full-stack innovators. Manage your team with precision and style.</p>
                <div className="hero-btns">
                    <Link to="/add" className="btn btn-primary">
                        <span>Get Started</span>
                    </Link>
                    <Link to="/view" className="btn btn-secondary">
                        <span>Meet the Team</span>
                    </Link>
                </div>
            </header>

            <section className="highlights">
                <h2>Our Mission</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Droidbots is a dedicated collective of developers pushing the boundaries of full-stack engineering. 
                    We focus on creating scalable, high-performance web applications that solve real-world problems.
                </p>
                <div className="member-grid">
                    {['Akarsh Anubhav', 'Jay Kumar', 'Shikhar Shukla'].map((name) => (
                        <div key={name} className="member-card" style={{ minHeight: 'auto' }}>
                            <div className="member-info" style={{ textAlign: 'center' }}>
                                <h3 style={{ margin: 0 }}>{name}</h3>
                                <p style={{ margin: '0.5rem 0 0', color: 'var(--primary)' }}>Lead Developer</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

