


import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"




const Header =()=> {

    return(
        <header className="header py-3" id="header">
            <section id="headerSection">
            <div className="container-fluid">
                    <div className="d-flex align-items-center mr-5 justify-content-center gap-4">
                    <img src="/bred.jpeg" className="header-img" />
                        <nav className="topNav">
                            <ul className="nav list-unstyled m-0 d-flex gap-3">
                            <li className="nav-item">
                                    <Link className="page-text text-decoration-none" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="page-text text-decoration-none" to='/sign'>Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="page-text text-decoration-none" to='/'>Create Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" page-text text-decoration-none" to='/'>Films</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="page-text text-decoration-none" to='/'>Lists</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" page-text text-decoration-none" to='/'>Members</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="  page-text text-decoration-none" to='/'>Menu</Link>
                                </li>
                            </ul>
                        </nav>
                            <form action="#" className="form search-form">
                                <div className="input-group">
                                <input type="search" className="form-control-sm rounded-pill"/>
                                <span className="icon start-0 ps-3 d-flex align-items-center">
                                    <i className="bi bi-search"></i>
                            </span>
                            </div>
                        </form>
                    </div>
            </div>
        </section>
    </header>
    )
}

export default Header;

