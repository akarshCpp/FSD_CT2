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
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
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
            <h2>Add Team Member</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Roll Number</label>
                        <input type="text" name="rollNumber" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" name="year" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Degree</label>
                        <input type="text" name="degree" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>About Project</label>
                        <textarea name="project" onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Hobbies (comma separated)</label>
                        <input type="text" name="hobbies" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Certificate</label>
                        <input type="text" name="certificate" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Internship</label>
                        <input type="text" name="internship" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>About Your Aim</label>
                        <textarea name="aim" onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Profile Image</label>
                        <input type="file" onChange={handleImageChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default AddMember;
