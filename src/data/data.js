import { Basket, User } from "../assets/icons";

import bruchetta from "../assets/bruchetta.jpg";
import greekSalad from "../assets/greek-salad.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

import adrianaMitchell from "../assets/reviews/adriana-mitchell.jpg";
import bethanyRedi from "../assets/reviews/bethany-redi.jpg";
import destinyGarland from "../assets/reviews/destiny-garland.jpg";
import eltonHayes from "../assets/reviews/elton-hayes.jpg";

export const mainNav = [
	{
		id: 0,
		name: "Home",
		path: "/",
		variant: "link"
	},
	{
		id: 1,
		name: "About",
		path: "/about",
		variant: "link"
	},
	{
		id: 2,
		name: "Menu",
		path: "/menu",
		variant: "link"
	},
	{
		id: 3,
		name: "Reservations",
		path: "/reservations",
		variant: "link"
	},
	{
		id: 4,
		name: "Order Online",
		path: "/menu",
		variant: "button"
	},
]

export const secondaryNav = [
	{
		id: 0,
		name: "",
		path: "/cart",
		icon: <Basket height="24" />
	},
	{
		id: 1,
		name: "Log in",
		path: "/account",
		icon: <User />
	},
]



export const menu = [
	{
		id: 0,
		name: "Greek Salad",
		price: 12.99,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: greekSalad,
		special: true,
	},
	{
		id: 1,
		name: "Bruchetta",
		price: 7.99,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: bruchetta,
		special: true,
	},
	{
		id: 2,
		name: "Grilled Fish",
		price: 20.00,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: "",
		special: false,
	},
	{
		id: 3,
		name: "Pasta",
		price: 18.99,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: "",
		special: false,
	},
	{
		id: 4,
		name: "Lemon Dessert",
		price: 6.99,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: lemonDessert,
		special: true,
	},
]



export const reviews = [
	{
		id: 0,
		name: "Elton Hayes",
		image: eltonHayes,
		handle: "EltonReviews",
		rating: 5,
		review: "I stumbled on this undiscovered gem right in our neighboorhood. Everything was simply decadent. I found the ambiance to be very charming.",
		featured: true,
	},
	{
		id: 1,
		name: "Destiny Garland",
		image: destinyGarland,
		handle: "ScorpioThings",
		rating: 4,
		review: "I was pleasantly surprised. Make sure to save room for dessert, because that was the best part of the meal! The waiter did an excellent job.",
		featured: true,
	},
	{
		id: 2,
		name: "Bethany Redi",
		image: bethanyRedi,
		handle: "RediOrNot",
		rating: 4,
		review: "This was one of the best mouth-watering steaks I've had grace my taste buds in a long time. The decor was unique and incredible.",
		featured: true,
	},
	{
		id: 3,
		name: "Adriana Mitchell",
		image: adrianaMitchell,
		handle: "CatTrees",
		rating: 5,
		review: "OMG! So awesome! Everything I tried was bursting with flavor. The food was cooked to perfection. Try out the huge selection of incredible appetizers.",
		featured: true,
	},
]