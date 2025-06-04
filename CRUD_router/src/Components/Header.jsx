import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-primary shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <div className="container-fluid py-2">
                    <Link className="navbar-brand fw-bold fs-4" to="/">My Records</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={`/`} className="btn btn-light me-3 fw-semibold">View</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/add`} className="btn btn-outline-light fw-semibold">Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header