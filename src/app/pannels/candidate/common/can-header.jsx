// CANDIDATE DASHBOARD HEADER

import React, { useState, useEffect } from "react";
import JobZImage from "../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { canRoute, candidate } from "../../../../globals/route-names";
import { api } from "../../../../utils/api";

function CanHeaderSection(props) {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchProfile();
        
        // Listen for profile updates
        const handleProfileUpdate = () => {
            fetchProfile();
        };
        
        window.addEventListener('profileUpdated', handleProfileUpdate);
        
        return () => {
            window.removeEventListener('profileUpdated', handleProfileUpdate);
        };
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await api.getCandidateProfile();
            if (response.success && response.profile) {
                setProfileData(response.profile);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };
    return (
        <>
            <header id="header-admin-wrap" className="header-admin-fixed">
                {/* Header Start */}
                <div id="header-admin" className={props.sidebarActive ? "" : "active"}>
                    <div className="container">
                        {/* Left Side Content */}
                        <div className="header-left">
                            <div className="nav-btn-wrap">
                                <a className="nav-btn-admin" id="sidebarCollapse" onClick={props.onClick}>
                                    <span className="fa fa-angle-left" />
                                </a>
                            </div>
                        </div>
                        {/* Left Side Content End */}

                        {/* Right Side Content */}
                        <div className="header-right">
                            <ul className="header-widget-wrap">
                                
                                {/*Notification*/}
                                <li className="header-widget dashboard-noti-dropdown">
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle jobzilla-admin-notification" id="ID-NOTI_dropdown" data-bs-toggle="dropdown">
                                            <i className="far fa-bell" />
                                            <span className="notification-animate">8</span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="ID-NOTI_dropdown">
                                            <div className="dashboard-widgets-header">You have 7 notifications</div>
                                            <div className="noti-list dashboard-widget-scroll">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <span className="noti-icon"><i className="far fa-bell" /></span>
                                                            <span className="noti-texting">Devid applied for <b>Webdesigner.</b> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="noti-icon"><i className="far fa-bell" /></span>
                                                            <span className="noti-texting">Nikol sent you a message. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="noti-icon"><i className="far fa-bell" /></span>
                                                            <span className="noti-texting">lucy bookmarked your <b>SEO Expert</b> Job! </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="noti-icon"><i className="far fa-bell" /></span>
                                                            <span className="noti-texting">Your job for <b>teacher</b> has been approved! </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="noti-icon"><i className="far fa-bell" /></span>
                                                            <span className="noti-texting">Thor applied for <b>Team Leader</b>. </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="noti-view-all">
                                                    <a href="#">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/*Account*/}
                                
                                <li className="header-widget">
                                    <div className="dashboard-user-section">
                                        <div className="listing-user">
                                            <div className="">
                                                <span>
                                                    {profileData?.profilePicture ? (
                                                        <img 
                                                            src={`http://localhost:5000/${profileData.profilePicture}`} 
                                                            alt="Profile" 
                                                            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                                        />
                                                    ) : (
                                                        <JobZImage src="images/user-avtar/pic4.jpg" alt="" />
                                                    )}
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                </li>
                            </ul>
                        </div>
                        {/* Right Side Content End */}
                    </div>
                </div>
                {/* Header End */}
            </header>

        </>
    )
}

export default CanHeaderSection;