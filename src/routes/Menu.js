import heroImg from "../assets/greek-salad.jpg";

const Menu = () => {
	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="col">
						<h1>Menu</h1>
						<p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
					</div>
					<div className="col image">
						<img className="radius-lg" src={heroImg} alt="preparing a dish" />
					</div>
				</div>
			</section>
			<section id="content">
				<div className="container">
					<h2>Menu coming soon!</h2>
				</div>
			</section>
		</>
	)
}

export default Menu;