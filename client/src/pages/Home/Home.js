import ChatBox from '../../components/ChatBox/ChatBox';
import close from '../../assets/icons/close-icon-white.svg'
import './Home.scss';

function Home() {
    return (
        <>
            <main className="main--home">Home</main>
            <ChatBox className="chat-box--home"/>
            <button type="button" className="chat-box__open-button">
              <img src={close} alt="close chat" />
            </button>
        </>
    );
}

export default Home;
