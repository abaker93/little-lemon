import { useState } from "react";
import BookingForm from "../components/BookingForm";
import heroImg from "../assets/restaurant-chef.jpg";

const BookingPage = () => {
	const [availableTimes, setAvailableTimes] = useState(["Select a time", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"]);

	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="col">
						<h1>Reserve a Table</h1>
						<p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
					</div>
					<div className="col image">
						<img className="radius-lg" src={heroImg} alt="preparing a dish" />
					</div>
				</div>
			</section>
			<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
		</>
	)
}

export default BookingPage;