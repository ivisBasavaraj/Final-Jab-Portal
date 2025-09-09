
import { useEffect } from "react";
import JobZImage from "../../../common/jobz-img";
import { loadScript } from "../../../../globals/constants";
import { useNavigate } from "react-router-dom";

function EmpJobReviewPage() {
    const navigate = useNavigate();

    useEffect(() => {
        loadScript("js/custom.js");
    }, []);

    const jobDetails = {
        name: "Senior Software Engineer",
        type: "Full-Time",
        location: "Chennai",
        annualSalary: "8 L.P.A",
        monthlySalary: "₹50,000",
        vacancies: "8",
        applicationLimit: "100",
        backlogs: "No",
        degrees: "B.Tech",
        skills: "[React, Python, Node]",
        experience: "Fresher",
        round: "3",
        roundTypes: "[Technical, Managerial Round, HR Round]",
        offerLetterDate: "01-10-2025",
        description: "We are looking for a creative and detail-oriented Senior Web Designer and Developer to lead the design and development of user-friendly, responsive websites and web applications. The ideal candidate will have a strong understanding of UI/UX principles, cross-browser compatibility, and front-end development technologies. ",
        postedDate: "01-08-2025",
        transportationOptions: "[One-way Cab, No Cab]",
        status: "Active",
        badgeClass: "twm-bg-green",
    };

    return (
        <>
            <div className="panel panel-default site-bg-white p-3">
                <div className="panel-heading d-flex justify-content-between align-items-center">
                    <h4 className="panel-tittle">
                        <i className="far fa-user-circle" /> Job Details
                    </h4>

                    <span className={`badge ${jobDetails.badgeClass} text-capitalize`}>
                        {jobDetails.status}
                    </span>
                </div>

                <div className="panel-body">
                    <button
                        className="btn btn-outline-secondary mb-3"
                        onClick={() => navigate(-1)}
                    >
                        ← Back to Jobs List
                    </button>

                    <div className="border rounded p-4 shadow-sm">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Job Title / Designation</h5>
                                    <p className="mb-0 text-muted">{jobDetails.name}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Job Type</h5>
                                    <p className="mb-0 text-muted">{jobDetails.type}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Job Location</h5>
                                    <p className="mb-0 text-muted">{jobDetails.location}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">CTC (Annual)</h5>
                                    <p className="mb-0 text-muted">{jobDetails.annualSalary}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Net Salary (Monthly)</h5>
                                    <p className="mb-0 text-muted">{jobDetails.monthlySalary}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Experience Level</h5>
                                    <p className="mb-0 text-muted">{jobDetails.experience}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Offer Letter Release Date</h5>
                                    <p className="mb-0 text-muted">{jobDetails.offerLetterDate}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Candidate Transportation Options</h5>
                                    <p className="mb-0 text-muted">{jobDetails.transportationOptions}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Number of Vacancies</h5>
                                    <p className="mb-0 text-muted">{jobDetails.vacancies}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Application Limit</h5>
                                    <p className="mb-0 text-muted">{jobDetails.applicationLimit}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Are Backlogs Allowed?</h5>
                                    <p className="mb-0 text-muted">{jobDetails.backlogs}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Required Educational Background</h5>
                                    <p className="mb-0 text-muted">{jobDetails.degrees}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Required Skills</h5>
                                    <p className="mb-0 text-muted">{jobDetails.skills}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Number of Interview Rounds</h5>
                                    <p className="mb-0 text-muted">{jobDetails.round}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Interview Round Types</h5>
                                    <p className="mb-0 text-muted">{jobDetails.roundTypes}</p>
                                </div>
                            </div>
                        </div>
                       
                        <hr />

                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Job Description</h5>
                                    <p className="mb-0 text-muted">{jobDetails.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmpJobReviewPage;
