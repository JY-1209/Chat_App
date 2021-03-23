import { useState } from "react";
// allows us to make API calls. What exactly is axios?
import axios from 'axios';

/**
 * Functional Component for allowing multiple users to login without manaully 
 * inputing informantion
 */
const LoginForm = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // handleSubmit is async b/c we need to await for the data
    const handleSubmit = async (e) => {
        // the default behavior is to refresh. The below prevents that
        e.preventDefault();

        // username / password => chatengine => give messsages
        //authentication
        const authObject = { 'Project-ID': "28eb8de7-c377-4c81-b83c-7ffd60312ed6", 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // works out, then we are succesfully logged in

            // what is localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // the second time the page reloads, we
            window.location.reload();

        } catch (error) {
              // else error, try with new username...  
              setError('Oops, incorrect credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    {/* for the onChange calback:
                    the event 'e' is the keypress
                    e.target.value is the value of the input */}
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center" >
                        <button type="submit" className="button">
                            <span>Start Chatting</span> 
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;