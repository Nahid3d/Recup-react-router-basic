import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    const { name, username, website, address } = user;
    const userDetails = {
        border: '2px solid tomato',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleBack = () => { 
        navigate(-1)
    }

    return (
        <div style={userDetails}>
            <h3>User Details : {name} </h3>
            <p>username : {username}</p>
            <p>website :{website}</p>
            <p>address {address.street} </p>
            <p>city : {address.city} </p>
            <button onClick={handleBack}>Back to Go </button>

        </div>
    );
};

export default UserDetails;