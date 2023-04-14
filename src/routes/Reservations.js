const Reservations = () => {
	return (
		<>
			<Hero />
			<Form />
		</>
	)
}

const Hero = () => {
	return (
		<section id="hero">
			<div className="col">
				<h1>Reserve a Table</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
			</div>
			<div className="col">
				<img src="" alt="preparing a dish" />
			</div>
		</section>
	)
}

const Form = () => {
	return (
		<form id="reservation">
			<formgroup>
				Calendar
			</formgroup>
		</form>
	)
}

export default Reservations;