const Footer =()=> {
    return(
        <footer className="footer" id="contactfooter">
        <div className="container plz-footer">
            <div className="row">
                <div className="col-sm-6">
                    <h2 className='footer-text bottom-text' id="lcoText">Location</h2>
                    <p className="loc-text text-light">3012 - 3040 N State St.
                    Jackson, MS 39216</p>
                </div>
                <div className="col-sm-6">
                    <h2 className=" footer-text text-center text-sm-end social-item text-uppercase bottom-text">Contacts</h2>
                    <nav className="nav social-nav justify-content-center justify-content-sm-end ">
                        <a href=""target="_blank" className="nav-link">
                            <i className=" text-light icons bi bi-instagram"></i>
                            <span className="visually-hidden">instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"target="_blank" className="nav-link">
                            <i className=" text-light icons bi bi-facebook"></i>
                            <span className="visually-hidden">facebook</span>
                        </a>
                        <a href="https://x.com/chriscode167957" target="_blank" className="nav-link">
                        <i className=" text-light icons bi bi-twitter-x"></i>
                            <span className="visually-hidden">twitter</span>
                        </a>
                    </nav>
                </div>
            </div>
                <p className="colophon text-center text-light">Site by Clint Jackson&copy;2025</p>
                <p className="text-center"><a href="#headerSection1" className="BT text-light">back to Top</a></p>
        </div>
    </footer>
    )
}

export default Footer