import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import './navbar.css';

const Navbar = () => {

    const {user} = useContext(AuthContext);

    return ( 
        <div className="navbar">
            <div className="navContainer">
                <Link to={'/'}><span className="logo">History Guide</span></Link>
                <div className="navItems">
                        <ul className="navList">
                            <li className="listItem">Home</li>
                            <li className="listItem">About</li>
                            <li className="listItem">Contact</li>
                        </ul>
                </div>                      
                    {user ? user.username : (<div className="navbarButton">
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>
                    </div> )}                  
            </div>
        </div>
    );
}
 
export default Navbar;