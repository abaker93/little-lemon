import { useEffect, useState } from "react";
import { Check, Minus, Plus } from "../assets/icons";
import heroImg from "../assets/restaurant-chef.jpg";
import map from '../assets/map.jpg';
import { Link } from "react-router-dom";

const BookingPage = () => {
	return (
		<>
			<Hero />
			<BookingForm />
		</>
	)
}

const Hero = () => {
	return (
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
	)
}

const Step = (props) => {
	const step = props.step;
	const currentStep = props.currentStep;
	const setCurrentStep = props.setCurrentStep;

	if (step < currentStep) {
		return (
			<div className="step complete" disabled={props.disabled} onClick={e => setCurrentStep(step)}>
				<div className="step-icon">
					<Check fill="#FFFFFF" />
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step === currentStep) {
		return (
			<div className="step current" disabled={props.disabled} onClick={e => setCurrentStep(step)}>
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step > currentStep) {
		return (
			<div className="step" disabled={props.disabled} onClick={e => setCurrentStep(step)}>
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}
}

const BookingForm = props => {
	const [currentStep, setCurrentStep] = useState(1);

	const [date, setDate] = useState("");
	const [time, setTime] = useState("Select a time");
	const [guests, setGuests] = useState(2);
	const [location, setLocation] = useState("dining room");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [occasion, setOccasion] = useState("Select an occasion");

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	let fullDate;

	const checkValidation = step => {
		return step === 1
			? date
				? time !== "Select a time"
					? true
					: false
				: false
			: step === 2
				? name
					? phone
						? occasion !== "Select an occasion"
							? true
							: false
						: false
					: false
				: false
	};

	const handleSubmit = () => {
		setCurrentStep(3)
	}

	return (
		<>
			<section id="stepper">
				<div className="container-sm">
					<section className="stepper">
						<Step
							step={1}
							label="Reservation Details"
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
							
						/>
						<Step
							step={2}
							label="Your Information"
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
							disabled={!checkValidation(1)}
						/>
						<Step
							step={3}
							label="Confirmation"
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
							disabled={!checkValidation(2)}
						/>
					</section>
				</div>
			</section>



			<form id="reservation" onSubmit={handleSubmit} className={currentStep >= 1 ? "show" : ""}>
				<section id="reservation-details" step={1}>
					<div className="container-sm">
						<h2>When will we see ya?</h2>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="date" className="required">Date</label>
							<input
								id="date"
								value={date}
								onChange={e => setDate(e.target.value)}
								type="date"
								required
							/>
						</div>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="time" className="required">Time</label>
							<select
								id="time"
								value={time}
								onChange={e => setTime(e.target.value)}
							>
								<option value="Select a time">Select a time</option>
								<option value="4:00 PM">4:00 PM</option>
								<option value="4:30 PM">4:30 PM</option>
								<option value="5:00 PM">5:00 PM</option>
								<option value="5:30 PM">5:30 PM</option>
								<option value="6:00 PM">6:00 PM</option>
								<option value="6:30 PM">6:30 PM</option>
								<option value="7:00 PM">7:00 PM</option>
								<option value="7:30 PM">7:30 PM</option>
								<option value="8:00 PM">8:00 PM</option>
								<option value="8:30 PM">8:30 PM</option>
							</select>
						</div>
						<div className="row fieldgroup">
							<div className="col">
								<label htmlFor="guests" className="required">Number of Guests</label>
								<p className="small">Choose a number between 2 & 20</p>
							</div>
							<div className="col">
								<button className="btn btn-text" onClick={e => guests > 2 ? setGuests(guests - 1) : setGuests(2)}>
									<Minus />
								</button>
								<input
									id="guests"
									value={guests}
									onChange={e => setGuests(e.target.value)}
									type="number"
									required
								/>
								<button className="btn btn-text" onClick={e => guests < 20 ? setGuests(guests + 1) : setGuests(20)}>
									<Plus />
								</button>
							</div>
						</div>
						<div className="row fieldgroup">
							<div className="col">
								<label>Patio or Dining Room?</label>
							</div>
							<div className="col">
								<input
									id="dining-room"
									value="dining room"
									onChange={e => setLocation(location === "patio" ? "dining room" : "patio")}
									type="radio"
									name="location"
									checked={location === "dining room" ? true : false}
								/>
								<label htmlFor="dining-room">Dining Room</label>
								<input
									id="patio"
									value="patio"
									onChange={e => setLocation(location === "patio" ? "dining room" : "patio")}
									type="radio"
									name="location"
									checked={location === "patio" ? true : false}
								/>
								<label htmlFor="patio">Patio</label>
							</div>
						</div>
						<div className="row form-buttons" style={{ justifyContent: "flex-end" }}>
							<button
								className="btn btn-primary"
								onClick={e => setCurrentStep(2)}
								disabled={!checkValidation(1)}
							>Next</button>
						</div>
					</div>
				</section>
				<section id="reservation-information" step={2} className={currentStep >= 2 ? "show" : ""}>
					<div className="container-sm">
						<h2>Give us the deets!</h2>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="name" className="required">Name</label>
							<input
								id="name"
								name="name"
								value={name}
								onChange={e => setName(e.target.value)}
								type="text"
								placeholder="John Smith"
								required
							/>
						</div>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="phone" className="required">Phone</label>
							<input
								id="phone"
								name="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								type="phone"
								placeholder="000-000-0000"
								required
							/>
						</div>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								name="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								placeholder="johnsmith@example.com"
								required
							/>
						</div>
						<div className="row fieldgroup fullwidth">
							<label htmlFor="occasion" className="required">Occasion</label>
							<select
								id="occasion"
								name="occasion"
								value={occasion}
								onChange={e => setOccasion(e.target.value)}
							>
								<option value="Select a time">Select an occasion</option>
								<option value="Dinner">Dinner</option>
								<option value="Anniversary">Anniversary</option>
								<option value="Birthday">Birthday</option>
								<option value="Celebration">Celebration</option>
								<option value="Corporate">Corporate</option>
								<option value="Holiday">Holiday</option>
								<option value="Private">Private</option>
								<option value="Wedding">Wedding</option>
								<option value="Other">Other (specify in Special Requests)</option>
							</select>
						</div>
						<div className="row">
							<label htmlFor="special-requests">Special Requests</label>
						</div>
						<div className="row">
							<textarea id="special-requests" name="special-requests"></textarea>
						</div>
						<div className="row form-buttons">
							<button
								className="btn btn-subtle"
								onClick={e => setCurrentStep(1)}
							>Back</button>
							<input
								type="submit"
								className="btn btn-primary"
								value="Reserve a table"
								disabled={!checkValidation(2)}
							/>
						</div>
					</div>
				</section>
				<section id="reservation-confirmation" className={currentStep >= 3 ? "show" : ""}>
					<div className="container">
						<div className="row">
							<div className="col">
								<img className="" src={map} alt="map for little lemon" />
							</div>
							<div className="col">
								<h2 className="text-align-left" style={{ marginBottom: '2rem' }}>Your table is booked!</h2>
								{fullDate ? (
									<p className="font-weight-medium text-green large" style={{ marginBottom: '2rem' }}>We look forward to seeing you on <strong>{days[fullDate.getDay()]}, {months[fullDate.getMonth()]} {fullDate.getDate() + 1} at {time}</strong>.</p>
								) : null}
								<p style={{ marginBottom: '3.5rem' }}>Call us to make any changes to your reservation.<br />555-555-5555</p>
								<div>
									<p className="large"><strong>Little Lemon</strong></p>
									<p>1234 Main St.<br />Chicago, IL 55555</p>
									<p>555-555-5555</p>
								</div>
							</div>
						</div>
						<div className="row form-buttons" style={{ justifyContent: "flex-start" }}>
							<Link to="/menu" className="btn btn-primary">View Menu</Link>
							<Link to="/reservations" className="btn btn-subtle">Make another reservation</Link>
						</div>
					</div>
				</section>
			</form>
		</>
	)
}

export default BookingPage;