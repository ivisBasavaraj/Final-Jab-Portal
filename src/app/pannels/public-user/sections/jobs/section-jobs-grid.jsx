import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../common/section-pagination";
import { useState, useEffect } from "react";

function SectionJobsGrid() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/public/jobs');
            const data = await response.json();
            if (data.success) {
                setJobs(data.jobs);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
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
                                <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
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

                                    <NavLink
                                        to={`/job-detail/${job._id}`}
                                        className="btn btn-sm apply-now-button"
                                    >
                                        Apply Now
                                    </NavLink>
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
        </>
    );
}

export default SectionJobsGrid;