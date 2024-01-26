import Modal from "react-modal";
import "./Checkout.scss";
import { useState } from "react";
import successImg from "./../../assets/images/success.png";

const customStyles = {
	content: {
		top: "auto",
		left: "auto",
		right: "20%",
		bottom: "-20%",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		border: "none",
		outerWidth: "200px"
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Checkout = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		//subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<main className='checkout-main'>
				<div className='checkout-page'></div>
				<div className='checkout-footer'>
					<p className='checkout-agree'>
						Agree to the{" "}
						<a
							href='/'
							className='text-blue'
						>
							Cruise Ticket Contract and Health Acknowledgement
						</a>
					</p>
					<p>
						<span>
							Due today{" "}
							<span className='payment-amount text-blue'>
								$420.00 CAD{" "}
							</span>
						</span>
						<button
							className='checkout-button'
							onClick={openModal}
						>
							Book this cruise
						</button>
					</p>
				</div>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'
				>	
					<img src={successImg} />
				</Modal>
			</main>
		</>
	);
};

export default Checkout;
