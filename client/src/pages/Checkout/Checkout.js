import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
const navigate = useNavigate();
  
	return (
		<>
			<main className="checkout-main">
				<div className='checkout-page'></div>
				<div className='checkout-footer'>
					<p className="checkout-agree">
            Agree to the <a href="/" className="text-blue">Cruise Ticket Contract and Health Acknowledgement</a>
          </p>
					<p>
            <span>Due today <span className="payment-amount text-blue">$420.00 CAD </span></span>
						<button className='checkout-button' onClick={()=>{
              navigate('/checkout-success')
            }}>
							Book this cruise
						</button>
					</p>
				</div>
			</main>
		</>
	);
};

export default Checkout;
