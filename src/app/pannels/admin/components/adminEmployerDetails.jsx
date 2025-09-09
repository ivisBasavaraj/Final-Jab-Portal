

import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
import { NavLink, useNavigate } from "react-router-dom";

function EmployerDetails () {
    const navigate = useNavigate();

    useEffect(() => {
        loadScript("js/custom.js");
    }, []);

    const employerDetails = {
        category: "Company",
        companyName: "Metromindz Pvt. Ltd.",
        phone: "9876543321",
        email: "example@metromindz.com",
        website: "www.example.com",
        since: "2010",
        teamSize: "50",
        description: "We are looking for a creative and detail-oriented Senior Web Designer and Developer to lead the design and development of user-friendly, responsive websites and web applications. The ideal candidate will have a strong understanding of UI/UX principles, cross-browser compatibility, and front-end development technologies. ",
        legalCode: "qgr73r31",
        corporateAddress: "#56 Sunset Blvd Sahakar Nagar, Bengaluru, 560902",
        officeLocation: "[Chennai, Bengaluru, Noida]",
        officeEmail: "example2@metromindz.com",
        officeMobileNo: "9876543210",
        companyType: "Startup",
        CIN: "fsgfasg5eq65326532",
        GST: "SCGSFGSAFG44315",
        sector: "IT",
        companyPAN: "FSGFGFS12345",
        COI: "ADFSDGSf2452452",
        letter: "",
        contactName: "John Adams",
        contactPhone: "9876543210",
        contactDesignation: "Manager",
        contactEmail: "example@metromindz.com",
        contactCompanyID: "",
        contactAlternateNo: "9876543210"
    };

    return (
        <>
            <div className="panel panel-default site-bg-white p-3">
                <div className="panel-heading d-flex justify-content-between align-items-center">
                    <h4 className="panel-tittle">
                        <i className="far fa-user-circle" /> Employer Details
                    </h4>
                </div>

                <div className="panel-body">
                    <button
                        className="btn btn-outline-secondary mb-3"
                        onClick={() => navigate(-1)}
                    >
                        ← Back to List
                    </button>

                    <div className="border rounded p-4 shadow-sm">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Employer Category</h5>
                                    <p className="mb-0 text-muted">{employerDetails.category}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Company Name</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyName}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Phone</h5>
                                    <p className="mb-0 text-muted">{employerDetails.phone}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Email Address</h5>
                                    <p className="mb-0 text-muted">{employerDetails.email}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Website</h5>
                                    <p className="mb-0 text-muted">{employerDetails.website}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Est. Since</h5>
                                    <p className="mb-0 text-muted">{employerDetails.since}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Team Size</h5>
                                    <p className="mb-0 text-muted">{employerDetails.teamSize}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Certificate of Incorporation (Issued by RoC)</h5>
                                    <p className="mb-0 text-muted">{employerDetails.COI}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Authorization Letter</h5>
                                    <NavLink src={employerDetails.letter} target="_blank">
                                        <button
                                            className="btn btn-outline-secondary mb-3"
                                            onClick={() => navigate(-1)}
                                        >
                                            View Letter
                                        </button>
                                    </NavLink>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Company PAN Card Number</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Contact Person Full Name</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Contact Person Designation</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Contact Person Designation</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <h5 className="mb-1">Legal Entity Code</h5>
                                    <p className="mb-0 text-muted">{employerDetails.legalCode}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Corporate Office Address</h5>
                                    <p className="mb-0 text-muted">{employerDetails.corporateAddress}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Branch Office Locations</h5>
                                    <p className="mb-0 text-muted">{employerDetails.officeLocation}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Official Email ID</h5>
                                    <p className="mb-0 text-muted">{employerDetails.officeEmail}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Official Mobile Number</h5>
                                    <p className="mb-0 text-muted">{employerDetails.officeMobileNo}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Type of Company / Business</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyType}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Corporate Identification Number (CIN)</h5>
                                    <p className="mb-0 text-muted">{employerDetails.CIN}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">GST Number</h5>
                                    <p className="mb-0 text-muted">{employerDetails.GST}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Industry Sector</h5>
                                    <p className="mb-0 text-muted">{employerDetails.sector}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Contact Person Official Email ID</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>

                                <div className="mt-2">
                                    <h5 className="mb-1">Contact Person Mobile Number</h5>
                                    <p className="mb-0 text-muted">{employerDetails.companyPAN}</p>
                                </div>
                            </div>
                        </div>
                       
                        <hr />

                        <div className="row">
                            <div className="col-lg-9 col-12">
                               <div className="mt-2">
                                    <h5 className="mb-1">Description</h5>
                                    <p className="mb-0 text-muted">{employerDetails.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployerDetails;
