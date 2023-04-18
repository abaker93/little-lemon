import { Angle, Minus, Plus } from "../assets/icons";
import heroImg from "../assets/restaurant-chef.jpg";

const Reservations = () => {
	return (
		<>
			<Hero />
			<Steps />
			<Form />
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

const Steps = () => {
	return (
		<div className="container">
			<section id="stepper">
				<div className="step">
					<p className="step-label">Reservation Details</p>
				</div>
				<div className="step">
					<p className="step-label">Your Information</p>
				</div>
				<div className="step">
					<p className="step-label">Confirmation</p>
				</div>
			</section>
		</div>
	)
}

const Form = () => {
	return (
		<form id="reservation">
			<section id="reservation-details">
				<div className="container">
					<h2>When will we see ya?</h2>
					<div className="row date-time">
						<div className="col calendar">
							<div className="row cal-title">
								<Angle direction="left" />
								<label>January 2023</label>
								<Angle direction="right" />
							</div>
							<div className="row cal-days">
								<div className="cal-day weekend">Su</div>
								<div className="cal-day">Mo</div>
								<div className="cal-day">Tu</div>
								<div className="cal-day">We</div>
								<div className="cal-day">Th</div>
								<div className="cal-day">Fr</div>
								<div className="cal-day weekend">Sa</div>
							</div>
							<div className="row cal-dates">
									<div className="cal-date weekend disabled">1</div>
									<div className="cal-date disabled">2</div>
									<div className="cal-date disabled">3</div>
									<div className="cal-date disabled">4</div>
									<div className="cal-date disabled">5</div>
									<div className="cal-date disabled">6</div>
									<div className="cal-date weekend disabled">7</div>
							</div>
							<div className="row cal-dates">
									<div className="cal-date weekend disabled">8</div>
									<div className="cal-date disabled">9</div>
									<div className="cal-date today">10</div>
									<div className="cal-date">11</div>
									<div className="cal-date selected">12</div>
									<div className="cal-date">13</div>
									<div className="cal-date weekend">14</div>
							</div>
							<div className="row cal-dates">
									<div className="cal-date weekend">15</div>
									<div className="cal-date">16</div>
									<div className="cal-date">17</div>
									<div className="cal-date">18</div>
									<div className="cal-date">19</div>
									<div className="cal-date">20</div>
									<div className="cal-date weekend">21</div>
							</div>
							<div className="row cal-dates">
									<div className="cal-date weekend">22</div>
									<div className="cal-date">23</div>
									<div className="cal-date">24</div>
									<div className="cal-date">25</div>
									<div className="cal-date">26</div>
									<div className="cal-date">27</div>
									<div className="cal-date weekend">28</div>
							</div>
							<div className="row cal-dates">
									<div className="cal-date weekend">29</div>
									<div className="cal-date">30</div>
									<div className="cal-date">31</div>
									<div className="cal-date disabled">1</div>
									<div className="cal-date disabled">2</div>
									<div className="cal-date disabled">3</div>
									<div className="cal-date weekend disabled">4</div>
							</div>
						</div>
				
						<div className="col time-select">
							<div className="row time-title">
								<div className="col">
									<label>Thursday, January 12</label>
								</div>
								<div className="col">
									<Angle direction="left" />
									<Angle direction="right" />
								</div>
							</div>
							<div className="row time-chips">
								<div className="chip">4:00 PM</div>
								<div className="chip">4:30 PM</div>
								<div className="chip disabled">5:00 PM</div>
								<div className="chip">5:30 PM</div>
								<div className="chip disabled">6:00 PM</div>
								<div className="chip active">6:30 PM</div>
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
				<div class="container-sm">
					<div className="row guests">
						<div className="col">
							<label htmlFor="guests" required>Number of Guests</label>
						</div>
						<div className="col">
							<Minus />
							<input id="guests" type="number" min="2" value="2" required />
							<Plus />
						</div>
					</div>
					<div className="row location">
						<div className="col">
							<label>Patio or Dining Room?</label>
						</div>
						<div className="col">
							<label htmlFor="patio">Patio</label>
							<input id="patio" type="radio" name="location" value="patio" />
							<label htmlFor="dining-room">Dining Room</label>
							<input id="dining-room" type="radio" name="location" value="dining room" />
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

export default Reservations;