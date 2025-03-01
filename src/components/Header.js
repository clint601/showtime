


import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"




const Header =()=> {

    return(
        <header className="header py-3" id="header">
            <section id="headerSection">
            <div className="container-fluid">
                    <div className="d-flex align-items-center mr-5 justify-content-center gap-4">
                    <h1 className="logo-text text-capitalize text-danger text-center m-0" id="logo">netMovies</h1>
                        <nav className="topNav">
                            <ul className="nav list-unstyled m-0 d-flex gap-3">
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to='/sign'>Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to=''>Create Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to=''>Films</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to=''>Lists</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to=''>Members</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" text-danger text-decoration-none" to=''>Journal</Link>
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

