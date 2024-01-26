import ChatBox from '../../components/ChatBox/ChatBox';
import open from '../../assets/icons/entypo_chat.svg';
import close from '../../assets/icons/close-icon-white.svg';
import './Home.scss';

function Home() {

    return (
        <>
            <main className="main--home">Home</main>
            <ChatBox className="chat-box--home"/>
            <button type="button" className="chat-box__open-button">
              <img src={open} alt="close chat" className='chat-box__open-image' />
            </button>
        </>
    );
}

export default Home;
