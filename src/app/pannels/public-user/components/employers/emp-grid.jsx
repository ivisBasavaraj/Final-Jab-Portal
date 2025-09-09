import JobZImage from "../../../../common/jobz-img";
import SectionJobsSidebar1 from "../../sections/jobs/sidebar/section-jobs-sidebar1";
import SectionRecordsFilter from "../../sections/common/section-records-filter";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../../sections/common/section-pagination";
import { useEffect, useState } from "react";
import { loadScript } from "../../../../../globals/constants";
import api from "../../../../../utils/api";

function EmployersGridPage() {
    const [employers, setEmployers] = useState([]);
    const [loading, setLoading] = useState(true);

    const _filterConfig = {
        prefix: "Showing",
        type: "Result",
        total: employers.length.toString(),
        showRange: true,
        showingUpto: employers.length.toString()
    };

    useEffect(() => {
        loadScript("js/custom.js");
        fetchEmployers();
    }, []);

    const fetchEmployers = async () => {
        try {
            const data = await api.getAdminUsers({ type: 'employers' });
            if (data.success) {
                // Get job counts for each employer
                const employersWithJobs = await Promise.all(
                    data.users.map(async (employer) => {
                        const jobsData = await api.getJobs({ employerId: employer._id });
                        return {
                            ...employer,
                            jobCount: jobsData.success ? jobsData.jobs.length : 0
                        };
                    })
                );
                setEmployers(employersWithJobs);
            }
        } catch (error) {
            console.error('Error fetching employers:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center p-5">Loading employers...</div>;
    }

    return (
        <>
            <div className="section-full p-t120  p-b90 site-bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 rightSidebar">
                            <SectionJobsSidebar1 />
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <SectionRecordsFilter _config={_filterConfig} />

                            <div className="twm-employer-list-wrap">
                                <div className="row">
                                    {employers.length > 0 ? employers.map((employer) => (
                                        <div key={employer._id} className="col-lg-6 col-md-6">
                                            <div className="twm-employer-grid-style1 mb-5">
                                                <div className="twm-media">
                                                    <JobZImage
                                                        src="images/jobs-company/pic1.jpg"
                                                        alt="#"
                                                    />
                                                </div>
                                                <div className="twm-mid-content">
                                                    <NavLink
                                                        to={`${publicUser.employer.DETAIL1}/${employer._id}`}
                                                        className="twm-job-title"
                                                    >
                                                        <h4>{employer.companyName}</h4>
                                                    </NavLink>
                                                    <div className="twm-job-address">
                                                        <i className="feather-map-pin" />
                                                        &nbsp; {employer.phone || 'Location not specified'}
                                                    </div>
                                                    <NavLink
                                                        to={`${publicUser.employer.DETAIL1}/${employer._id}`}
                                                        className="twm-job-websites site-text-primary"
                                                    >
                                                        {employer.email}
                                                    </NavLink>
                                                </div>
                                                <div className="twm-right-content">
                                                    <div className="twm-jobs-vacancies">
                                                        <span>{employer.jobCount || 0}</span>Vacancies
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="col-12 text-center p-5">
                                            <h5>No employers found</h5>
                                            <p>Please check back later for new companies.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <SectionPagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployersGridPage;