import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops!!</h2>
            <h3>
            ভাই তুমি ভুল পথ a আয়সো
            
            </h3>
            <small>
                Your path in Rong
            </small>
            <Link to="/"><button>
                Home 
            </button></Link>
        </div>
    );
};

export default ErrorPage;