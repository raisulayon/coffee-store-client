import { NavLink } from "react-router-dom";


const Headers = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='signup'>Signup</NavLink>
            <NavLink to='login'>Login</NavLink>
        </div>
    );
};

export default Headers;