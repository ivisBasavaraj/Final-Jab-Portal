function SectionProfile() {
    return (
        <>
            <h4 className="section-head-small mb-4">Profile Info</h4>
            <div className="twm-s-info">
                <ul>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-money-bill-wave" />
                            <span className="twm-title">Company Type</span>
                            <div className="twm-s-info-discription">IT</div>
                        </div>
                    </li>

                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-clock" />
                            <span className="twm-title">Established Year</span>
                            <div className="twm-s-info-discription">2017</div>
                        </div>
                    </li>

                    {/* <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-venus-mars" />
                            <span className="twm-title">Gender</span>
                            <div className="twm-s-info-discription">Male</div>
                        </div>
                    </li> */}

                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-mobile-alt" />
                            <span className="twm-title">Official Mobile Number</span>
                            <div className="twm-s-info-discription">+91987654321</div>
                        </div>
                    </li>

                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-at" />
                            <span className="twm-title">Official Email ID</span>
                            <div className="twm-s-info-discription">metromindz@gmail.com</div>
                        </div>
                    </li>

                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-book-reader" />
                            <span className="twm-title">Company Size</span>
                            <div className="twm-s-info-discription">50-100 employees</div>
                        </div>
                    </li>

                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-map-marker-alt" />
                            <span className="twm-title">Corporate Office Addres</span>
                            <div className="twm-s-info-discription">Sahakar Nagar, Bangalore 562062</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SectionProfile;