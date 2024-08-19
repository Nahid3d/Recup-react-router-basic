import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
    const {postId} =useParams();
    const post = useLoaderData();
    const { title } = post;
    console.log(postId)
    const postDetailsStyle = {
        border: '2px solid silver',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleGoBack = () => { 
        navigate(-1)
    }
    return (
        <div style={postDetailsStyle}>
            <h3>
                Post Details : {title}
            </h3>
            <button onClick={handleGoBack}> Go Back </button>
        </div>
    );
};

export default PostDetails;