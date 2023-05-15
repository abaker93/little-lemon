import map from '../assets/map.jpg';

const ConfirmedBooking = props => {
	const [time, fullDate, name] = [props.time, props.fullDate, props.name];

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return (
		<div id="reservation-confirmation">
			<div className="container">
				<div className="row">
					<div className="col">
						<img src={map} alt="map for little lemon" />
					</div>
					<div className="col">
						<h2>{name}, your table is booked!</h2>
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
			</div>
		</div>
	)
}

export default ConfirmedBooking;