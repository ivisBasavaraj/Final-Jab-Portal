// CANDIDATE DASHBOARD SIDEBAR

import JobZImage from "../../../common/jobz-img";
import { NavLink, useLocation } from "react-router-dom";
import { loadScript, setMenuActive } from "../../../../globals/constants";
import { candidate, canRoute, publicUser } from "../../../../globals/route-names";
import { useEffect } from "react";

function CanSidebarSection(props) {
    const currentpath = useLocation().pathname;

    useEffect(() => {
        loadScript("js/custom.js");
        loadScript("js/can-sidebar.js");
    })

    return (
        <>
            <nav id="sidebar-admin-wraper" className={props.sidebarActive ? "" : "active"}>
                <div className="page-logo">
                    <NavLink to={publicUser.INITIAL}><JobZImage id="skin_page_logo" src="images/logo-dark.png" alt="logo" /></NavLink>
                </div>
                <div className="admin-nav scrollbar-macosx">
                    <ul>
                        <li
                            className={setMenuActive(currentpath, canRoute(candidate.DASHBOARD))}>
                            <NavLink to={canRoute(candidate.DASHBOARD)}><i className="fa fa-home" /><span className="admin-nav-text">Dashboard</span></NavLink>
                        </li>
                        <li
                            className={setMenuActive(currentpath, canRoute(candidate.PROFILE))}>
                            <NavLink to={canRoute(candidate.PROFILE)}><i className="fa fa-user-tie" /><span className="admin-nav-text">My Profile</span></NavLink>
                        </li>
                        {/* <li
                            className={setMenuActive(currentpath, canRoute(candidate.APPLIED_JOBS))}>
                            <NavLink to={canRoute(candidate.APPLIED_JOBS)}><i className="fa fa-suitcase" /><span className="admin-nav-text">Applied Jobs</span></NavLink>
                        </li> */}

                        <li
                            className={setMenuActive(currentpath, canRoute(candidate.STATUS))}>
                            <NavLink to={canRoute(candidate.STATUS)}><i className="fa fa-user-tie" /><span className="admin-nav-text">My Applications</span></NavLink>
                        </li>
                        {/* <li
                            className={
                                setMenuActive(currentpath, canRoute(candidate.POST_A_JOB)) +
                                setMenuActive(currentpath, canRoute(candidate.MANAGE_JOBS))
                            }>
                            <a href="#">
                                <i className="fa fa-suitcase" />
                                <span className="admin-nav-text">Applied Jobs</span>
                            </a>
                            <ul className="sub-menu">
                                <li> <NavLink to={canRoute(candidate.POST_A_JOB)} id="jobMenuId1"><span className="admin-nav-text">Post a New Jobs</span></NavLink></li>
                                <li> <NavLink to={canRoute(candidate.MANAGE_JOBS)} id="jobMenuId2"><span className="admin-nav-text">Manage Jobs</span></NavLink></li>
                            </ul>
                        </li> */}
                        <li className={setMenuActive(currentpath, canRoute(candidate.RESUME))}>
                            <NavLink to={canRoute(candidate.RESUME)}><i className="fa fa-user-friends" /><span className="admin-nav-text">My Resume</span></NavLink>
                        </li>
                        {/* <li className={setMenuActive(currentpath, canRoute(candidate.ASSESSMENT))}>
                            <NavLink to={canRoute(candidate.ASSESSMENT)}><i className="fa fa-bookmark" /><span className="admin-nav-text">Assessments</span></NavLink>
                        </li> */}
                        {/* <li className={setMenuActive(currentpath, canRoute(candidate.SAVED_JOBS))}>
                            <NavLink to={canRoute(candidate.SAVED_JOBS)}><i className="fa fa-bookmark" /><span className="admin-nav-text">CV manager</span></NavLink>
                        </li> */}
                        {/* <li className={setMenuActive(currentpath, canRoute(candidate.RESUME_ALERTS))}>
                            <NavLink to={canRoute(candidate.ALERTS)}><i className="fa fa-bell" /><span className="admin-nav-text">Job Alerts</span></NavLink>
                        </li>

                        <li
                            className={
                                setMenuActive(currentpath, canRoute(candidate.MESSAGES1)) +
                                setMenuActive(currentpath, canRoute(candidate.MESSAGES2))
                            }
                        >
                            <a href="#">
                                <i className="fa fa-envelope" />
                                <span className="admin-nav-text">Messages <sup className="twm-msg-noti">5</sup></span>
                            </a>
                            <ul className="sub-menu">
                                <li> <NavLink to={canRoute(candidate.MESSAGES1)} id="msgMenuId1"><span className="admin-nav-text">MSG Style-1</span></NavLink></li>
                                <li> <NavLink to={canRoute(candidate.MESSAGES2)} id="msgMenuId2"><span className="admin-nav-text">MSG Style-2</span></NavLink></li>
                            </ul>
                        </li> */}
                        
                        {/* <li>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete-dash-profile"><i className="fa fa-trash-alt" /><span className="admin-nav-text">Delete Profile</span></a>
                        </li> */}
                        <li>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#logout-dash-profile">
                                <i className="fa fa-share-square" />
                                <span className="admin-nav-text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default CanSidebarSection;