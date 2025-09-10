import JobZImage from "../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { empRoute, employer } from "../../../../globals/route-names";
import NotificationBell from "../../../../components/NotificationBell";

function EmpHeaderSection(props) {
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
                                    <NotificationBell userRole="employer" />
                                </li>

                                {/*Account*/}
                                <li className="header-widget">
                                    <div className="dashboard-user-section">
                                        <div className="listing-user">
                                            {/* <div className="dropdown"> */}
                                               
                                                    <div className="">
                                                        <span>
                                                            <JobZImage src="images/user-avtar/pic4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                               
                                            {/* </div> */}
                                        </div>
                                    </div>
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

export default EmpHeaderSection;