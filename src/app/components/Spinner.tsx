"use-client"
import ClipLoader from "react-spinners/ClipLoader"

const Spinner = () => {
	const override = {
		display: "block",
	}
	return (
		<div className={"flex items-center justify-center min-h-screen"}>
			<ClipLoader
				color="#3b82f6"
				cssOverride={override}
				size={50}
				aria-label="Loading Spinner"
			/>
		</div>
	)
}

export default Spinner
