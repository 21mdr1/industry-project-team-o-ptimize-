import backButton from '../../assets/icons/back-button.svg';
import mia from '../../assets/icons/bot-image.png';
import Message from '../Message/Message';
import "./ChatBox.scss";

function ChatBox({ setChatIsOpen }) {

    const chat = [
        {
          name: "Mia",
          avatar: mia,
          comments: [
            "Hello! \nWhat can I help you with today?",
            "Suggested topics: ",
          ],
          buttons: [
            "End Chat",
            "Family Vacations",
            "Best Places to Visit",
            "Our packages",
            "Best Deals",
            "Popular Destinations",
            "Weekend Getaways",
            "Europe Cruises",
            "Caribbean Cruises",
            "Alaska Cruises",
          ],
        },
        {
          name: "Mia",
          avatar: "",
          comments: [
            "Great! \nDo you have any questions for me?",
          ],
          buttons: "",
        },
        {
          name: "You",
          avatar: "",
          comments: [
              "Hello, \nI want to book a cruise for my family and we were thinking of going around the 15th or the 31st of May on the West Caribbean cruise.",
          ],
          buttons: ""
        },
        {
          name: "Mia",
          avatar: mia,
          comments: [
            "You chose an excellent time! \nLet me ask you some questions regarding the type of trip you want.",
              "How many adults and how many children will be going on the cruise?",
          ],
          buttons: "",
        },
        {
          name: "You",
          avatar: "",
          comments: [
            "It’s going to be my wife and I, and our two children 9m and 11m.",
          ],
          buttons: "",
        },
        {
          name: "Mia",
          avatar: mia,
          comments: [
            "We have a lot of options for you. \n \nBefore I send offers your way is there anything you would like to ask me? Anything we can cover to make you feel comfortable and secure?",
            "Suggested topics:",
          ],
          buttons: [
            "Child Safety",
            "Cleanliness",
            "Best Deals",
            "Our Packages",
          ],
        },
      ];


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