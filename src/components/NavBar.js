import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Business">Business       </Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Environment">Environment</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Food">Food</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Politics">Politics</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Top">Top</Link></li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/World">World</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar


