import "./Header.css"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="header">
                <ul >
                    <li>
                        <Link to="/register" className="link">Register</Link>
                    </li>
                    <li>
                        <Link to="/login" className="link">Login</Link>
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