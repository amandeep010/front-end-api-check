import "./Header.css"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="header">
                <ul >
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/Services" className="link">Services</Link>
                    </li>
                    <li>
                        <Link to="/register" className="link">Register</Link>
                    </li>
                </ul>
                <div className="search">
                    <Link to="/search">
                        <FaSearch className="link"/>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Header