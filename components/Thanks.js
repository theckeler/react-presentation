export default function Thanks({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>Thanks for viewing this slideshow!</h1>
			<div className={slideContainerCSS}>
				<p>
					This slideshow was created using React.js, one of the most popular
					front-end frameworks for building web applications. We hope you found
					this presentation informative and helpful. If you have any questions
					or comments, please don&apos;t hesitate to reach out.
				</p>
			</div>
		</>
	);
}
