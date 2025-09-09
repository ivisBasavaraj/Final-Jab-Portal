import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployerDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployerProfile();
    }, [id]);

    const fetchEmployerProfile = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:5000/api/admin/employer-profile/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.success) {
                setProfile(data.profile);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (date) => {
        return date ? new Date(date).toLocaleDateString() : 'N/A';
    };

    if (loading) return <div className="p-3">Loading...</div>;
    if (!profile) return <div className="p-3">Employer profile not found</div>;

    return (
        <div className="panel panel-default site-bg-white p-3">
            <div className="panel-body">
                <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                <h4>Employer Profile Details</h4>
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mt-2"><h6>Company Name</h6><p>{profile.companyName || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Contact Full Name</h6><p>{profile.contactFullName || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Email</h6><p>{profile.email || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Phone</h6><p>{profile.phone || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Official Email</h6><p>{profile.officialEmail || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Official Mobile</h6><p>{profile.officialMobile || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Alternate Contact</h6><p>{profile.alternateContact || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Contact Designation</h6><p>{profile.contactDesignation || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Contact Mobile</h6><p>{profile.contactMobile || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Website</h6><p>{profile.website || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Established Since</h6><p>{profile.establishedSince || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Team Size</h6><p>{profile.teamSize || 'N/A'}</p></div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="mt-2"><h6>Employer Category</h6><p>{profile.employerCategory || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Company Type</h6><p>{profile.companyType || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Industry Sector</h6><p>{profile.industrySector || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Corporate Address</h6><p>{profile.corporateAddress || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Branch Locations</h6><p>{profile.branchLocations || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Legal Entity Code</h6><p>{profile.legalEntityCode || 'N/A'}</p></div>
                        <div className="mt-2"><h6>CIN</h6><p>{profile.cin || 'N/A'}</p></div>
                        <div className="mt-2"><h6>GST Number</h6><p>{profile.gstNumber || 'N/A'}</p></div>
                        <div className="mt-2"><h6>PAN Number</h6><p>{profile.panNumber || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Logo</h6><p>{profile.logo || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Cover Image</h6><p>{profile.coverImage || 'N/A'}</p></div>
                        <div className="mt-2"><h6>Created At</h6><p>{formatDate(profile.createdAt)}</p></div>
                    </div>
                </div>

                <div className="mt-3">
                    <h6>Description</h6>
                    <p>{profile.description || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default EmployerDetails;