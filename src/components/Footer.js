import { Link, NavLink } from "react-router-dom";
import { mainNav } from "../data/data";
import { Facebook, Google, Instagram, Twitter, Youtube } from "../assets/icons";
import logo from "../assets/logo-vertical.svg";

const Footer = () => {
	return (
		<footer>
			<div className="container-lg">
				<div className="row footer">
					<div className="col justify-self-center">
						<img className="logo" src={logo} alt="little lemon logo" />
					</div>
					<div className="col">
						<nav>
							<ul className="nav-column">
								{mainNav.map(m => (
									<li key={m.id} className="nav-item">
										{m.variant === "link" ? (
											<NavLink to={m.path} className="nav-link">
												{m.name}
											</NavLink>
										) : (
											<NavLink to={m.path} className="nav-link btn btn-primary">
												{m.name}
											</NavLink>
										)}
									</li>
								))}
								<li className="nav-item">
									<NavLink to="/account" className="nav-link btn btn-subtle">Log in</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col contact">
						<h6>Contact</h6>
						<p>
							1234 Main St. <br />
							Chicago, IL 55555
						</p>
						<p>555-555-5555</p>
						<p>hello@littlelemon.com</p>
					</div>
					<div className="col">
						<h6>Follow Us!</h6>
						<div className="social">
							<Link to="https://www.instagram.com" target="_blank">
								<Instagram />
							</Link>
							<Link to="https://www.facebook.com" target="_blank">
								<Facebook />
							</Link>
							<Link to="https://www.twitter.com" target="_blank">
								<Twitter />
							</Link>
							<Link to="https://www.google.com" target="_blank">
								<Google />
							</Link>
							<Link to="https://www.youtube.com" target="_blank">
								<Youtube />
							</Link>
						</div>
						
					</div>
				</div>
				<div className="row heel">
					<div className="col">
						<p><Link to="" >Privacy Policy</Link></p>
					</div>
					<div className="col">
						<p>&copy;{new Date().getFullYear()} Little Lemon. Powered by <Link href="annabaker.dev" target="_blank">Anna Baker Development</Link></p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;