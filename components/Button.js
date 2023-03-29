export default function Button({
	whichWay,
	copy,
	currentNum,
	slides,
	isDisabled,
}) {
	return (
		<button
			className={`btn px-3 py-2 bg-white`}
			onClick={() => whichWay()}
			disabled={isDisabled ? true : false}>
			{copy}
		</button>
	);
}
