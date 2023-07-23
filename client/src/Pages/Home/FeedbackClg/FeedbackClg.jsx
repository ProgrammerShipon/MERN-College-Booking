import useClgFeedback from "../../../hooks/useClgFeedback";

const FeedbackClg = () => {
	const { feedbackClgData, feedbackClgLoading, feedbackClgRefetch } =
		useClgFeedback();

	console.log("feedbackClgData -> ", feedbackClgData);

	return (
		<div>
			<h1> This is A Feed Back - {feedbackClgData.length} </h1>
		</div>
	);
};

export default FeedbackClg;
