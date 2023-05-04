import heroImg from "../assets/mario-adrian-1.jpg";

const Cart = () => {
	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="col">
						<h1>Cart</h1>
						<p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
					</div>
					<div className="col image">
						<img className="radius-lg" src={heroImg} alt="preparing a dish" />
					</div>
				</div>
			</section>
			<section id="content">
				<div className="container">
					<h2>Cart coming soon!</h2>
				</div>
			</section>
		</>
	)
}

export default Cart;