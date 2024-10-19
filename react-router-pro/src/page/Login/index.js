import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <Link to={'/article'}>Link to Article</Link>
            <button onClick={() => navigate('/article?id=100&name=jack')}>Navigate to Article (useSearchParams)</button>
            <button onClick={() => navigate('/article/100/jack')}>Navigate to Article (useParams)</button>
        </div>
    );
}

export default Login;