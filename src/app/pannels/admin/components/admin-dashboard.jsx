
import JobZImage from "../../../common/jobz-img";
import CountUp from "react-countup";
import SectionCandidateProfileViews from "../../candidate/sections/dashboard/section-can-profile-views";
import AdminDashboardActivityChart from "../common/admin-graph";

function AdminDashboardPage() {
    return (
			<>
				<div className="wt-admin-right-page-header clearfix">
					<h2>Admin Dashboard</h2>
				</div>

				<div className="twm-dash-b-blocks mb-5">
					<div className="row">
						<div className="col-xl-3 col-lg-6 col-md-12 mb-3">
							<div className="panel panel-default">
								<div className="panel-body wt-panel-body gradi-1 dashboard-card ">
									<div className="wt-card-wrap">
										<div className="wt-card-icon">
											<i className="far fa-address-book" />
										</div>

										<div className="wt-card-right wt-total-active-listing counter ">
											<CountUp end={25} duration={10} />
										</div>

										<div className="wt-card-bottom ">
											<h4 className="m-b0">Total Candidates</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-6 col-md-12 mb-3">
							<div className="panel panel-default">
								<div className="panel-body wt-panel-body gradi-2 dashboard-card ">
									<div className="wt-card-wrap">
										<div className="wt-card-icon">
											<i className="far fa-file-alt" />
										</div>

										<div className="wt-card-right  wt-total-listing-view counter ">
											<CountUp end={41} duration={10} />
										</div>

										<div className="wt-card-bottom">
											<h4 className="m-b0">Total Employers</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-6 col-md-12 mb-3">
							<div className="panel panel-default">
								<div className="panel-body wt-panel-body gradi-3 dashboard-card ">
									<div className="wt-card-wrap">
										<div className="wt-card-icon">
											<i className="far fa-envelope" />
										</div>
										
										<div className="wt-card-right wt-total-listing-review counter ">
											<CountUp end={28} duration={10} />
										</div>

										<div className="wt-card-bottom">
											<h4 className="m-b0">Active Jobs</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-xl-3 col-lg-6 col-md-12 mb-3">
							<div className="panel panel-default">
								<div className="panel-body wt-panel-body gradi-4 dashboard-card ">
									<div className="wt-card-wrap">
										<div className="wt-card-icon">
											<i className="far fa-bell" />
										</div>

										<div className="wt-card-right wt-total-listing-bookmarked counter ">
											<CountUp end={250} duration={10} />
										</div>

										<div className="wt-card-bottom">
											<h4 className="m-b0">Applications</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="twm-pro-view-chart-wrap">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12 mb-4">
							<AdminDashboardActivityChart />
						</div>
					</div>
				</div>
			</>
		);
}

export default AdminDashboardPage;