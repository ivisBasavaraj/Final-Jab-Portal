
import { useEffect } from "react";
import { loadScript } from "../../../../../globals/constants";
import JobZImage from "../../../../common/jobz-img";
import ApplyJobPopup from "../../../../common/popups/popup-apply-job";
import SectionJobLocation from "../../sections/jobs/detail/section-job-location";
import SectionOfficePhotos1 from "../../sections/common/section-office-photos1";
import SectionOfficeVideo1 from "../../sections/common/section-office-video1";
import SectionShareProfile from "../../sections/common/section-share-profile";
import SectionJobsSidebar2 from "../../sections/jobs/sidebar/section-jobs-sidebar2";

function JobDetail1Page() {

    const sidebarConfig = {
        showJobInfo: true
    }

    useEffect(()=>{
        loadScript("js/custom.js");
    })

    return (
			<>
				<div className="section-full  p-t120 p-b90 bg-white">
					<div className="container">
						{/* BLOG SECTION START */}
						<div className="section-content">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-8 col-md-12">
									{/* Candidate detail START */}
									<div className="cabdidate-de-info">
										<div className="twm-job-self-wrap">
											<div className="twm-job-self-info">
												<div className="twm-job-self-top">
													<div className="twm-media-bg">
														<JobZImage src="images/job-detail-bg.jpg" alt="#" />
														<div className="twm-jobs-category green">
															<span className="twm-bg-green">New</span>
														</div>
													</div>

													<div className="twm-mid-content">
														<div className="twm-media">
															<JobZImage
																src="images/jobs-company/pic1.jpg"
																alt="#"
															/>
														</div>

														<h4 className="twm-job-title">
															Senior Developer {" "}
															{/* <span className="twm-job-post-duration">
																/ 1 days ago
															</span> */}
														</h4>
														{/* <p className="twm-job-address"><i className="feather-map-pin" />#56 Sunset Blvd Sahakar Nagar, Bengaluru, 560902</p> */}
														{/* <div className="twm-job-self-mid">
                                                        <div className="twm-job-self-mid-left">
                                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            <div className="twm-jobs-amount">₹ 3.5 Lacs <span>P.A.</span></div>
                                                        </div>
                                                        <div className="twm-job-apllication-area">Application ends:
                                                            <span className="twm-job-apllication-date">October 1, 2025</span>
                                                        </div>
                                                    </div> */}
														<div className="twm-job-self-bottom">
															<a
																className="site-button"
																// data-bs-toggle="modal"
																// href="#apply_job_popup"
																role="button"
															>
																Apply Now
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<h4 className="twm-s-title">Job Description:</h4>
										<p>
											We are looking for a creative and detail-oriented Senior
											Web Designer and Developer to lead the design and
											development of user-friendly, responsive websites and web
											applications. The ideal candidate will have a strong
											understanding of UI/UX principles, cross-browser
											compatibility, and front-end development technologies.
										</p>

										<h4 className="twm-s-title">Requirements:</h4>
										<ul className="description-list-2">
											<li>
												<i className="feather-check" />
												Must be able to communicate with others to convey
												information effectively.
											</li>
											
											<li>
												<i className="feather-check" />
												Rachelor or Master degree level educational background.
											</li>

											<li>
												<i className="feather-check" />4 years relevant PHP dev
												experience.
											</li>

											<li>
												<i className="feather-check" />
												Troubleshooting, testing and maintaining the core
												product software and databases.
											</li>
										</ul>

										<h4 className="twm-s-title">Responsibilities:</h4>
										<ul className="description-list-2">
											<li>
												<i className="feather-check" />
												Establish and promote design guidelines, best practices
												and standards.
											</li>

											<li>
												<i className="feather-check" />
												Accurately estimate design tickets during planning
												sessions.
											</li>
											
											<li>
												<i className="feather-check" />
												Present and defend designs and key deliverables to peers
												and executive level stakeholders.
											</li>

											<li>
												<i className="feather-check" />
												Execute all visual design stages from concept to final
												hand-off to engineering.
											</li>
										</ul>

										<h4 className="twm-s-title">Benefits:</h4>
										<ul className="description-list-2">
											<li>
												<i className="feather-check" />
												Transportation Provided
											</li>

											<li>
												<i className="feather-check" />
												Flexible Working
											</li>
											
											<li>
												<i className="feather-check" />
												Health Insurance
											</li>
											
										</ul>

										<SectionShareProfile />
										{/* <SectionJobLocation /> */}

										<div className="twm-two-part-section">
											<div className="row">
												<div className="col-lg-6 col-md-12">
													{/* <SectionOfficePhotos1 /> */}
												</div>
												
												<div className="col-lg-6 col-md-12">
													{/* <SectionOfficeVideo1 /> */}
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-12 rightSidebar">
									<SectionJobsSidebar2 _config={sidebarConfig} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<ApplyJobPopup />
			</>
		);
}

export default JobDetail1Page;