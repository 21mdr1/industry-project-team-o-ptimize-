import ChatBox from '../../components/ChatBox/ChatBox';
import { useState } from 'react';
import open from '../../assets/icons/entypo_chat.svg';
import close from '../../assets/icons/entypo_chat_close.svg';
import './Home.scss';

function Home() {

  let [ chatIsOpen, setChatIsOpen ] = useState(false);

  function toggleChat() {
    setChatIsOpen(!chatIsOpen);
  }

    return (
        <>
            <main className="main--home">Home</main>
            {chatIsOpen && <ChatBox setChatIsOpen={setChatIsOpen} />}
            <button type="button" className="chat-box__open-button" onClick={toggleChat}>
              <img src={chatIsOpen ? close : open} alt="close chat" className='chat-box__open-image' />
            </button>
        </>
    );
}

export default Home;
