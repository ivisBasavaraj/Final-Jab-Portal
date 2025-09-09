
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../../globals/route-names";
import SectionSideAdvert from "./section-side-advert";
import { useState, useEffect } from "react";

function SectionJobsSidebar1 () {
    const [jobTypes, setJobTypes] = useState([]);

    useEffect(() => {
        fetchJobTypes();
    }, []);

    const fetchJobTypes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/public/jobs');
            const data = await response.json();
            if (data.success) {
                // Count job types
                const typeCounts = {};
                data.jobs.forEach(job => {
                    const type = job.jobType;
                    typeCounts[type] = (typeCounts[type] || 0) + 1;
                });
                setJobTypes(Object.entries(typeCounts));
            }
        } catch (error) {
            console.error('Error fetching job types:', error);
        }
    };

    return (
        <>
            <div className="side-bar">
                <div className="sidebar-elements search-bx">
                    <form>
                        <div className="form-group mb-4">
                            <h4 className="section-head-small mb-4">Job Title</h4>
                            <select className="wt-select-bar-large selectpicker" data-live-search="true" data-bv-field="size">
                                <option>All Category</option>
                                <option>Web Designer</option>
                                <option>Developer</option>
                                <option>Acountant</option>
                            </select>
                        </div>


                        <div className="form-group mb-4">
                            <h4 className="section-head-small mb-4">Keyword</h4>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Job title or Keyword" />
                                <button className="btn" type="button"><i className="feather-search" /></button>
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <h4 className="section-head-small mb-4">Location</h4>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search location" />
                                <button className="btn" type="button"><i className="feather-map-pin" /></button>
                            </div>
                        </div>

                        <div className="twm-sidebar-ele-filter">
                            <h4 className="section-head-small mb-4">Job Type</h4>
                            <ul>
                                {jobTypes.map(([type, count], index) => (
                                    <li key={type}>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id={`jobType${index}`} />
                                            <label className="form-check-label" htmlFor={`jobType${index}`}>
                                                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                                            </label>
                                        </div>
                                        <span className="twm-job-type-count">{count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="twm-sidebar-ele-filter">
                            <h4 className="section-head-small mb-4">Type of employment</h4>
                            <ul>
                                <li>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="Freelance1" />
                                        <label className="form-check-label" htmlFor="Freelance1">Freelance</label>
                                    </div>
                                </li>

                                <li>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="FullTime1" />
                                        <label className="form-check-label" htmlFor="FullTime1">Full Time</label>
                                    </div>
                                </li>

                                <li>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="Intership1" />
                                        <label className="form-check-label" htmlFor="Intership1">Intership</label>
                                    </div>
                                </li>

                                <li>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="Part-Time1" />
                                        <label className="form-check-label" htmlFor="Part-Time1">Part Time</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                
                <div className="widget tw-sidebar-tags-wrap">
                    <h4 className="section-head-small mb-4">Tags</h4>
                    <div className="tagcloud">
                        <NavLink to={publicUser.jobs.LIST}>General</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Jobs </NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Payment</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Application </NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Work</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Recruiting</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Employer</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Income</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Tips</NavLink>
                    </div>
                </div>
            </div>
            {/* <SectionSideAdvert />    */}
        </>
    )
}

export default SectionJobsSidebar1;