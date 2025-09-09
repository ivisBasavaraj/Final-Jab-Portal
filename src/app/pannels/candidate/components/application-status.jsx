// Route: /candidate/status

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadScript } from "../../../../globals/constants";
import { api } from "../../../../utils/api";

function CanStatusPage() {
	const navigate = useNavigate();
	const [applications, setApplications] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadScript("js/custom.js");
		fetchApplications();
	}, []);

	const fetchApplications = async () => {
		try {
			const response = await api.getCandidateApplications();
			if (response.success) {
				setApplications(response.data || []);
			}
		} catch (error) {
			console.error('Error fetching applications:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="wt-admin-right-page-header clearfix">
				<h2>Applications Status</h2>
			</div>
			
			<div className="twm-pro-view-chart-wrap">
				<div className="col-lg-12 col-md-12 mb-4">
					<div className="panel panel-default site-bg-white">
						<div className="panel-body wt-panel-body">
							<div className="twm-D_table p-a20 table-responsive">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Date</th>
											<th>Company</th>
											<th>Position</th>
											<th>Round 1</th>
											<th>Round 2</th>
											<th>Round 3</th>
										</tr>
									</thead>

									<tbody>
										{loading ? (
											<tr>
												<td colSpan="6" className="text-center">Loading applications...</td>
											</tr>
										) : applications.length === 0 ? (
											<tr>
												<td colSpan="6" className="text-center">No applications found</td>
											</tr>
										) : (
											applications.map((app, index) => (
												<tr key={index}>
													<td>{new Date(app.appliedAt).toLocaleDateString()}</td>
													<td>
														<div className="twm-DT-candidates-list">
															<div className="twm-mid-content">
																<a href="#" className="twm-job-title">
																	<h4>{app.job?.company?.name || 'Company'}</h4>
																	<p className="twm-candidate-address">
																		<i className="feather-map-pin" /> {app.job?.location || 'Location'}
																	</p>
																</a>
															</div>
														</div>
													</td>
													<td>{app.job?.title || 'Position'}</td>
													<td>
														<div className="twm-jobs-category">
															<span className={`twm-bg-${app.status === 'pending' ? 'golden' : app.status === 'accepted' ? 'green' : 'red'}`}>
																{app.status || 'Pending'}
															</span>
														</div>
													</td>
													<td>
														<div className="twm-jobs-category">
															<span className="twm-bg-golden">-</span>
														</div>
													</td>
													<td>
														<div className="twm-jobs-category">
															<span className="twm-bg-golden">-</span>
														</div>
													</td>
												</tr>
											))
										)}

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CanStatusPage;
