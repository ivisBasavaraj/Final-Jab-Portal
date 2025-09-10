import JobZImage from "../../../../common/jobz-img";
import { NavLink, useNavigate } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../common/section-pagination";
import { useState, useEffect } from "react";

function SectionJobsGrid({ filters }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobs();
    }, [filters]);

    const fetchJobs = async () => {
        try {
            const params = new URLSearchParams();
            if (filters?.keyword) params.append('search', filters.keyword);
            if (filters?.location) params.append('location', filters.location);
            if (filters?.jobTitle) params.append('title', filters.jobTitle);
            if (filters?.jobType?.length > 0) {
                filters.jobType.forEach(type => params.append('jobType', type));
            }
            
            const response = await fetch(`http://localhost:5000/api/public/jobs?${params.toString()}`);
            const data = await response.json();
            console.log('Jobs API response:', data);
            if (data.success) {
                setJobs(data.jobs || data.data || []);
            } else {
                console.error('API returned error:', data.message);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyClick = (jobId) => {
        const candidateToken = localStorage.getItem('candidateToken');
        if (candidateToken) {
            navigate(`/job-detail/${jobId}`);
        } else {
            setShowLoginModal(true);
        }
    };

    const handleLogin = () => {
        navigate('/candidate-login');
    };

    if (loading) {
        return <div className="text-center p-5">Loading jobs...</div>;
    }

    return (
        <>
            <div className="row">
                {jobs.length > 0 ? jobs.map((job) => (
                    <div key={job._id} className="col-lg-6 col-md-12 m-b30">
                        <div className="twm-jobs-grid-style1">
                            <div className="twm-media">
                                {job.employerProfile?.logo ? (
                                    <img src={job.employerProfile.logo} alt="Company Logo" />
                                ) : (
                                    <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                                )}
                            </div>

                            <div className="twm-jobs-category green">
                                <span className={`twm-bg-${job.status === 'active' ? 'green' : 'gray'}`}>
                                    {job.status === 'active' ? 'Active' : 'Closed'}
                                </span>
                            </div>

                            <div className="twm-mid-content">
                                <NavLink to={`${publicUser.jobs.DETAIL1}/${job._id}`} className="twm-job-title">
                                    <h4>{job.title}</h4>
                                </NavLink>
                                <div className="twm-job-address">
                                    <i className="feather-map-pin" />
                                    &nbsp;{job.location}
                                </div>
                            </div>

                            <div className="twm-right-content twm-job-right-group">
                                <div className="twm-salary-and-apply mb-2">
                                    <div className="twm-jobs-amount">
                                        {job.salary?.min && job.salary?.max ? 
                                            `₹${job.salary.min/1000}K - ${job.salary.max/1000}K` : 
                                            'Salary not specified'
                                        }
                                    </div>
                                    <span className="vacancy-text">Type: {job.jobType}</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="twm-job-address posted-by-company mb-0">
                                        Posted: {new Date(job.createdAt).toLocaleDateString()}
                                    </h6>

                                    <button
                                        onClick={() => handleApplyClick(job._id)}
                                        className="btn btn-sm apply-now-button"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-12 text-center p-5">
                        <h5>No jobs found</h5>
                        <p>Please check back later for new opportunities.</p>
                    </div>
                )}
            </div>
            <SectionPagination />
            
            {/* Login Modal */}
            {showLoginModal && (
                <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login Required</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowLoginModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body text-center p-4">
                                <div className="mb-3">
                                    <i className="fa fa-lock" style={{fontSize: '48px', color: '#2a6310'}}></i>
                                </div>
                                <h4 className="mb-3">Please Login for Applying Job</h4>
                                <p className="text-muted mb-4">You need to be logged in as a candidate to apply for jobs.</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <button 
                                        className="btn btn-primary px-4"
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </button>
                                    <button 
                                        className="btn btn-secondary px-4"
                                        onClick={() => setShowLoginModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SectionJobsGrid;