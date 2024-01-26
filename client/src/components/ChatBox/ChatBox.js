import backButton from '../../assets/icons/back-button.svg';
import mia from '../../assets/icons/bot-image.png';
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

            {/* example messages */}
            <div className='message__container message__container--mia'>
                <div className='message__avatar'>
                    <img src={mia} alt="mia" className='message__avatar-img' />
                </div>
                <div className='message__content message__content--mia'>
                    <p className='message__info message__info--mia'>Mia</p>
                    <p className='message message--mia'>This is a Mia message</p>
                    <p className='message message--mia'>There are two of them</p>
                    <div className='message__options'>
                        <div className="message__option">Option 1</div>
                        <div className="message__option">Option 2</div>
                        <div className="message__option message__option--clicked">Clicked Option</div>
                    </div>
                </div>
            </div>

            <div className='message__container message__container--user'>
                <div className='message__content message__content--user'>
                    <p className='message__info message__info--user'>You</p>
                    <p className='message message--user'>This is a user message</p>
                    <p className='message__info message__info--user'>05:13pm</p>
                </div>
            </div>

            <div className='message__container message__container--mia'>
                <div className='message__avatar'>
                    <img src={mia} alt="mia" className='message__avatar-img' />
                </div>
                <div className='message__content message__content--mia'>
                    <p className='message__info message__info--mia'>Mia</p>
                    <div className='message message--mia message--loading'></div>
                </div>
            </div>
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