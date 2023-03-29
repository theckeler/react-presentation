export default function Button({ whichWay, copy }) {
	return (
		<button className="btn p-4" onClick={() => whichWay()}>
			{copy}
		</button>
	);
}
