export default function Slide2({ slideContainerCSS }) {

	return (
		<div className={slideContainerCSS}>
			<h1>Slide 2: React.js/Next.js</h1>
			<p>
				React.js is a popular JavaScript framework for developing web
				applications.
			</p>

			<p>Advantages of React.js:</p>
			<ul>
				<li>
					Allows developers to build complex applications using reusable
					components, saving time and money
				</li>
				<li>
					Highly scalable, allowing for flexible and adaptable applications that
					can meet current and future requirements
				</li>
				<li>
					Large and active community of developers, offering ongoing updates and
					support as well as resources, tutorials, and tools
				</li>
			</ul>

			<p>Potential disadvantages of React.js:</p>
			<ul>
				<li>Steep learning curve</li>
				<li>Potential performance issues in certain circumstances</li>
			</ul>
		</div>
	);
}
