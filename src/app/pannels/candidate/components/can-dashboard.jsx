// CANDIDATE DASHBOARD

import SectionCandidateOverview from "../sections/dashboard/section-can-overview";
import CompleteProfileCard from "../sections/dashboard/section-can-profile";
import { useEffect, useState } from "react";
import { loadScript } from "../../../../globals/constants";
import { api } from "../../../../utils/api";
import { useAuth } from "../../../../contexts/AuthContext";

function CanDashboardPage () {
    const { user, userType } = useAuth();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadScript("js/custom.js")
        fetchDashboardData();
    }, [])

    const fetchDashboardData = async () => {
        try {
            const data = await api.getCandidateDashboard();
            if (data.success) {
                setDashboardData(data.data);
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="twm-right-section-panel site-bg-gray">
                
                <SectionCandidateOverview dashboardData={dashboardData} loading={loading} />

                <div className="twm-pro-view-chart-wrap">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            < CompleteProfileCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CanDashboardPage;