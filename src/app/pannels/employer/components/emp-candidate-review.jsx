
import { useEffect } from "react";
import JobZImage from "../../../common/jobz-img";
import { loadScript } from "../../../../globals/constants";
import { NavLink, useNavigate } from "react-router-dom";

function EmpCandidateReviewPage () {
	const navigate = useNavigate();

	useEffect(() => {
		loadScript("js/custom.js");
	}, []);

	const candidate = {
		image: "images/candidates/pic1.jpg",
		name: "John Doe",
		email: "john.doe@email.com",
		phone: "+91 90876543221",
		dob: "01-01-2001",
		gender: "Male",
		fatherHusbandName: "Michael Doe",
		motherName: "Stephy Doe",
		residentialAddress: "#56 Sunset Blvd Sahakar Nagar, Bengaluru, 560902",
		permanentAddress: "#56 Sunset Blvd Sahakar Nagar, Bengaluru, 560902",
		correspondenceAddress: "#56 Sunset Blvd Sahakar Nagar, Bengaluru, 560902",
		schoolName1: "Sagar Public School",
		passoutYear1: "2010",
		score1: "90%",
		marksheet1: "",
		schoolName1: "Sagar Public School",
		passoutYear2: "2011",
		score2: "80%",
		marksheet2: "",
		degreeName: "B.Tech",
		collegeName: "International Technical College",
		passoutYear3: "2011",
		score3: "70%",
		marksheet3: "",
		submittedAt: "1/20/2024, 3:30:00 PM",
		resume: "john_doe_resume.pdf",
		status: "under review",
		badgeClass: "twm-bg-light-blue",
	};

	return (
		<>
            <div className="panel panel-default site-bg-white p-3">
                <div className="panel-heading d-flex justify-content-between align-items-center">
                    <h4 className="panel-tittle">
                        <i className="far fa-user-circle" /> Applicant Details
                    </h4>

                    <span className={`badge ${candidate.badgeClass} text-capitalize`}>
                        {candidate.status}
                    </span>
                </div>

                <div className="panel-body">
                    <button
                        className="btn btn-outline-secondary mb-3"
                        onClick={() => navigate(-1)}
                    >
                        ← Back to Applicants List
                    </button>

                    <div className="border rounded p-4 shadow-sm">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div
									className="twm-media-pic rounded-circle overflow-hidden"
									style={{ width: "50px", height: "50px" }}
								>
									<JobZImage
										src={candidate.image}
										alt=""
									/>
								</div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Full Name</h5>
                                    <p className="mb-0 text-muted">{candidate.name}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Email</h5>
                                    <p className="mb-0 text-muted">{candidate.email}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Mobile No.</h5>
                                    <p className="mb-0 text-muted">{candidate.phone}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Father’s / Husband’s Name</h5>
                                    <p className="mb-0 text-muted">{candidate.fatherHusbandName}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Residential Address</h5>
                                    <p className="mb-0 text-muted">{candidate.residentialAddress}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Date of Birth</h5>
                                    <p className="mb-0 text-muted">{candidate.dob}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Gender</h5>
                                    <p className="mb-0 text-muted">{candidate.gender}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Mother’s Name</h5>
                                    <p className="mb-0 text-muted">{candidate.motherName}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Permanent Address</h5>
                                    <p className="mb-0 text-muted">{candidate.permanentAddress}</p>
                                </div>

								<div className="mt-2">
                                    <h5 className="mb-1">Correspondence Address</h5>
                                    <p className="mb-0 text-muted">{candidate.correspondenceAddress}</p>
                                </div>
                            </div>
                        </div>
                       
                        <hr />

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">10th Educational Details</h5>
                                    <h6>School Name <p className="mb-0 text-muted">{candidate.schoolName1}</p></h6>
									<h6>Passout Year <p className="mb-0 text-muted">{candidate.passoutYear1}</p></h6>
									<h6>Percentage / CGPA / SGPA <p className="mb-0 text-muted">{candidate.score1}</p></h6>
									<NavLink src={candidate.marksheet1} target="_blank">
										<button
											className="btn btn-outline-secondary mb-3"
											onClick={() => navigate(-1)}
										>
											View Marksheet
										</button>
									</NavLink>
                                </div>
                            </div>

							<div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">12th Educational Details</h5>
                                    <h6>School Name <p className="mb-0 text-muted">{candidate.schoolName2}</p></h6>
									<h6>Passout Year <p className="mb-0 text-muted">{candidate.passoutYear2}</p></h6>
									<h6>Percentage / CGPA / SGPA <p className="mb-0 text-muted">{candidate.score2}</p></h6>
									<NavLink src={candidate.marksheet2} target="_blank">
										<button
											className="btn btn-outline-secondary mb-3"
											onClick={() => navigate(-1)}
										>
											View Marksheet
										</button>
									</NavLink>
									
                                </div>
                            </div>

							<div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Degree Educational Details</h5>
									<h6>Degree Name <p className="mb-0 text-muted">{candidate.degreeName}</p></h6>
                                    <h6>School Name <p className="mb-0 text-muted">{candidate.collegeName}</p></h6>
									<h6>Passout Year <p className="mb-0 text-muted">{candidate.passoutYear3}</p></h6>
									<h6>Percentage / CGPA / SGPA <p className="mb-0 text-muted">{candidate.score3}</p></h6>
									<NavLink src={candidate.marksheet3} target="_blank">
										<button
											className="btn btn-outline-secondary mb-3"
											onClick={() => navigate(-1)}
										>
											View Marksheet
										</button>
									</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}

export default EmpCandidateReviewPage;
