import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "28eb8de7-c377-4c81-b83c-7ffd60312ed6"
            userName = "Justyn1209"
            userSecret = "Excellence1209!"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;