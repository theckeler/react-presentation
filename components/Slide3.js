export default function Slide3({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>Slide 3: Who Uses React/Next?</h1>
			<div className={slideContainerCSS}>
				<p>React.js/Next.js is used by a wide range of companies, including:</p>
				<ul>
					<li>American</li>
					<li>Airbnb</li>
					<li>Best Buy</li>
					<li>CVS</li>
					<li>Dropbox</li>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Netflix</li>
					<li>Nike</li>
					<li>PayPal</li>
					<li>Uber</li>
					<li>Walmart</li>
					<li>Note that this is not an exhaustive list.</li>
				</ul>
			</div>
		</>
	);
}
