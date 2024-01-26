import backButton from '../../assets/icons/back-button.svg';
import chat from '../../data/chatData';
import Message from '../Message/Message';
import "./ChatBox.scss";

function ChatBox({ setChatIsOpen }) {
    return <section className='chat-box'>
        <header className='chat-box__header'>
            <img src={backButton} alt="Go Back" className='chat-box__back' onClick={() => setChatIsOpen(false)}/>
            <div className="header-avatar__container">
                <div className="header-avatar__status"></div>
            </div>
            <div className='chat-box__headline'>
                <h4 className="chat-box__title">Hi, This is Mia</h4>
                <h3 className='chat-box__subtitle'>How can I help you?</h3>
            </div>
        </header>
        <section className='chat-box__main'>
            <div className="chat-box__date">Today</div>

            {chat.map((chat) => {
                return <Message message={chat} />
            })}

        </section>
        <form className="chat-box__form">
            <input 
                className="chat-box__input"
                type="text"
                placeholder='Write a message'
            />
        </form>
    </section>
}

export default ChatBox;