import mia from '../../assets/icons/bot-image.png';
import "./Message.scss";

function Message({ message }) {
    /*
        {
            name: "Mia",
            avatar: "bot-image.jpg",
            commentLoading: "{addThenRemoveCommentLoader()}",
            comments: [
                "Hello! \nWhat can I help you with today?",
                "Suggested topics: ",
            ],
            buttons: ["End Chat", "Family Vacations" ],
            time: '05:13pm',
        },
    */

    const { name, avatar, comments, buttons, time } = message;

    return (
        <div className={`message__container message__container--${name}`}>
            {name === "Mia" && (
            <div className={`message__avatar ${avatar==='' && 'message__avatar--clear'}`}>
                {avatar && <img src={mia} alt={name} className='message__avatar-img' />}
            </div>)}

            <div className={`message__content message__content--${name}`}>
                <p className={`message__info message__info--${name}`}>{name}</p>

                {comments.map((comment) => {
                    return (
                        <p className={`message message--${name}`}>{comment}</p>
                    )
                })}

                {buttons && (
                <div className='message__options'>
                    {buttons.map((button) => {
                        return (
                            <button className={`message__option ${button.clicked && 'message__option--clicked'}`}>{button.text}</button>
                        )
                    })}
                </div>)}
            </div>

            { name === 'You' && <p className='message__info message__info--user'>{time}</p>}

        </div>
    );
}

export default Message;