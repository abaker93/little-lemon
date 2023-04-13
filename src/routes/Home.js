import { Card } from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Specials />

			</main>
		</>
	)
}

const Hero = () => {
	return (
		<section className="hero">
			<div class="col">
				<h1>Little Lemon <span>Chicago</span></h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
				<button type="button">Reserve a table</button>
			</div>
			<div class="col">
				<img src="" alt="bruchetta on serving tray" />
			</div>
		</section>
	)
}

const Specials = () => {
	return (
		<section className="specials">
			<div className="row">
				<h2>Specials</h2>
				<button type="button">Menu</button>
			</div>
			<div className="row">
				<SpecialCard
					img=""
					title="Greek Salad"
					price="12.99"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
				/>

				<SpecialCard
					img=""
					title="Bruchetta"
					price="7.99"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
				/>

				<SpecialCard
					img=""
					title="Lemon Dessert"
					price="5.99"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
				/>
			</div>
		</section>
	)
}

const SpecialCard = (props) => {
	return (
		<div className="card card-specials">
			<div className="card-image">
				<img src={props.img} alt={props.title} />
			</div>
			<div className="card-heading">
				<h3>{props.title}</h3>
				<p className="price">${props.price}</p>
			</div>
			<div className="card-body">
				<p>{props.description}</p>
			</div>
			<div className="card-footer">
				<button className="btn-link btn-icon">Order for delivery <img src="" alt="moped" /></button>
			</div>
		</div>
	)
}

const Reviews = () => {

}

export default Home;