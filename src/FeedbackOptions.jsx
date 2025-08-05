function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className="feedback-container">
            {options.map(option => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    )
}

export default FeedbackOptions