export default function ReactWhoUses({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>Who Uses React/Next?</h1>
			<div className={slideContainerCSS}>
				<p>React.js/Next.js is used by a wide range of companies, including:</p>
				<ul>
					<li>American Express</li>
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

				<p>
					React.js is also used with Salesforce Commerce Cloud by companies such
					as:
				</p>
				<ul>
					<li>Adidas</li>
					<li>Gap, Old Navy</li>
					<li>Ikea</li>
					<li>Lego</li>
					<li>Under Armour</li>
					<li>Note that this is not an exhaustive list.</li>
				</ul>
			</div>
		</>
	);
}
