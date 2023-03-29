export default function Slide1({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>Slide 1: New Tech - Headless</h1>
			<div className={slideContainerCSS}>
				<p>
					Headless websites are a type of web architecture that separates the
					front-end (the part of the website that users see and interact with)
					from the back-end (the part of the website that manages data and
					functionality).
				</p>
				<p>
					In a headless architecture, the front-end is built as a separate
					application that communicates with the back-end through an API
					(application programming interface).
				</p>
				<p>Benefits of headless websites:</p>
				<ul>
					<li>
						Greater flexibility and agility in the development process Highly
						scalable and easily integrated with other software applications and
						platforms
					</li>
					<li>
						Allows for highly customized and tailored experiences for customers
					</li>
					<li>More cost-effective in the long run</li>
				</ul>
			</div>
		</>
	);
}
