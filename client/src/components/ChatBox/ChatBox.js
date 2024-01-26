import "./ChatBox.scss";

function ChatBox() {
    return <section className='chat-box'>
        <header className='chat-box__header'>
            <div className="header-avatar__container">
                <div className="header-avatar__status"></div>
            </div>
            <div className='chat-box__headline'>
                <h4 className="chat-box__title">Hi, This is Mia</h4>
                <h3 className='chat-box__subtitle'>How can I help you?</h3>
            </div>
        </header>
    </section>
}

export default ChatBox;