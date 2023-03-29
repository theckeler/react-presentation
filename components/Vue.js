export default function Vue({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>Exploring Vue.js/Nuxt.js</h1>

			<div className={slideContainerCSS}>
				<p>
					Vue.js is a modern JavaScript framework for building user interfaces
					on the web.
				</p>

				<p>Advantages of Vue.js:</p>
				<ul>
					<li>
						Relatively easy to learn and use compared to other JavaScript
						frameworks
					</li>
					<li>
						Highly flexible and customizable, allowing developers to create
						unique and innovative web experiences for their users
					</li>
					<li>
						Large and active community of developers contributing to its
						development and improvement
					</li>
				</ul>
				<p>
					Vue.js works by creating reusable components that can be combined to
					create complex pages and user interfaces.
				</p>
			</div>
		</>
	);
}
