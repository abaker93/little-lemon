import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Minus, Plus } from "../assets/icons";
import map from '../assets/map.jpg';

const BookingForm = props => {
	const [currentStep, availableTimes, occasions, date, time, guests, location, name, phone, email, occasion, other, requests, dispatch] = [props.currentStep, props.availableTimes, props.occasions, props.date, props.time, props.guests, props.location, props.name, props.phone, props.email, props.occasion, props.other, props.requests, props.dispatch]
	const [fullDate, setFullDate] = useState("");

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const checkValidation1 = () => {
		return date
			? time !== "Select a time"
				? guests >= 1 && guests <= 10
					? true
					: false
				: false
			: false
	}

	const checkValidation2 = () => {
		return name
			?	phone
				? occasion !== "Select an occasion"
					? occasion === "Other"
						? other
							? true
							: false
						: true
					: false
				: false
			: false
	}

	const getFullDate = date => {
		setFullDate(new Date(date))
	};

	const handleSubmit = e => {
		e.preventDefault();
		getFullDate(`${date} 00:00:00 GMT`);
	};

	return (
		<>
			<section id="stepper">
				<div className="container-sm">
					<section className="stepper">
						<Step
							step={1}
							label="Reservation Details"
							currentStep={currentStep}
							dispatch={dispatch}
						/>
						<Step
							step={2}
							label="Your Information"
							currentStep={currentStep}
							dispatch={dispatch}
							disabled={!checkValidation1()}
						/>
						<Step
							step={3}
							label="Confirmation"
							currentStep={currentStep}
							dispatch={dispatch}
							disabled={!checkValidation2()}
						/>
					</section>
				</div>
			</section>

			<div id="form-container">
				<form id="reservation" onSubmit={handleSubmit}>
					<FormSection id="reservation-details" container="container-sm" show={currentStep >= 1 ? true : false}>
						<h2>When will we see ya?</h2>
						<fieldset className="fullwidth">
							<label htmlFor="date" className="required">Date</label>
							<input
								id="date"
								name="date"
								value={date}
								onChange={e => dispatch({ type: "date", payload: e.target.value})}
								type="date"
								required
							/>
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="time" className="required">Time</label>
							<select
								id="time"
								name="time"
								value={time}
								onChange={e => dispatch({ type: "time", payload: e.target.value})}
							>
								<option value="Select a time">Select a time</option>
								{availableTimes.map(option => (
									<option key={option} value={option}>{option}</option>
								))}
							</select>
						</fieldset>
						<fieldset>
							<div className="col">
								<label htmlFor="guests" className="required">Number of Guests</label>
								<p className="small">Choose a number between 1 & 10</p>
							</div>
							<div className="col">
								<button className="btn btn-text" onClick={() => guests > 1 ? dispatch({ type: "guests", payload: guests - 1}) : dispatch({ type: "guests", payload: 1})}>
									<Minus />
								</button>
								<input
									id="guests"
									name="guests"
									value={guests}
									onChange={e => dispatch({ type: "guests", payload: e.target.value})}
									type="number"
									required
								/>
								<button className="btn btn-text" onClick={() => guests < 10 ? dispatch({ type: "guests", payload: guests + 1}) : dispatch({ type: "guests", payload: 10})}>
									<Plus />
								</button>
							</div>
						</fieldset>
						<fieldset>
							<label>Patio or Dining Room?</label>
							<div className="col">
								<input
									id="dining-room"
									name="location"
									value="Dining Room"
									onChange={e => dispatch({ type: "location", payload: e.target.value})}
									checked={location === "Dining Room"}
									type="radio"
								/>
								<label htmlFor="dining-room">Dining Room</label>
								<input
									id="patio"
									name="location"
									value="Patio"
									onChange={e => dispatch({ type: "location", payload: e.target.value})}
									checked={location === "Patio"}
									type="radio"
								/>
								<label htmlFor="patio">Patio</label>
							</div>
						</fieldset>
						<div className="form-buttons justify-content-end">
							<button
								className="btn btn-primary"
								onClick={() => dispatch({ type: "currentStep", payload: 2})}
								disabled={!checkValidation1()}
							>Next</button>
						</div>
					</FormSection>
					<FormSection id="reservation-information" container="container-sm" show={currentStep >= 2 ? true : false}>
						<h2>Give us the deets!</h2>
						<fieldset className="fullwidth">
							<label htmlFor="name" className="required">Name</label>
							<input
								id="name"
								name="name"
								value={name}
								onChange={e => dispatch({ type: "name", payload: e.target.value})}
								type="text"
								placeholder="John Smith"
								required
							/>
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="phone" className="required">Phone</label>
							<input
								id="phone"
								name="phone"
								value={phone}
								onChange={e => dispatch({ type: "phone", payload: e.target.value})}
								type="phone"
								placeholder="000-000-0000"
								required
							/>
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="email">Name</label>
							<input
								id="email"
								name="email"
								value={email}
								onChange={e => dispatch({ type: "email", payload: e.target.value})}
								type="email"
								placeholder="johnsmith@example.com"
							/>
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="occasion" className="required">Occasion</label>
							<select
								id="occasion"
								name="occasion"
								value={occasion}
								onChange={e => dispatch({ type: "occasion", payload: e.target.value })}
							>
								{occasions.map(option => (
									<option key={option} value={option}>{option}</option>
								))}
							</select>
						</fieldset>
						{occasion === "Other" ? (
							<fieldset className="fullwidth">
								<label htmlFor="other" className="required">Other</label>
								<input
									id="other"
									name="other"
									value={other}
									onChange={e => dispatch({ type: "other", payload: e.target.value })}
									type="text"
									required={occasion === "Other"}
								/>
							</fieldset>
						) : null}
						<fieldset className="fullwidth">
							<label htmlFor="requests">Special Requests</label>
							<textarea
								id="requests"
								name="requests"
								value={requests}
								onChange={e => dispatch({ type: "requests", payload: e.target.value })}
							></textarea>
						</fieldset>
						<div className="form-buttons">
							<button
								className="btn btn-subtle"
								onClick={() => dispatch({ type: "currentStep", payload: 1})}
							>Back</button>
							<input
								type="submit"
								className="btn btn-primary"
								value="Reserve a table"
								onClick={() => dispatch({ type: "currentStep", payload: 3})}
								disabled={!checkValidation2()}
							/>
						</div>
					</FormSection>
				</form>

				<FormSection id="reservation-confirmation" container="container" show={currentStep >= 3 ? true : false}>
					<div className="row">
						<div className="col">
							<img src={map} alt="map for little lemon" />
						</div>
						<div className="col">
							<h2>Your table is booked!</h2>
							{fullDate ? (
								<p className="date">We look forward to seeing you on <strong>{days[fullDate.getUTCDay()]}, {months[fullDate.getUTCMonth()]} {fullDate.getUTCDate()} at {time}</strong>.</p>
							) : null}
							<p className="phone">Call us to make any changes to your reservation.<br />555-555-5555</p>
							<div className="address">
								<p className="large"><strong>Little Lemon</strong></p>
								<p>1234 Main St.<br />Chicago, IL 55555</p>
								<p>555-555-5555</p>
							</div>
						</div>
					</div>
					<div className="row form-buttons justify-content-start">
						<Link to="/menu" className="btn btn-primary">View Menu</Link>
						<Link to="/reservations" className="btn btn-subtle">Make another reservation</Link>
					</div>
				</FormSection>
			</div>
		</>
	)
}

const FormSection = props => {
	if (props.show) {
		return (
			<section id={props.id} className={props.show ? "show" : "hide"}>
				<div className={props.container}>
					{props.children}
				</div>
			</section>
		)
	}
}

const Step = props => {
	const [step, currentStep, dispatch] = [props.step, props.currentStep, props.dispatch];

	if (step < currentStep) {
		return (
			<div className={`step complete${props.disabled ? " disabled" : ""}`} onClick={() => !props.disabled ? dispatch({ type: "currentStep", payload: step }) : null}>
				<div className="step-icon">
					<Check fill="#FFFFFF" />
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step === currentStep) {
		return (
			<div className={`step current${props.disabled ? " disabled" : ""}`} onClick={() => !props.disabled ? dispatch({ type: "currentStep", payload: step }) : null}>
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step > currentStep) {
		return (
			<div className={`step${props.disabled ? " disabled" : ""}`} onClick={() => !props.disabled ? dispatch({ type: "currentStep", payload: step }) : null}>
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}
}

export default BookingForm;