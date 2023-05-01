import { useState } from "react";
import { Angle, Check, Minus, Plus } from "../assets/icons";
import heroImg from "../assets/restaurant-chef.jpg";

const BookingPage = () => {
	return (
		<>
			<Hero />
			<Stepper />
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

const Stepper = () => {
	let currentStep = 1;

	return (
		<section id="stepper">
			<div className="container-sm">
				<section className="stepper">
					<Step
						step={1}
						currentStep={currentStep}
						label="Reservation Details"
					/>
					<Step
						step={2}
						currentStep={currentStep}
						label="Your Information"
					/>
					<Step
						step={3}
						currentStep={currentStep}
						label="Confirmation"
					/>
				</section>
			</div>
		</section>
	)
}

const Step = (props) => {
	const step = props.step;
	const currentStep = props.currentStep;

	if (step < currentStep) {
		return (
			<div className="step complete">
				<div className="step-icon">
					<Check fill="#FFFFFF" />
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step === currentStep) {
		return (
			<div className="step current">
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}

	if (step > currentStep) {
		return (
			<div className="step">
				<div className="step-icon">
					{props.step}
				</div>
				<p className="step-label">{props.label}</p>
			</div>
		)
	}
}

const BookingForm = () => {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const today = new Date();
	const currentDate = {
		year:		today.getFullYear(),
		month:	today.getMonth(),
		date:		today.getDay(),
		day:		today.getDate(),
	}

	const [month, setMonth] = useState(currentDate.month);
	const [year, setYear] = useState(currentDate.year);

	const [selectedDate, setSelectedDate] = useState({
		year:		currentDate.year,
		month:	currentDate.month,
		date:		currentDate.date,
	})

	const handleClick = e => {
		if (e === "nextMonth") {
			if (month === 11) {
				setMonth(0)
				setYear(year++)
			} else {
				setMonth(month++)
			}
		}

		if (e === "prevMonth") {
			if (month === 0) {
				setMonth(11)
				setYear(year--)
			} else {
				setMonth(month--)
			}
		}
	}

	console.log(month, year)

	return (
		<form id="reservation">
			<section id="reservation-details">
				<div className="container">
					<h2>When will we see ya?</h2>
					<div className="row date-time">
						<div className="col calendar">
							<div className="row cal-title">
								<Angle direction="left" fill="#333333" onClick={handleClick("prev")} />
								<p className="small">{months[month]} {year}</p>
								<Angle direction="right" fill="#333333" onClick={handleClick("next")} />
							</div>
							<div className="cal-days">
								<div className="cal-day weekend">Su</div>
								<div className="cal-day">Mo</div>
								<div className="cal-day">Tu</div>
								<div className="cal-day">We</div>
								<div className="cal-day">Th</div>
								<div className="cal-day">Fr</div>
								<div className="cal-day weekend">Sa</div>
							</div>
								<CalDates year={year} month={month} date={month === currentDate.month ? currentDate.date : null} day={month === currentDate.month ? currentDate.day : null}  />
						</div>
						<div className="col time-select">
							<div className="row time-title">
								<div className="col">
									<p>Thursday, January 12</p>
								</div>
								<div className="col">
									<Angle direction="left" fill="#919191" />
									<Angle direction="right" fill="#919191" />
								</div>
							</div>
							<div className="row time-chips">
								<div className="chip">4:00 PM</div>
								<div className="chip">4:30 PM</div>
								<div className="chip disabled">5:00 PM</div>
								<div className="chip">5:30 PM</div>
								<div className="chip disabled">6:00 PM</div>
								<div className="chip selected">6:30 PM</div>
								<div className="chip">7:00 PM</div>
								<div className="chip disabled">7:30 PM</div>
								<div className="chip disabled">8:00 PM</div>
								<div className="chip disabled">8:30 PM</div>
								<div className="chip">9:00 PM</div>
								<div className="chip disabled">9:30 PM</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-sm">
					<div className="row guests">
						<div className="col">
							<label htmlFor="guests" className="required">Number of Guests</label>
						</div>
						<div className="col">
							<Minus />
							<input id="guests" type="number" min="2" max="20" value="20" required />
							<Plus />
						</div>
					</div>
					<div className="row location">
						<div className="col">
							<label>Patio or Dining Room?</label>
						</div>
						<div className="col">
						<input id="dining-room" type="radio" name="location" value="dining room" checked />
							<label htmlFor="dining-room">Dining Room</label>
							<input id="patio" type="radio" name="location" value="patio" />
							<label htmlFor="patio">Patio</label>
						</div>
					</div>
					<div className="row form-buttons">
						<a href="#" className="btn btn-primary">Next</a>
					</div>
				</div>
			</section>
		</form>
	)
}

const CalDates = p => {
	let first = new Date(`${p.month + 1} 1, ${p.year}`);
	let day = first.getDay();
	const monthLength = {
		0: 31,
		1: p.year % 4 === 0 ? p.year % 100 === 0 ? 29 : 28 : 28,
		2: 31,
		3: 30,
		4: 31,
		5: 30,
		6: 31,
		7: 31,
		8: 30,
		9: 31,
		10: 30,
		11: 31,
	}
	let i = 1;

	let calendar = []

	while (i < p.day) {
		if (i === 1 && day !== 0) {
			while (day > 0) {
				calendar.push({class: null, date: null})
				day === 0 ? day = 6 : day--
			}
		}
		calendar.push({class: "disabled", date: i})
		i++
	}
	day = p.day;

	for (i; i <= monthLength[p.month]; i++) {
		// console.log(i, day, p.date)
		if (i === 1 && day !== 0) {
			while (day > 0) {
				calendar.push({class: null, date: null})
				day--
			}
			day = p.day;
		}
		if (i === p.date) {
			if (day === 0 || day === 6) {
				calendar.push({class: "today weekend", date: i})
			} else {
				calendar.push({class: "today", date: i})
			}
			day === 6 ? day = 0 : day++
		} else {
			if (day === 0 || day === 6) {
				console.log()
				calendar.push({class: "weekend", date: i})
			} else {
				calendar.push({class: null, date: i})
			}
			day === 6 ? day = 0 : day++
		}
	}

	return (
		<div className="cal-dates">
			{calendar.map((m, index) => (
				<div key={index} className={`cal-date${m.class ? ` ${m.class}` : ""}`}>{m.date}</div>
			))}
		</div>
	);
}

export default BookingPage;