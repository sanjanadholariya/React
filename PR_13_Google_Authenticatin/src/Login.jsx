import { signInWithPopup } from 'firebase/auth';
import { googleAuthProvider, getauth } from '../firebase_db';

const Login = () => {

    const handleLogin = async () => {
        try {
            let user = await signInWithPopup(getauth, googleAuthProvider);
            console.log(user);
            alert("🎉 You are successfully logged in!");
        } catch (err) {
            console.log(err);
            alert("Login Failed!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="p-4 shadow rounded text-center" style={{ backgroundColor: '#e3f2fd', width: '350px' }}>
                <h3 className="mb-4">Sign in with Google <br /> in React</h3>
                
                <button onClick={handleLogin} className="btn btn-outline-primary w-100">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/281/281764.png" 
                        alt="Google Icon" 
                        style={{ width: "20px", marginRight: "8px" }} 
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
