import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <ul><li>
                <Link to="/"> home </Link> <br />
            </li>
                <li>
                    <Link to="/Contact"> contact</Link> <br />
                </li>
                <li>
                    <Link to="/Signup"> signup</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar