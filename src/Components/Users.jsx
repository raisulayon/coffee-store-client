import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedusers= useLoaderData();
    return (
        <div>
            <h2>Users: {loadedusers.length}</h2>
        </div>
    );
};

export default Users;