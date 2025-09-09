
import { useEffect, useState } from "react";
import JobZImage from "../../../common/jobz-img";
import { loadScript } from "../../../../globals/constants";
import { DropzoneComponent } from "react-dropzone-component";

function EmpCompanyProfilePage() {

    useEffect(() => {
        loadScript("js/custom.js")
    });

    var componentConfig = {
        postUrl: 'upload.php'
    };

    const [youtubeFields, setYoutubeFields] = useState(0);
    const [vimeoFields, setVimeoFields] = useState(0);

    function handleYoutubeClick() {
        setYoutubeFields(youtubeFields + 1);
    }

    function handleVimeoClick() {
        setVimeoFields(vimeoFields+1);
    }

    return (
			<>
				<div className="wt-admin-right-page-header clearfix">
					<h2>Company Details</h2>
				</div>

				{/*Logo and Cover image*/}
				<div className="panel panel-default">
					<div className="panel-heading wt-panel-heading p-a20">
						<h4 className="panel-tittle m-a0">Logo and Cover image</h4>
					</div>
					
					<div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<div className="dashboard-profile-pic">
										<div className="dashboard-profile-photo">
											<JobZImage src="images/jobs-company/pic1.jpg" alt="" />
											<div className="upload-btn-wrapper">
												<div id="upload-image-grid" />
												<button className="site-button button-sm">
													Upload Photo
												</button>

												<input
													type="file"
													name="myfile"
													id="file-uploader"
													accept=".jpg, .jpeg, .png"
												/>
											</div>
										</div>

										<p>
											<b>Company Logo :- </b> Max file size is 1MB, Minimum
											dimension: 136 x 136 And Suitable files are .jpg &amp;
											.png
										</p>
									</div>
								</div>
							</div>

							<div className="col-lg-12 col-md-12">
								<div className="dashboard-cover-pic">
									<DropzoneComponent config={componentConfig} />

									<p>
										<b>Background Banner Image :- </b> Max file size is 1MB,
										Minimum dimension: 770 x 310 And Suitable files are .jpg
										&amp; .png
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*Basic Information*/}
				<div className="panel panel-default">
					<div className="panel-heading wt-panel-heading p-a20">
						<h4 className="panel-tittle m-a0">Basic Informations</h4>
					</div>

					<div className="panel-body wt-panel-body p-a20 m-b30 ">
						<form>
							<div className="row">
								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Employer Category</label>
										<div className="ls-inputicon-box">
											<select className="form-control" name="company_type">
												<option value="" selected disabled>Select Category</option>
												<option value="company">Company</option>
												<option value="">Consultancy</option>
											</select>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Company Name</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control"
												name="company_name"
												type="text"
												placeholder="Devid Smith"
											/>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Phone</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control"
												name="company_phone"
												type="text"
												placeholder="(+91) 9087654321"
											/>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Email Address</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control"
												name="company_Email"
												type="email"
												placeholder="Devid@example.com"
											/>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Website</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control"
												name="company_website"
												type="text"
												placeholder="https://..."
											/>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Est. Since</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control"
												name="company_since"
												type="text"
												placeholder="Since..."
											/>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-12 col-md-12">
									<div className="form-group city-outer-bx has-feedback">
										<label>Team Size</label>
										<div className="ls-inputicon-box">
											<select
												className="wt-select-box selectpicker"
												name="team-size"
												data-live-search="true"
												title="team-size"
												id="city"
												data-bv-field="size"
											>
												<option className="bs-title-option" value>
													5-10
												</option>
												<option value>10+</option>
												<option value>20+</option>
												<option value>50+</option>
											</select>
										</div>
									</div>
								</div>

								<div className="col-md-12">
									<div className="form-group">
										<label>Description</label>
										<textarea
											className="form-control"
											rows={3}
											placeholder="Greetings! We are Galaxy Software Development Company."
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				{/* Company Details */}
				<div className="panel panel-default">
					<div className="panel-heading wt-panel-heading p-a20">
						<h4 className="panel-tittle m-a0">Company Details</h4>
					</div>

					<div className="panel-body wt-panel-body p-a20 m-b30">
						<form>
							<div className="row">
								{/* Existing Fields */}
								<div className="col-md-6">
									<div className="form-group">
										<label>Legal Entity Code (if any)</label>
										<input
											className="form-control"
											type="text"
											placeholder="Enter legal entity code"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Corporate Office Address</label>
										<input
											className="form-control"
											type="text"
											placeholder="Enter corporate address"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Branch Office Locations (if any)</label>
										<input
											className="form-control"
											type="text"
											placeholder="Enter branch locations"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Official Email ID</label>
										<input
											className="form-control"
											type="email"
											placeholder="email@company.com"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Official Mobile Number</label>
										<input
											className="form-control"
											type="text"
											placeholder="Enter mobile number"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Type of Company / Business</label>
										<div className="ls-inputicon-box">
											<select className="form-control" name="company_type">
												<option value="">Select Type</option>
												<option value="Private Limited">Private Limited</option>
												<option value="LLP">LLP</option>
												<option value="Proprietorship">Proprietorship</option>
												<option value="Government">Government</option>
												<option value="NGO">NGO</option>
												<option value="Startup">Startup</option>
												<option value="Others">Others</option>
											</select>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Corporate Identification Number (CIN)</label>
										<div className="input-group">
											<input
												className="form-control"
												type="text"
												placeholder="Enter CIN"
											/>
											<input
												type="file"
												className="form-control"
												accept=".pdf,.jpg,.jpeg,.png"
											/>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>GST Number</label>
										<div className="input-group">
											<input
												className="form-control"
												type="text"
												placeholder="Enter GST number"
											/>
											<input
												type="file"
												className="form-control"
												accept=".pdf,.jpg,.jpeg,.png"
											/>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Industry Sector</label>
										<select className="form-control">
											<option value="">Select Industry</option>
											<option value="it">IT</option>
											<option value="non-it">Non-IT</option>
											<option value="education">Education</option>
											<option value="finance">Finance</option>
											<option value="healthcare">Healthcare</option>
											<option value="manufacturing">Manufacturing</option>
											<option value="other">Other</option>
										</select>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Company PAN Card Number</label>
										<div className="input-group">
											<input
												className="form-control"
												type="text"
												placeholder="Enter PAN number"
											/>
											<input
												type="file"
												className="form-control"
												accept=".pdf,.jpg,.jpeg,.png"
											/>
										</div>
									</div>
								</div>

								{/* New Fields */}
								<div className="col-md-6">
									<div className="form-group">
										<label>Certificate of Incorporation (Issued by RoC)</label>
										<input
											type="file"
											className="form-control"
											accept=".pdf,.jpg,.jpeg,.png"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>
											Authorization Letter (if registering on behalf of someone
											else)
										</label>
										<input
											type="file"
											className="form-control"
											accept=".pdf,.jpg,.jpeg,.png"
											disabled
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Agree to Terms & Conditions</label>
										<div>
											<label className="m-r10">
												<input type="radio" name="terms" value="yes" /> Yes
											</label>
											
											<label>
												<input type="radio" name="terms" value="no" /> No
											</label>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				{/* Primary Contact Person */}
				<div className="panel panel-default">
					<div className="panel-heading wt-panel-heading p-a20">
						<h4 className="panel-tittle m-a0">Primary Contact Person</h4>
					</div>
					<div className="panel-body wt-panel-body p-a20 m-b30 ">
						<form>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Full Name</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control wt-form-control"
												name="full_name"
												type="text"
												placeholder="Enter Full Name"
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Designation</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control wt-form-control"
												name="designation"
												type="text"
												placeholder="e.g., HR Manager, Recruitment Lead, Founder"
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Official Email ID</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control wt-form-control"
												name="official_email"
												type="email"
												placeholder="Enter official email"
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Mobile Number</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control wt-form-control"
												name="mobile_number"
												type="tel"
												placeholder="Enter mobile number"
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Company ID Card Picture</label>
										<input
											type="file"
											className="form-control"
											accept=".jpg,.jpeg,.png"
										/>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Alternate Contact (Optional)</label>
										<div className="ls-inputicon-box">
											<input
												className="form-control wt-form-control"
												name="alternate_contact"
												type="tel"
												placeholder="Enter alternate contact"
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="text-left">
										<button type="submit" className="site-button">
											Submit For Review
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		);
}

export default EmpCompanyProfilePage;