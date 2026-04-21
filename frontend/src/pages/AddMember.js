import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        year: '',
        degree: '',
        project: '',
        hobbies: '',
        certificate: '',
        internship: '',
        aim: ''
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        if (image) {
            data.append('image', image);
        }

        try {
            await axios.post('http://localhost:5000/api/members', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Member added successfully!');
            navigate('/view');
        } catch (error) {
            console.error('Error adding member:', error);
            alert('Failed to add member');
        }
    };

    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Onboard New Talent</h2>
                <p style={{ color: 'var(--text-muted)' }}>Expand the Droidbots roster with fresh expertise.</p>
            </header>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" onChange={handleChange} placeholder="e.g. John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Roll Number</label>
                            <input type="text" name="rollNumber" onChange={handleChange} placeholder="e.g. 21BCS1234" required />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label>Year of Study</label>
                            <input type="text" name="year" onChange={handleChange} placeholder="e.g. 3rd Year" required />
                        </div>
                        <div className="form-group">
                            <label>Degree</label>
                            <input type="text" name="degree" onChange={handleChange} placeholder="e.g. B.Tech CSE" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Major Project</label>
                        <textarea name="project" onChange={handleChange} placeholder="Describe your primary project..." rows="3" required></textarea>
                    </div>

                    <div className="form-group">
                        <label>Hobbies</label>
                        <input type="text" name="hobbies" onChange={handleChange} placeholder="Coding, Robotics, Gaming..." required />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label>Key Certification</label>
                            <input type="text" name="certificate" onChange={handleChange} placeholder="e.g. AWS Cloud Practitioner" required />
                        </div>
                        <div className="form-group">
                            <label>Recent Internship</label>
                            <input type="text" name="internship" onChange={handleChange} placeholder="e.g. Google Summer of Code" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Professional Aim</label>
                        <textarea name="aim" onChange={handleChange} placeholder="What are your career goals?" rows="3" required></textarea>
                    </div>

                    <div className="form-group">
                        <label>Profile Portrait</label>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <input type="file" onChange={handleImageChange} required style={{ flex: 1 }} />
                            {preview && <img src={preview} alt="Preview" style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', border: '2px solid var(--primary)' }} />}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', height: '3.5rem', fontSize: '1.1rem' }}>
                        Confirm Onboarding
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMember;

