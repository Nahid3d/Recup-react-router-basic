import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    
    return (
        <div>
            <h3>Nav bar</h3>
            <nav className="nav">
               
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contract">Contract</NavLink>
               
                
            </nav>
        </div>
    );
};

export default Header;