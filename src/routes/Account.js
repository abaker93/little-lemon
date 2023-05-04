import heroImg from "../assets/lemon-dessert.jpg";

const Account = () => {
	return (
		<>
			<section id="hero">
				<div className="container">
					<div className="col">
						<h1>Account</h1>
						<p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
					</div>
					<div className="col image">
						<img className="radius-lg" src={heroImg} alt="preparing a dish" />
					</div>
				</div>
			</section>
			<section id="content">
				<div className="container">
					<h2>Account coming soon!</h2>
				</div>
			</section>
		</>
	)
}

export default Account;