
import JobZImage from "../../../common/jobz-img";
import { NavLink, useLocation } from "react-router-dom";
import { loadScript, setMenuActive } from "../../../../globals/constants";
import { employer, empRoute, publicUser } from "../../../../globals/route-names";
import { useEffect } from "react";

function EmpSidebarSection(props) {
    const currentpath = useLocation().pathname;

    useEffect(() => {
        loadScript("js/custom.js");
        loadScript("js/emp-sidebar.js");
    });

    return (
        <>
            <nav id="sidebar-admin-wraper" className={props.sidebarActive ? "" : "active"}>
                <div className="page-logo">
                    <NavLink to={publicUser.INITIAL}><JobZImage id="skin_page_logo" src="images/logo-dark.png" alt="" /></NavLink>
                </div>

                <div className="admin-nav scrollbar-macosx">
                    <ul>
                        <li
                            className={setMenuActive(currentpath, empRoute(employer.DASHBOARD))}>
                            <NavLink to={empRoute(employer.DASHBOARD)}><i className="fa fa-home" /><span className="admin-nav-text">Dashboard</span></NavLink>
                        </li>

                        <li
                            className={setMenuActive(currentpath, empRoute(employer.PROFILE))}>
                            <NavLink to={empRoute(employer.PROFILE)}><i className="fa fa-user-tie" /><span className="admin-nav-text">Company Profile</span></NavLink>
                        </li>

                        <li
                            className={setMenuActive(currentpath, empRoute(employer.MANAGE_JOBS))}>
                            <NavLink to={empRoute(employer.MANAGE_JOBS)}><i className="fa fa-suitcase" /><span className="admin-nav-text">Openings</span></NavLink>
                        </li>

                        <li className={setMenuActive(currentpath, empRoute(employer.CANDIDATES))}>
                            <NavLink to={empRoute(employer.CANDIDATES)}><i className="fa fa-user-friends" /><span className="admin-nav-text">Applicants</span></NavLink>
                        </li>
                        
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

export default EmpSidebarSection;