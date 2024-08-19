import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const navigate = useNavigate();
    const { id, title } = post;
    const postStyle = {
        border: '2px solid skyblue',
        padding: '5px',
        borderRadius: '20px'
    }
    const handleShowDetail = () => { 
        navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
            <p> {title} </p>
            <small>Post of id: {id} </small><br />
            <Link to={`/post/${id}`}>show details</Link>
           
            <button onClick={handleShowDetail}> details now</button>

        </div>
    );
};

export default Post;