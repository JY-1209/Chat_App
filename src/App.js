import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';

const App = () => {

    // if there is no username a.k.a we are not logged in 
    if(!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return (
        <ChatEngine 
            height = "100vh"
            projectID = "28eb8de7-c377-4c81-b83c-7ffd60312ed6"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;