import { Link } from "react-router-dom";
import { menu, reviews } from "../data/data";
import { Moped, Star } from "../assets/icons";
import heroImg from "../assets/restaurant-food.jpg";
import aboutImg1 from "../assets/mario-adrian-1.jpg";
import aboutImg2 from "../assets/mario-adrian-2.jpg";

const Home = () => {
	return (
		<>
			<Hero />
			<Specials />
			<Reviews />
			<About />
		</>
	)
}

const Hero = () => {
	return (
		<section id="hero" className="hero-home">
			<div className="container">
				<div className="col text">
					<h1 className="title title-secondary">Little Lemon <span>Chicago</span></h1>
					<p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
					<Link to="/reservations" className="btn btn-primary btn-dark">Reserve a table</Link>
				</div>
				<div className="col image">
					<img className="radius-lg" src={heroImg} alt="bruchetta on serving tray" />
				</div>
			</div>
		</section>
	)
}

const Specials = () => {
	return (
		<section id="specials">
			<div className="container">
				<div className="row heading">
					<h2>Specials</h2>
					<Link to="" className="btn btn-secondary">Menu</Link>
				</div>
				<div className="row specials">
					{menu.filter(f => f.special).map(m => (
						<article key={m.id} className="card card-special">
							<div className="card-image">
								<img src={m.image} alt={m.name} />
							</div>
							<div className="card-content">
								<div className="card-heading">
									<h3>{m.name}</h3>
									<p className="price">${m.price}</p>
								</div>
								<div className="card-body">
									<p>{m.description}</p>
								</div>
								<div className="card-footer">
									<Link to="" className="btn btn-link btn-icon">Order for delivery <Moped /></Link>
								</div>
							</div>
						</article>
					))}
				</div>
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
			<div className="container-lg">
				<div className="row heading">
					<h2>What our customers say!</h2>
				</div>
				<div className="row reviews">
					{reviews.filter(f => f.featured).map(r => (
						<article key={r.id} className="card card-review">
							<div className="card-heading">
								<div className="row rating">
									{getStars(r.rating).map((s, index) => (
										s === 1
											? <Star key={index} fill="#F4CE14" variant="fill" />
											: <Star key={index} fill="#EDEFEE"variant="outline" />
									))}
								</div>
								<div className="row user">
									<div className="col">
										<img src={r.image} alt={r.name} />
									</div>
									<div className="col">
										<h3>{r.name}</h3>
										<p>@{r.handle}</p>
									</div>
								</div>
							</div>
							<div className="card-body">
								<p className="small">{r.review}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

const About = () => {
	return (
		<section id="about">
			<div className="container">
				<div className="col">
					<h2 className="title title-primary">Little Lemon <span>Chicago</span></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
				<div className="col images">
					<img src={aboutImg1} alt="mario and adrian" />
					<img src={aboutImg2} alt="mario and adrian" />
				</div>
			</div>
		</section>
	)
}

export default Home;