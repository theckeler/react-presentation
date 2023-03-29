export default function EaseofDevelopment({ slideContainerCSS, h1CSS }) {
	return (
		<>
			<h1 className={h1CSS}>
				React/Vue/Angular vs Salesforce: Ease of Development
			</h1>
			<div className={slideContainerCSS}>
				<ul>
					<li>
						React, Vue, and Angular are popular front-end frameworks that offer
						a more flexible and customizable development experience compared to
						Salesforce.
					</li>
					<li>
						Salesforce&apos;s development platform has a steeper learning curve
						due to its proprietary language, Apex, and unique data model.
					</li>
					<li>
						React, Vue, and Angular have larger communities, more extensive
						documentation, and a vast number of open-source libraries, making it
						easier for developers to find resources and get support.
					</li>
					<li>
						In contrast, Salesforce developers have access to a closed
						ecosystem, limiting their options for customization and support.
					</li>
					<li>
						Ultimately, the choice between React/Vue/Angular and Salesforce
						depends on the specific needs of your project and the expertise of
						your development team. If your team is more experienced with
						front-end development and wants more flexibility, React/Vue/Angular
						may be a better choice. However, if you need a comprehensive CRM
						system and have experienced Salesforce developers, Salesforce may be
						the better option.
					</li>
				</ul>
			</div>
		</>
	);
}
