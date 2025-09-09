import React, { useState, useEffect } from "react";
import { api } from "../../../../../utils/api";

function SectionCandicateBasicInfo() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        profilePicture: null
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await api.getCandidateProfile();
            if (response.success && response.profile) {
                setFormData({
                    name: response.profile.name || '',
                    phone: response.profile.phone || '',
                    email: response.profile.email || '',
                    profilePicture: null
                });
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            profilePicture: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        
        console.log('Form data being sent:', formData);
        
        try {
            const response = await api.updateCandidateProfile(formData);
            console.log('API response:', response);
            if (response.success) {
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile: ' + (response.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="panel panel-default">
                <div className="panel-body p-a20 text-center">
                    Loading profile...
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="panel panel-default">
                <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Basic Information</h4>
                </div>
                <div className="panel-body wt-panel-body p-a20 m-b30">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Profile Picture</label>
                            <input 
                                className="form-control" 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Full Name (As per records)</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter full name"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Mobile Number</label>
                            <input
                                className="form-control"
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter mobile number"
                            />
                        </div>

                        <div className="col-md-6">
                            <label>Email ID</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="text-left mt-4">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={saving}
                        >
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SectionCandicateBasicInfo;