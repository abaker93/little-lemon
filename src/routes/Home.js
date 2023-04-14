import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { menu, reviews } from "../data/data";

const Home = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Specials />
				<Reviews />
				<About />
			</main>
			<Footer />
		</>
	)
}

const Hero = () => {
	return (
		<section id="hero">
			<div className="col">
				<h1>Little Lemon <span>Chicago</span></h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
				<button type="button">Reserve a table</button>
			</div>
			<div className="col">
				<img src="" alt="bruchetta on serving tray" />
			</div>
		</section>
	)
}

const Specials = () => {
	return (
		<section id="specials">
			<div className="row">
				<h2>Specials</h2>
				<button type="button">Menu</button>
			</div>
			<div className="row">
				{menu.filter(f => f.special).map(m => (
					<article key={m.id} className="card card-special">
						<div className="card-image">
							<img src={m.image} alt={m.name} />
						</div>
						<div className="card-heading">
							<h3>{m.name}</h3>
							<p className="price">${m.price}</p>
						</div>
						<div className="card-body">
							<p>{m.description}</p>
						</div>
						<div className="card-footer">
							<button className="btn-link btn-icon">Order for delivery <img src="" alt="moped" /></button>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

const Reviews = () => {
	const getStars = x => {
		const stars = [];

		if (x < 1 || x > 5) { return }

		for (let i = 0; i < 5; i++) {
			if (i < x) {
				stars.push(1)
			} else {
				stars.push(0)
			}
		}

		return stars
	}

	return (
		<section id="reviews">
			<div className="row">
				<h2>What our customers say!</h2>
			</div>
			<div className="row">
				{reviews.filter(f => f.featured).map(r => (
					<article key={r.id} className="card card-review">
						<div className="card-heading">
							<div className="row">
								{getStars(r.rating).map((s, index) => (
									s === 1
										? <img key={index} src="" alt="filled star" />
										: <img key={index} src="" alt="outlined star" />
								))}
							</div>
							<div className="row">
								<div className="col">
									<img src={r.image} alt={r.name} />
								</div>
								<div className="col">
									<h3>{r.name}</h3>
									<p>{r.handle}</p>
								</div>
							</div>
						</div>
						<div className="card-body">
							<p>{r.review}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

const About = () => {
	return (
		<section id="about">
			<div className="col">
				<h2>Little Lemon <span>Chicago</span></h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
			</div>
			<div className="col">
				<img src="" alt="mario and adrian" />
				<img src="" alt="mario and adrian" />
			</div>
		</section>
	)
}

export default Home;