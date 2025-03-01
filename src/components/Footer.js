const Footer =()=> {
    return(
        <footer className="footer" id="contactfooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h2 id="lcoText">Location</h2>
                    <p className="loc-text">3012 - 3040 N State St.
                    Jackson, MS 39216</p>
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center text-sm-end social-item text-uppercase">Contacts</h2>
                    <nav className="nav social-nav justify-content-center justify-content-sm-end ">
                        <a href=""target="_blank" className="nav-link">
                            <i class="bi bi-instagram"></i>
                            <span className="visually-hidden">instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"target="_blank" className="nav-link">
                            <i class="bi bi-facebook"></i>
                            <span className="visually-hidden">facebook</span>
                        </a>
                        <a href="https://x.com/chriscode167957" target="_blank" className="nav-link">
                            <i className="bi bi-twitter icons"></i>
                            <span className="visually-hidden">twitter</span>
                        </a>
                    </nav>
                </div>
            </div>
                <p className="colophon text-center">Site by clint Jackson&copy;2025</p>
                <p className="text-center"><a href="#headerSection1" className="BT">back to Top</a></p>
        </div>
    </footer>
    )
}

export default Footer