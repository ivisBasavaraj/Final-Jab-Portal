
import React, { useEffect, useState } from "react";
import { loadScript } from "../../../../../globals/constants";
import { NavLink, useNavigate } from "react-router-dom";
import { employer, empRoute } from "../../../../../globals/route-names";

export default function EmpPostedJobs() {
	const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadScript("js/custom.js");
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('employerToken');
            if (!token) return;

            const response = await fetch('http://localhost:5000/api/employer/jobs', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (response.ok) {
                const data = await response.json();
                setJobs(data.jobs);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
    };

    const getStatusBadge = (status) => {
        return status === 'active' ? 'twm-bg-green' : 'twm-bg-red';
    };

	return (
		<>
			<div className="wt-admin-right-page-header clearfix">
				<h2>Jobs Posted</h2>
			</div>

			<div className="panel panel-default site-bg-white p-3">
				<div className="panel-heading wt-panel-heading mb-3 d-flex justify-content-between">
                    <div>
                        <h4 className="panel-tittle">
                            <i className="far fa-list-alt" /> Job Details
                        </h4>

                        <p className="text-muted">Review and manage jobs details</p>
                    </div>
					
                    <div className="text-left">
                        <NavLink to={empRoute(employer.POST_A_JOB)}>
                            <button type="submit" className="site-button">
                                Post Job
                            </button>
                        </NavLink>
                    </div>
				</div>

				<div className="panel-body wt-panel-body">
					<div className="mb-3 d-flex justify-content-between align-items-center">
						<input
							type="text"
							className="form-control w-25"
							placeholder="Search jobs..."
						/>
						<div className="dropdown">
							<button
								className="btn btn-outline-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
							>
								Job Post Status
							</button>

							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Active
									</a>
								</li>

								<li>
									<a className="dropdown-item" href="#">
										Inactive
									</a>
								</li>
							</ul>
						</div>
					</div>

					{loading ? (
						<div className="text-center py-4">
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<div className="row">
							{jobs.length === 0 ? (
								<div className="col-12 text-center py-4">
									<p className="text-muted">No jobs posted yet.</p>
									<NavLink to={empRoute(employer.POST_A_JOB)}>
										<button className="site-button">Post Your First Job</button>
									</NavLink>
								</div>
							) : (
								jobs.map((job) => (
									<div className="col-lg-6 col-12" key={job._id}>
										<div className="d-flex justify-content-between align-items-center p-3 border rounded mb-3 shadow-sm">
											<div className="d-flex align-items-center gap-3">
												<div>
													<h5 className="mb-1">{job.title}</h5>
													<p className="mb-0 text-muted">{job.location}</p>
													<small className="text-muted">
														{job.salary ? `₹ ${job.salary}` : 'Salary not specified'}
													</small><br/>
													<small className="text-muted">
														Posted {formatDate(job.createdAt)}
													</small>
												</div>
											</div>
											<div className="d-flex align-items-center gap-3">
												<span className={`badge ${getStatusBadge(job.status)} text-capitalize`}>
													{job.status}
												</span>
												<button
													className="btn btn-outline-primary btn-sm"
													onClick={() => navigate(`/employer/emp-job-review/${job._id}`)}
												>
													<i className="fa fa-eye me-1" /> View Details
												</button>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

