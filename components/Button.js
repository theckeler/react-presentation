export default function Button({ whichWay, copy }) {
	return (
		<button className="btn px-3 py-2 bg-white" onClick={() => whichWay()}>
			{copy}
		</button>
	);
}
