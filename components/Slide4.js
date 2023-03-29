export default function Slide4({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>
				Slide 4: Who Uses React w/ Salesforce Commerce Cloud?
			</h1>

			<div className={slideContainerCSS}>
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
