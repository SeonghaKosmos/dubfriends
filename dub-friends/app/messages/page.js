import './page.css'
import ChatHeader from "./Header";
import '../divider-line.css'
import Navbar from "../nav-bar/NavBar";
import WordBubble from './WordBubble';
import TextField from './TextField';


export default function Page() {

    const chats = [
        {
            text:'Hi! I’m Emma. I saw you’re interested in dance. I used to dance when I was younger. Are you free to meet this afternoon?',
            isMine: true
        },
        {
            text:'Hi, Emma! Thank you so much for reaching out. I’m free this afternoon, when is a good time for you?',
            isMine: false
        }
    ]
    return (
        <div className='chat-main'>
            <ChatHeader />
            <hr className="divider-line" style={{ marginTop: '65px' }} />
            <div className="chats">
                {
                    chats.map((msg, key) => (
                        <WordBubble isMine = {msg.isMine} text = {msg.text}/>
                    ))
                }
            </div>
            <TextField/>
            <Navbar />
            <div style={{height: '84px'}}/>
        </div>

    )
}