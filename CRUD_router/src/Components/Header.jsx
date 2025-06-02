import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className='me-5'>
                        <Link to={`/`} className='me-3'><button>View</button></Link>
                        <Link to={`/add`} className='me-5'><button>Add</button></Link>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Header