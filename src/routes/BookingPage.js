import { useEffect, useReducer } from "react";
import { fetchAPI } from "../data/api";
import BookingForm from "../components/BookingForm";
import heroImg from "../assets/restaurant-chef.jpg";

const reducer = (state, action) => {
	const { type, value } = action;
	return { ...state, [type]: value }
}

const BookingPage = () => {
	const d = new Date();
	const today = `${d.getFullYear()}-${d.getUTCMonth() + 1 < 10 ? `0${d.getUTCMonth() + 1}` : d.getUTCMonth() + 1}-${d.getUTCDate() < 10 ? `0${d.getUTCDate()}` : d.getUTCDate()}`

	const initState = {
		currentStep: 1,
		availableTimes: fetchAPI(d),
		availableOccasions: ["Dinner", "Anniversary", "Birthday", "Celebration", "Corporate", "Holiday", "Private", "Wedding", "Other"],
		date: today,
		time: "Select a time",
		guests: 1,
		location: "Dining Room",
		name: "",
		phone: "",
		email: "",
		occasion: "Select an occasion",
		other: "",
		requests: "",
	};

	const [state, dispatch] = useReducer(reducer, initState);

	useEffect(() => {
		dispatch({ type: "availableTimes", value: fetchAPI(new Date(state.date)) })
	}, [state.date])

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
			<BookingForm state={state} dispatch={dispatch} />
		</>
	)
}

export default BookingPage;