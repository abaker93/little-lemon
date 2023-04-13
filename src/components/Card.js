const Card = (props) => {
	return (
		<article className={`card${props.className ? ` ${props.className}` : ""}`}>
			{props.children}
		</article>
	)
}

export { Card }